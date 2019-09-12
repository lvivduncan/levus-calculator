
let price = document.querySelector('#price')

const size = document.querySelector('#size'),
	  plusMinus = document.querySelectorAll('#plus-minus input'),
	  addOptions = document.querySelectorAll('#add-options input'),
	  colors = document.querySelectorAll('#colors input'),

	  // проміжний масив, в який кладуться значення полів після зміни
	  data = [
		  +price.textContent, // data[0]
		  0, // data[1] select
		  1, // data[2] plus-minus
		  0, // data[3] add-options
		  0 //data[4] color
	  ]

// обробляє дані в масиві data і записує результат в price.textContent
const getCalculate = () => {

	let firstPrice = 0,
		select = 0,
		addOptions = 0,
		color = 0

	if(+data[2] > 1){
		firstPrice = +data[0] * data[2]
		select = +data[1] * data[2]
		addOptions = +data[3] * data[2]
		color = +data[4] * data[2]
	} else {
		firstPrice = +data[0]
		select = +data[1]
		addOptions = +data[3]
		color = +data[4]	
	}

	price.textContent = firstPrice + select + addOptions + color

}

// - click
plusMinus[0].onclick = () => {

	data[2]--
	plusMinus[1].value--

	if(plusMinus[1].value < 1){
		plusMinus[1].value = data[2] = 1
	}

	getCalculate()
}

// + click
plusMinus[2].onclick = () => {

	plusMinus[1].value++
	data[2]++

	getCalculate()
}

// select
size.onchange = () => {
	data[1] = +size.value

	getCalculate()
}

// checkbox
for(let input of addOptions){

	input.onclick = () => {

		if(input.checked){

			data[3] += +input.value

		} else {

			data[3] -= +input.value

		}

		getCalculate()
	}

}

// radio
for(let input of colors){

	input.onclick = () => {

		if(input.checked){

			data[4] = +input.value

			getCalculate()
		}
			
	}

}
