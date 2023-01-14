const cvs = document.querySelector('#cvs');
const ctx = cvs.getContext('2d');
const range = document.querySelector('#plot_size')
cvs.width = 500;
cvs.height = 500;

range.addEventListener('input',event=>{
    const value  = event.target.value
    Plot.change_size(ctx,value)
})

//ctx.fillStyle = '#f1c40f'
//ctx.fillRect(10,10,100,200);
//ctx.strokeStyle = '#d35400'
//ctx.strokeRect(10,10,200,200);

/*ctx.beginPath();
ctx.moveTo(250,250);
ctx.lineTo(300,300);
ctx.lineTo(300,250);
ctx.lineTo(250,250);
ctx.fill()*/


/*
const x = [...new Array(1000)].map((_,index)=>index*0.1);
x.forEach(elem=>{
    const y = Math.sin(elem)
    ctx.lineTo(elem*10,y*30+250)
})
ctx.stroke()*/

class Plot{
    static size = 50;
    static plots = [];

static change_size(ctx, value = 1){

    this.size = value;
    ctx.clearRect(0,0,500,500)
   
    this.plots.forEach(plot=>plot.rerender(ctx))
}



    constructor(x_list,func,line_color = '#9b59b6'){
        this.x_list = x_list;
        this.strokeStyle = line_color;
        this._func = func;
        Plot.plots.push(this);
    }
    rerender(ctx){
        ctx.strokeStyle = this.strokeStyle;
        ctx.beginPath();
        this.x_list.forEach(elem=>{
            const y = this._func(elem)
            ctx.lineTo(elem*Plot.size+250,y*Plot.size+250)
        })
        ctx.stroke()
    }
}
const x = [...new Array(10000)].map((_,index)=>index*0.1-50);

const tan = new Plot(x,x=>-(x**2));
tan.rerender(ctx);

const sin = new Plot(x,Math.sin,'#2980b9');
sin.rerender(ctx);