async function run(){
    const data = await fetch('https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=100', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${'xyz'}`,
          'Content-Type': 'application/json',  
        }, 
      }) 
    
      const data2 = await data.json();

      data2.items.forEach(songName=>{
        console.log(songName.name);
      });
}
run();
