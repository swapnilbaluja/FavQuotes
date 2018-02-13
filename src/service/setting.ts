export class SettingService{
	private altBackground=false;
	setBackGround(isAlt:boolean){
		this.altBackground=isAlt;
	}
	isAltBackground(){
		return this.altBackground;
	}
}