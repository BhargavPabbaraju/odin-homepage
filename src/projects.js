import carousel from "../assets/ss-carousel.png";
import battleship from "../assets/ss-battleship.png";
import todo from "../assets/ss-todo.png";
import weather from "../assets/ss-weather.png";
import etch_a_sketch from "../assets/ss-etch-a-sketch.png";
import rps from "../assets/ss-rps.png";
import forest from "../assets/ss-forest.png";

class Project {
  constructor(name, desc, github, preview, screenshot) {
    this.name = name;
    this.desc = desc;
    this.github = github;
    this.preview = preview;
    this.screenshot = screenshot;
  }
}

export const projects = [
  new Project(
    "Forest",
    "Clone of Forest app. A simple timer but with progressive " +
      "Pokemon berry plant images to motivate focus.",
    "https://github.com/BhargavPabbaraju/pokemon-forest/",
    "https://bhargavpabbaraju.github.io//pokemon-forest/",
    forest,
  ),
  new Project(
    "Carousel",
    "An anime slideshow. This project was to implement a " +
      "carousel with pure javascript and no external libraries.",
    "https://github.com/BhargavPabbaraju/odin-carousel",
    "https://bhargavpabbaraju.github.io/odin-carousel/",
    carousel,
  ),
  new Project(
    "Battleship",
    "The classic battleship game. Implemented using pure javascript. " +
      "Highlights asynchronous programming and promises",
    "https://github.com/BhargavPabbaraju/odin-battleship",
    "https://bhargavpabbaraju.github.io/odin-battleship/",
    battleship,
  ),
  new Project(
    "Etch-a-Sketch",
    "Classic etch-a-sketch. Implemented using pure javascript. " +
      "Draw to your heart's content with your mouse",
    "https://github.com/BhargavPabbaraju/odin-etch-a-sketch",
    "https://bhargavpabbaraju.github.io/odin-etch-a-sketch/",
    etch_a_sketch,
  ),
  new Project(
    "Weather app",
    "Classic weather app . Wrapper around Visual Crossing API. " +
      " Implemented using pure javascript, highlights interacting with external APIs. ",
    "https://github.com/BhargavPabbaraju/odin-weather-app",
    "https://bhargavpabbaraju.github.io/odin-weather-app/",
    weather,
  ),
  new Project(
    "Todo manager",
    "A todo app to manage projects and todo-lists per project." +
      " Implemented using pure javascript, this project supports local cache. ",
    "https://github.com/BhargavPabbaraju/odin-todo",
    "https://bhargavpabbaraju.github.io/odin-todo/",
    todo,
  ),
  new Project(
    "Rock Paper Scissors",
    "Classic rock paper scissors game. Implemented using pure javascript. ",
    "https://github.com/BhargavPabbaraju/odin-rock-paper-scissors/",
    "https://bhargavpabbaraju.github.io/odin-rock-paper-scissors/",
    rps,
  ),
];
