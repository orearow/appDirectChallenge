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
				tostring2 = sortedArray[i].slice(0,2)+ ":"+ sortedArray[i].slice(2,4);

				pair = tostring1 + " " + tostring2;

			}
		}
	}

		//edge case if we have one value like 0001 and one like 2359 for ex, lets just se 23:60 as 2400 since time does not work like math 
		if(sortedArray[0] < '1200' && sortedArray[sortedArray.length-1] > '1200') {
			let edgeDiff = '2360' -(sortedArray[sortedArray.length-1] -sortedArray[0]);
			if (edgeDiff< distance){
				tostring1 = sortedArray[0].slice(0,2)+ ":"+ sortedArray[0].slice(2,4);
				tostring2 = sortedArray[sortedArray.length-1].slice(0,2)+ ":"+ sortedArray[sortedArray.length-1].slice(2,4);
				return tostring1 + " " + tostring2;
			}
		}

	return pair;

}
//sample data I was using 
// console.log(time(['04:53', '12:15','00:01','22:00' ,'03:14','07:59' ,'22:18', '16:33','23:59' ,'21:59']));
