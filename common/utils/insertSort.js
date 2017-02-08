const insertSort = function(arr = [], reverse = false) {
	if(arr.length <= 1) return arr;
	for(let i = 1; i < arr.length; i++) {
		if(arr[i] < arr[i - 1]) {
			let guard = arr[i];
			let j = i - 1;
			arr[i] = arr[j];
			while(j >= 0 && guard < arr[j]) {
				arr[j + 1] = arr[j];
				j--;
			}
			arr[j+1] = guard;
		}
	}
	if(reverse) arr.reverse();
	return arr;
}

const insertSortObj = function(arr, key, reverse = false) {
	if(arr.length <= 1) return arr;
	for(let i = 1; i < arr.length; i++) {
		if(arr[i][key] < arr[i -1][key]) {
			let guard = arr[i]
			let j = i - 1;
			arr[i] = arr[j];
			while(j >= 0 && guard[key] < arr[j][key]) {
				arr[j + 1] = arr[j];
				j--;
			}
			arr[j + 1] = guard;
		}
	}
	if(reverse) arr.reverse();
	return arr;
}

export {insertSort, insertSortObj}