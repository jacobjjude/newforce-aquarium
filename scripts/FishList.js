import { getFish } from "./database.js";

export const FishList = () => {
    const fishes = getFish();
    let htmlString = '<section class="fish"><h2 class="mainLayout__title">Fish Martin Has Harvested</h2>';
    for (const fish of fishes) {
        htmlString += `
        <ul class="mainLayout__fish--list">
        <img src="${fish.image}" alt="">
        <li>Name: ${fish.name}</li>
        <li>What it eats: ${fish.food}</li>
        <li>Size: ${fish.size}</li>
        </ul>\n`
        
    }
    htmlString += `</section>`
    return htmlString
}

