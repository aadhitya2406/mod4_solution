var names=new Array();
names[0]="arjun";
names[1]="johnson";
names[2]="joke";
names[3]="adhitya";
names[4]="elakya";
names[5]="pavan";
names[6]="saral";
names[7]="joe";
names[8]="pushpa";
names[9]="indhu";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}