import React from "react";

const About = () => {
  return (
    <div className="w-[80%] mx-auto flex flex-col items-center justify-center gap-5">
      <h4 className="text-4xl mb-5 underline mt-5">About us</h4>
      <section className="space-y-4 w-[75%] flex items-center justify-center gap-10 ">
        <p className="w-1/2 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum harum quis consequatur a corporis unde, ducimus quia quaerat ad in dicta corrupti ipsum? Dignissimos porro iste et iure. Libero sed reiciendis asperiores aperiam pariatur, magni quia deleniti explicabo et! Dicta beatae voluptatibus molestiae corporis, quaerat magni nemo ipsam nobis dignissimos! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, temporibus.</p>
        <img className="w-1/2 h-full" src="https://images.unsplash.com/photo-1515010137531-66995c7f40e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29uZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
      </section>
      <section className="w-[75%] flex flex-col items-center justify-center mt-10 bg-zinc-300 px-16 border-2 border-black rounded-lg shadow-br py-10">
        <img className="w-32 h-32 object-cover rounded-full mb-8" src="https://i.ytimg.com/vi/1aXh-0WEc-k/maxresdefault.jpg" alt="" />
        <p className="text-sm text-center mb-5 w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore in dignissimos officiis iste numquam architecto illo cupiditate neque harum delectus...</p>
        <h2 className="text-xl font-semibold">BOB</h2>
        <h3 className="text-sm">Founder at Aaru Mart</h3>
        <a className="space-x-3 mt-3" href="#"><i class="ri-instagram-fill"></i><i class="ri-facebook-fill"></i><i class="ri-youtube-fill"></i><i class="ri-twitter-x-fill"></i></a>
      </section>
     
    </div>
  );
};

export default About;
