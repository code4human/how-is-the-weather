/**
 * 우리가 받은 날씨정보 객체에서
 * {
 *   weather: {
 *     main: '' // 이 값
 *   }
 * }
 * weather.main 에서 나올 수 있는 값들을 아래 객체의 key로 두었습니다.
 *
 * 나올 수 있는 값들에 대한 정보는 아래 link에서 확인하실 수 있습니다.
 * https://openweathermap.org/weather-conditions
 */
const imgLinks = {
  Clear: "sun.png",
  Rain: "rain.png",
  Snow: "snowing.png",
  Clouds: "snowing.png",
};


const backColors = {
  Clear: "linear-gradient(to left, #ffb75e, #ed8f03)",
  Rain: "linear-gradient(to left, #2c3e50, #3498db)", 
  Snow: "linear-gradient(to left, #004ff9, #fff94c)", 
  Clouds: "linear-gradient(to left, #304352, #d7d2cc)"
}