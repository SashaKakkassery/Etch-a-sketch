
let container = document.querySelector("#container");

for (let i = 0; i < 256; i++){
    let grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);


    grid.addEventListener('mouseover', function(){
        if(!grid.dataset.hoverCount){
            grid.dataset.hoverCount = 0;
        }

        grid.dataset.hoverCount++;
        let opacity = grid.dataset.hoverCount / 10;

        grid.style.opacity = opacity;
        grid.style.backgroundColor = "yellow";

})
    
}


let button = document.createElement("button");
button.textContent = "Click Me!!!";
button.addEventListener('click', function(){
    let number = parseInt(prompt("What number of squares per side for the new grid? "));

    let previous_grid = document.querySelectorAll(".grid");
    previous_grid.forEach(function(grid){
        grid.remove();
    });
    
    for (let i = 1; i <= (number * number); i++){
        let grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);

        grid.style.width = (800 / number) + 'px';
        grid.style.height = (800 / number) + 'px';



        grid.addEventListener('mouseover', function(){
            if (!grid.dataset.hoverCount){
                grid.dataset.hoverCount = 0;
            }

            grid.dataset.hoverCount++;

            let opacity = grid.dataset.hoverCount / 10;
            grid.style.backgroundColor = 'blue';
            grid.style.opacity = opacity;

    })

    }
    
    
})

document.body.insertBefore(button, container);
button.style.display = "block"
button.style.margin = "0 auto";


