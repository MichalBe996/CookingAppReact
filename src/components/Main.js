import React from 'react'
import Header from "./Header"
import { recipesList } from "./Recipes";
import { useEffect } from "react"







function Main() {

  

  
  {
/// function responsible for appearing recipe cards on main page

useEffect(()=>{
    document.querySelector(".recipes").innerHTML = "";
    document.querySelector(".recipes").classList.remove("clicked");

    for(let i=0; i < recipesList.length; i++){
      let divCard = document.createElement("div");
      divCard.classList.add("recipe-card");
      let image = document.createElement("img");
      image.src = recipesList[i].imgSrc;
      let recipeName = document.createElement("h2");
      recipeName.innerHTML = recipesList[i].name;
      let recipeDescription = document.createElement("h4")
      recipeDescription.innerHTML = recipesList[i].description;
      let showButton = document.createElement("button")
      showButton.classList.add(recipesList[i].id)
      showButton.addEventListener("click", ()=>{
        ///redirecting to recipe page
        document.querySelector(".recipes").innerHTML = "";
        let thisId = parseInt(showButton.classList)-1;
        document.querySelector(".recipes").classList.add("clicked");
        let recipeDiv = document.createElement("div");
        recipeDiv.classList.add("recipe-div");
        let recipeHeader = document.createElement("h1");
        recipeHeader.textContent = recipesList[thisId].name;
        recipeDiv.appendChild(recipeHeader);
        let recipeImg = document.createElement("img");
        recipeImg.src = recipesList[thisId].imgSrc;
        recipeDiv.appendChild(recipeImg);
        let ingredientsHeader = document.createElement("h2");
        ingredientsHeader.textContent = "Ingredients";
        recipeDiv.appendChild(ingredientsHeader);
        let ingredientsList = document.createElement("ul");
        recipesList[thisId].ingredients.forEach((element)=>{
          console.log("element")
          let ingredient = document.createElement("li");
          ingredient.textContent = element;
          ingredientsList.appendChild(ingredient)
        })
        recipeDiv.appendChild(ingredientsList);
        let stepsHeader = document.createElement("h2");
        stepsHeader.textContent = "Steps";
        recipeDiv.appendChild(stepsHeader);
        let stepsList = document.createElement("ol");
        recipesList[thisId].steps.forEach((element)=>{
          let step = document.createElement("li");
          step.textContent = element;
          stepsList.appendChild(step);
        })
        recipeDiv.appendChild(stepsList);

        document.querySelector(".recipes").appendChild(recipeDiv);

        
      
      })
    
      showButton.innerHTML = "Show recipe";
      divCard.appendChild(image);
      divCard.appendChild(recipeName);
      divCard.appendChild(recipeDescription);
      divCard.appendChild(showButton);
      document.querySelector(".recipes").appendChild(divCard)

    
    }}
        
    )

 


  
}


  return (
    <div>
        
        <Header />
        <div className="recipes" id="recipes">

        </div>
        
       
           

        
    </div>
    
  )

  }

export default Main