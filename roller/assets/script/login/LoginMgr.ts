
import { GConst } from "../common/Global";
import LocalData from "../common/LocalData";
import Module from "../common/Module";
import Utils from "../common/Utils";

/**账户信息 */
export interface IUserInfo {
    account: string;
    passWord: string;
}

/**固定提示语 */
const LoginTips = {
    noAccount: `User does not exist, please sign up`,
    noPassWord: `Password error, please re-enter`,
    hasAccount: `Account already exists, please sign in`,
    signUpSucceed: `sign up succeed`,
    needInfo: `Please add account and password`,
}

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoginMgr extends Module {

    @property(cc.EditBox)
    accountEditBox: cc.EditBox = null;

    @property(cc.EditBox)
    passWordEditBox: cc.EditBox = null;

    @property(cc.Button)
    signInBtn: cc.Button = null;

    @property(cc.Button)
    signOutBtn: cc.Button = null;

    @property(cc.Button)
    signUpBtn: cc.Button = null;

    @property(cc.Button)
    deleteBtn: cc.Button = null;

    @property(cc.Node)
    tipsContainer: cc.Node = null;

    private showTw: cc.Tween = null;
    private hideTw: cc.Tween = null;

    /**登录相关数据 */
    private loginData: LocalData = null;
    /**用户列表 */
    private userList: IUserInfo[];
    /**当前账户 */
    private curUserAccount: string = ``;

    private _isLoginSucceed: boolean = false;
    private get isLoginSucceed(): boolean {
        return this._isLoginSucceed;
    }
    private set isLoginSucceed(v: boolean) {
        this._isLoginSucceed = v;
        this.signOutBtn.node.active = v;
        this.deleteBtn.node.active = v;
        this.signInBtn.node.active = !v;
        this.signUpBtn.node.active = !v;
    }

    /**手动初始化 */
    public init() {
        let time = GConst.changeSceneTime;
        this.showTw = cc.tween(this.node)
            .set({ opacity: 0, active: true })
            .to(time, { opacity: 255 });
        this.hideTw = cc.tween(this.node)
            .set({ opacity: 255 })
            .to(time, { opacity: 0 })
            .set({ active: false });
        let gameId = 9011001;       //不同游戏的不同存储标识
        this.loginData = new LocalData(`loginData${gameId}`);
        this.initUserList();
        this.addEvent();
        this.reset();
    }

    private reset() {
        this.accountEditBox.string = ``;
        this.passWordEditBox.string = ``;
        this.curUserAccount = ``;
        this.tipsContainer.destroyAllChildren();
    }

    public show() {
        this.showTw.start();
    }

    public hide() {
        this.hideTw.start();
    }

    private addEvent() {
        this.accountEditBox.node.on(`editing-did-ended`, this.onAccountEditEnd, this);
        this.signInBtn.node.on(`click`, this.onSignIn, this);
        this.signOutBtn.node.on(`click`, this.onSignOut, this);
        this.signUpBtn.node.on(`click`, this.onSignUp, this);
        this.deleteBtn.node.on(`click`, this.onDelete, this);
    }

    /**初始化用户列表，从local而来/新建 */
    private initUserList() {
        let key = `userList`;
        let userList = this.loginData.getData(key);
        if (!userList) {
            userList = [];
            this.loginData.setData(key, userList);
        }
        this.userList = userList;
    }

    /**保存本地登录数据 */
    private saveUserList() {
        let key = `userList`;
        this.loginData.setData(key, this.userList);
    }

    /**账号输入完成 */
    private onAccountEditEnd(e: cc.EditBox) {
        let content = e.string.trim();
        if (content) this.checkAccount(content);
    }

    /**登录 */
    private onSignIn() {
        let account = this.accountEditBox.string.trim(),
            passWord = this.passWordEditBox.string.trim();
        let isPass = this.checkPassWord(account, passWord);
        if (isPass) this.loginSucceed();
    }

    /**登出 */
    private onSignOut() {
        // Module.get(Hall).hide();
        this.show();
        this.reset();
    }

    /**注册 */
    private onSignUp() {
        let account = this.accountEditBox.string.trim(),
            passWord = this.passWordEditBox.string.trim();
        if (!account || !passWord) {
            this.showTip(LoginTips.needInfo);
            return;
        }
        let hasAccount = this.checkAccount(account, false);
        if (hasAccount) {
            this.showTip(LoginTips.hasAccount);
            return;
        };
        if (!passWord) {
            this.showTip(LoginTips.noPassWord);
            return;
        }
        let info: IUserInfo = {
            account: account,
            passWord: passWord
        };
        this.userList.push(info);
        this.saveUserList();
        this.showTip(LoginTips.signUpSucceed);
    }

    /**注销 */
    private onDelete() {
        let idx = this.userList.findIndex(item => item.account === this.curUserAccount);
        this.userList.splice(idx, 1);
        this.onSignOut();
    }

    /**登录成功 */
    private loginSucceed() {
        this.hide();
        // Module.get(Hall).show();
    }

    /**检查账户是否存在并提示 */
    private checkAccount(account: string, isNeedTip: boolean = true): boolean {
        let info = this.userList.find(item => item.account === account);
        if (!info && isNeedTip) this.showTip(LoginTips.noAccount);
        return !!info;
    }

    /**检查密码是否正确并提示 */
    private checkPassWord(account: string, pass: string): boolean {
        if (!this.checkAccount(account)) return false;
        let info = this.userList.find(item => item.account === account);
        if (info.passWord === pass) return true;
        else {
            this.showTip(LoginTips.noPassWord);
            this.passWordEditBox.string = ``;
            return false;
        }
    }

    /**显示状态信息 */
    private async showTip(tip: string) {
        this.tipsContainer.destroyAllChildren();
        let pre = await Utils.dynamicPrefab(`prefab/login/tip`);
        let node = cc.instantiate(pre);
        node.getComponent(cc.Label).string = tip;
        node.parent = this.tipsContainer;
        cc.tween(node)
            .delay(2)
            .to(0.5, { opacity: 0 })
            .call(() => {
                if (node && node.isValid) node.destroy();
                node = null;
            })
            .start();
    }
}
