async function run(){
    const data = await fetch('https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=100', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${'BQDA0B-Pa7s7LocXLyWdUqM_QOXP1f45eQaJh6wx644m9uVUQJf6QuVVoRsi7esuGaQTQ-ZI1EhdTYXYzdEF_ASR1H3CD54kOjrkea-uq_2B2_atOxIWEwb-botFfEfpCO1QoA5T5F67BxH3KuyVzyuAYcFFyO-FSiTujyXPOAPSHJw5mExU75b-q00Rp0p9Gm1FwsCZiZfwPdU9Z8TyDwTosOL194b2yJTArRasRsUuAnBklut8878djvfJBxxLxLhSqp_23P6oRnPPTmEw'}`,
          'Content-Type': 'application/json',  
        }, 
      }) 
    
      const data2 = await data.json();

      data2.items.forEach(songName=>{
        console.log(songName.name);
      });
}
run();