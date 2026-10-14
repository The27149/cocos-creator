export class Ball {
	private G: number = 6.67 * 10 ** -11;
	protected _mass: number = 0;
	public get mass(): number {
		return this._mass;
	}
	protected _position: any = [0];
	public get position(): any {
		return this._position;
	}

	protected f;
	protected a;
	protected v;



	//计算引力 返回向量
	private force(ball: Ball): any {
		//计算方向向量
		const posVec = ball.position - this.position；
		const distance = 0, direction = [];
		const val = this.G * this._mass * ball._mass / distance ** 2;
		return direction * val;
	}

	update() {

	}
}