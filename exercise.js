function time(array){


	for(let elem in array){
		array[elem] = array[elem].replace(":", "");
	}

	let sortedArray = array.sort();

	let distance = "";
	let newDistance = "";
	let pair = "";
	console.log(sortedArray)

	for( let i=0; i<= sortedArray.length -1; i++){
		if( i === 0){
			distance = sortedArray[i +1 ] - sortedArray[i];

			tostring1 = sortedArray[i +1 ].slice(0,2)+ ":"+ sortedArray[i+1].slice(2,4)
			tostring2 = sortedArray[i].slice(0,2)+ ":"+ sortedArray[i].slice(2,4)

			pair = tostring1 + " "+ tostring2
		}
		else{
			console.log(newDistance)
			console.log(distance)
			newDistance = sortedArray[i +1 ] - sortedArray[i];

			if(newDistance < distance){
				distance = newDistance;
				tostring1 = sortedArray[i +1 ].slice(0,2)+ ":"+ sortedArray[i+1].slice(2,4)
				tostring2 = sortedArray[i ].slice(0,2)+ ":"+ sortedArray[i].slice(2,4)

				pair = tostring1 + " " + tostring2

			}
		}


	}
	return pair;

}
