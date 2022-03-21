module.exports = {
  content: ["public/*.{html,js}"],
  theme: {
    screens:{
      'sm':'1124px',
      'md':'1124px',
      'lg': '1124px',
      'xl':'1124px',
      '2xl':'1124px',

    },    
    container: {
      center: true,
      padding:"1rem"
    },
    fontFamily:{
      body:['Nunito']
    },
    extend: {
    
      fontSize:{
          
      },
      colors:{
        'bookmark-purple':'#5267DF',
        'bookmark-red':'#FA5959',
        'bookmark-blue':'#242A45',
        'bookmark-grey':'#9194A2',
        'bookmark-white':'#f7f7f7'
      },
    } 
  },
  plugins: [],
}
