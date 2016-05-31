function print(word) {
	console.log(word);
}

var fruits = ["Apple", "Banana", "Cherry", "Durian", "Elderberry",
"Fig", "Guava", "Huckleberry", "Ice plant", "Jackfruit"];

function myForEach(collection, callback) {
	for(var i = 0; i < collection.length; i++) {
		callback(collection[i])
	}
}