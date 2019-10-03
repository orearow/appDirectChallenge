function time(array){

	//itterating through array and turning our times into 4 digits
	for(let elem in array){
		array[elem] = array[elem].replace(":", "");
	}

	let sortedArray = array.sort();

	let distance = "";
	let newDistance = "";
	let pair = "";

	for( let i=0; i<= sortedArray.length -1; i++){
		//on first itteration we set distance as the distance between first two elems
		if( i === 0){
			distance = sortedArray[i +1 ] - sortedArray[i];
			// putting the colon back in and turning digit into time
			tostring1 = sortedArray[i +1 ].slice(0,2)+ ":"+ sortedArray[i+1].slice(2,4);
			tostring2 = sortedArray[i].slice(0,2)+ ":"+ sortedArray[i].slice(2,4);

			pair = tostring1 + " "+ tostring2;
		}
		//next itterations
		else{

			newDistance = sortedArray[i +1 ] - sortedArray[i];
			//comparing old and new distance values and outputting the smallest one 
			if(newDistance < distance){
				distance = newDistance;
				tostring1 = sortedArray[i +1 ].slice(0,2)+ ":"+ sortedArray[i+1].slice(2,4);
				tostring2 = sortedArray[i ].slice(0,2)+ ":"+ sortedArray[i].slice(2,4);

				pair = tostring1 + " " + tostring2;

			}
		}


	}
	return pair;

}
console.log(time(['04:53', '12:15', '03:14', '22:18', '16:33', '21:59']));
