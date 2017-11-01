import $ from 'jquery';
import Rx from 'rxjs/Rx';


//STOP POINT: https://www.youtube.com/watch?v=ei7FsoXKPl0
// 46:11

//=====================================================
//Merge and concate
//------------------------

const source1$ = Rx.Observable.range(0, 5)
	.map(v => 'Source1 : ' + v );

const source2$ = Rx.Observable.range(6, 5)
	.map(v => 'Source2 : ' + v );

Rx.Observable.concat(source1$, source2$)
	.subscribe(x => console.log(x))

// Rx.Observable.of('Hello')
// 	.merge(Rx.Observable.of('Everyone'))
// 	.subscribe(x => console.log(x));

// Rx.Observable.interval(2000)
// 	.merge(Rx.Observable.interval(500))
// 	.take(25)
// 	.subscribe(x => console.log(x))

// const source1$ = Rx.Observable.interval(2000)
// 	.map(v => 'Merge1: ' + v);

// const source2$ = Rx.Observable.interval(500)
// 	.map(v => 'Merge2: ' + v);


// Rx.Observable.merge(source1$, source2$)
// 	.take(10)
// 	.subscribe(x => console.log(x))

//=====================================================
//map & pluck
//------------------------



// const users = [
// 	{ name: 'Will', age: 34 },
// 	{ name: 'Mike', age: 33 },
// 	{ name: 'Paul', age: 35}
// ];

// const users$ = Rx.Observable.from(users)
// 	.pluck('age')

// users$

// 	.subscribe(
// 		user => {
// 			console.log(user);
// 		},
// 		err => {
// 			console.log(err);
// 		},
// 		complete => {
// 			console.log('Completed');
// 		}
// 	)


// function getGithubUser(username) {
// 	return $.ajax({
// 		url: 'https://api.github.com/users/' + username,
// 		dataType : 'jsonp'
// 	}).promise();
// }

// Rx.Observable.fromPromise(getGithubUser('a-soliman'))
// 	.map(user => user = user.data)
// 	.subscribe(
// 		user => {
// 			console.log(user)
// 		},
// 		err => {
// 			console.log(err)
// 		}
// );



// const names = ['John', 'Tom', 'Shawn']
// const source$ = Rx.Observable.from(names)
// 	.map(name => name = name.toUpperCase())
// 	.map(name => name = `I'm ${name},`)

// source$.subscribe(
// 	name => {
// 		console.log(name);
// 	},
// 	err => {
// 		console.log(err);
// 	},
// 	complete => {
// 		console.log('Completed!')
// 	}
// );


// const source$ = Rx.Observable.interval(500)
// 	.take(11)
// 	.map(v => v * 2)

// source$.subscribe(
// 	v => {
// 		console.log(v);
// 	},
// 	err => {
// 		console.log(err);
// 	},
// 	complete => {
// 		console.log('Completed!');
// 	}
// );






//=====================================================
//Interval, timer and range.
//------------------------

// const source$ = Rx.Observable.range(0, 5);

// source$.subscribe(
// 	x => {
// 		console.log(x);
// 	},
// 	err => {
// 		console.log(err);
// 	},
// 	complete => {
// 		console.log('Completed!')
// 	}
// );

// const source$ = Rx.Observable.timer(1000, 100)
// 	.take(6)

// source$.subscribe(
// 	x => {
// 		console.log(x);
// 	},
// 	err => {
// 		console.log(err);
// 	},
// 	complete => {
// 		console.log('Completed!')
// 	}
// );


// const source$ = Rx.Observable.interval(1000)
// 	.take(5)

// source$.subscribe(
// 	x => {
// 		console.log(x)
// 	},
// 	err => {
// 		console.log(err);
// 	},
// 	complete => {
// 		console.log('Completed!')
// 	}
// );






//=====================================================
//Observables from A Promise
//------------------------


// const myPromise  = new Promise((resolve, reject) => {
// 	console.log('Creating Promise');

// 	setTimeout(() => {
// 		resolve('Hellow from Promise');
// 	}, 2000);
// })


// myPromise.then(x => {
// 	console.log(x)
// })

// const source$ = Rx.Observable.fromPromise(myPromise);

// source$.subscribe(
// 	v => {
// 		console.log(v)
// 	},
// 	err => {
// 		console.log(err)
// 	},
// 	complete => {
// 		console.log('Completed!');
// 	}
// )

// function getUser(username) {
// 	return $.ajax({
// 		url: 'https://api.github.com/users/' + username,
// 		dataType: 'jsonp' 
// 	}).promise();
// }

// Rx.Observable.fromPromise(getUser('a-soliman'))
// 	.subscribe( x => {
// 		console.log(x.data)
// 		$('#name').text(x.data.name);
// 		$('#img').attr("src", x.data.avatar_url)
// 	})

//=====================================================
// // //Observables from SKRATCH
// // //------------------------
// const source$ = new Rx.Observable(observer => {
// 	console.log('Creating a new Observable');

// 	observer.next('Some Value');
// 	observer.next('Another Value');

// 	observer.error(new Error ('Error: Something went wrong!'))
// 	setTimeout(() => {
// 		observer.next('Yet another valure');
// 		observer.complete()
// 	}, 1000);
// });

// source$
// 	.catch(
// 		err => {
// 			Rx.Observable.of(err)
// 		};
// 	)
// 	.subscribe(
// 		x => {
// 			console.log(x)
// 		},
// 		err => {
// 			console.log(err);
// 		},
// 		complete => {
// 			console.log('Completed!')
// 		}
// 	)
	

//=====================================================
// //Observables from SETS & MAPS
// //------------------------
// const set = new Set(['Hello', 44, {title: 'My Title' }]);

// const set$ = Rx.Observable.from(set);

// set$.subscribe(
// 	v => {
// 		console.log(v);
// 	},
// 	err => {
// 		console.log(err);
// 	},
// 	complete => {
// 		console.log('Completed');
// 	}
// );

// const map = new Map([[1,2],[3,4],[5,6]]);
// const map$ = Rx.Observable.from(map);

// map$.subscribe(
// 	v => {
// 		console.log(v);
// 	},
// 	err => {
// 		console.log(err);
// 	},
// 	complete => {
// 		console.log('Completed!');
// 	}
// );

//=====================================================


// // //Observables from ARRAY-like Objects
// // //------------------------
// const postsOutput = $('#posts');

// const numbers = [33, 44, 55, 66, 77];
// const numbers$ = Rx.Observable.from(numbers);

// numbers$.subscribe(
// 	v => {
// 		console.log(v);
// 	},
// 	err => {
// 		console.log(err);
// 	},
// 	complete => {
// 		console.log('Completed!')
// 	}
// );

// const posts = [
// 	{
// 		title: "Post One Title",
// 		body: "this is the body"
// 	},
// 	{
// 		title: "Post Two Title",
// 		body: "this is the body"
// 	},
// 	{
// 		title: "Post Three Title",
// 		body: "this is the body"
// 	}
// ];

// const posts$ = Rx.Observable.from(posts);

// posts$.subscribe(
// 	v => {
// 		postsOutput.append(`<li><p><b>${v.title}: </b> ${v.body}</p> </li>`)
// 	},
// 	err => {
// 		console.log(err);
// 	},
// 	complete => {
// 		console.log('Completed!')
// 	}
// );

































// //Observables from EVENTS
// //------------------------
// const btn = $('#btn');
// const input = $('#input')
// const output = $('#output');

// const btnStream$ = Rx.Observable.fromEvent(btn, 'click');

// btnStream$.subscribe(
// 	function(e) {
// 		e.target.innerHTML = ' Clicked already '
// 		console.log(e);
// 	},
// 	function(err) {
// 		console.log(err);
// 	},
// 	function() {
// 		console.log('completed!')
// 	}
// );

// const inputStream$ = Rx.Observable.fromEvent(input, 'keyup');

// inputStream$.subscribe(
// 	function(e){
// 		console.log(e.target.value)
// 		output.append(e.target.value);
// 	},
// 	function(err) {
// 		console.log(err);
// 	},
// 	function() {
// 		console.log('completed');
// 	}
// );

// const moveStream$ = Rx.Observable.fromEvent(document, 'mousemove');

// moveStream$.subscribe(
// 	function(e) {
// 		output.html(`X: ${e.clientX}, Y: ${e.clientY}`)
// 	},
// 	function(err) {
// 	 	console.log(err)
// 	},
// 	function() {
// 		console.log('completed!')
// 	}
// );