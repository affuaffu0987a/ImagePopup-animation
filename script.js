let centerDIv =document.querySelector(".center")
// let Box = document.querySelector(".box")

	
	// Throttling Function
	const throttleFunction=(func, delay)=>{
	let prev = 0;
	return (...args) => {
		let now = new Date().getTime();
		if(now - prev> delay){
		prev = now;
		return func(...args);
		}
	}
	}
	centerDIv.addEventListener("mousemove", throttleFunction((position)=>{
        let div = document.createElement("div");
        div.classList.add("box");
        div.style.left = position.x+"px"
        div.style.top = position.y+"px"
        document.body.appendChild(div)
        setTimeout(()=>{
            div.remove();
        },1000)

        let images = document.createElement("img")
        images.setAttribute("src","https://img.freepik.com/premium-photo/micky-mouse-cartoon-character_691833-782.jpg")
        div.appendChild(images);
        gsap.to(images,{
            y: "0",
            ease: Power2,
            duration: .5
            
        })
        gsap.to(images,{
            y: "100",
            ease: Power2,
            delay : .7
        })
        
	},400));


