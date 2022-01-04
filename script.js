const random_cat=document.getElementById('random_cat');
const cat_button=document.getElementById('cat_button');

function getRandomDog() {
	try{

		fetch('https://thatcopy.pw/catapi/rest/')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomDog();
			}
			else {
				random_cat.innerHTML = `<img src=${data.url} alt="cat"/>`;
			}
		});
	}
		catch(e)
		{
			console.log(e);
		}
		
}
cat_button.addEventListener('click',getRandomDog)

