import './sunnyrain.scss'
import Hammer from 'hammerjs'
import Rain from './rain'

const rain = new Rain()

var square = document.querySelector('#actor');

// Create a manager to manager the element
var manager = new Hammer.Manager(square);

// Create a recognizer
var Swipe = new Hammer.Swipe();

// Add the recognizer to the manager
manager.add(Swipe);

// Subscribe to a desired event
manager.on('swipe', function(e) {
  const rate = 1 + e.deltaY / window.innerHeight
  sliderRain(rate)
});

function sliderRain(rate = 1) {
  rain.config.dropInterval = Math.floor(rain.config.dropInterval / rate)
  const dropsPerInterval = Math.floor(rain.config.dropsPerInterval * rate)
  rain.config.dropsPerInterval = dropsPerInterval < 10 ? 10 : dropsPerInterval > 150 ? 150 : dropsPerInterval
}