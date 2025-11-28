import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation>
        
      </Navigation>
      

      {/* Picture*/}

      {/* Bio Section */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl leading-tight mb-6 font-bold">
            My Story ⋆౨ৎ˚⟡˖ ࣪
          </h1>
          <p className="text-l leading-relaxed mb-6 font-medium">
            Hi I’m Sharon, based in New York. I was born in Brooklyn and moved upstate to the Adirondacks where I spent most of my life. Now I’m a third-year Computer Science student at Cornell University, also minoring in Information Science with a focus in User Experience.
          </p>
          <p className="text-l leading-relaxed mb-6 font-medium">
            I’ve always loved being creative—whether it’s drawing, crafting, or working on DIY projects. That creative side eventually led me to coding, where I get to build things that are both useful and thoughtful. At Cornell, I also love mentoring others through the AEW program and Girls Who Code, helping students get started with CS basics.          
            </p>
          <p className="text-l leading-relaxed mb-6 font-medium">
            Outside of work, I’m probably listening to R&B or indie pop, catching up on a podcast, or exploring a new game with friends. I enjoy capturing pictures of nature, often chasing sunsets and calm city skylines. I’m all about finding little moments of beauty in everyday life.          
          </p>
          
          </div>

        <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden mb-4  ">
              <img 
                src="/images/me.png"
                alt="me" 
                width={400} // Desired width in pixels
                height={200} // Desired height in pixels
              />
            </div>
        </div>

      </div>
    </section>


     {/* Interests */}
      <section className="max-w-7xl mx-auto px-6 py-15">
        <h2 className="text-gray-500 font-semibold tracking-widest mb-8 pb-2 border-b border-gray-200">
          interests
        </h2>
        <div className="grid md:grid-cols-3 gap-10">

          <div className="group cursor-pointer">

             <div className="rounded-2xl overflow-hidden mb-4  ">
              <img 
                src="/images/camera.png"
                alt="camera" 
                width={20} // Desired width in pixels
                height={20} // Desired height in pixels
              />
            </div>
            <h3 className="text-xl font-medium mb-2">
              Photography
              </h3>
            <p className="text-gray-500">
              Capturing beautiful scenaries with people, skies, and landscapes with a camera
            </p>
          </div>

           <div className="group cursor-pointer">

             <div className="rounded-2xl overflow-hidden mb-4  ">
              <img 
                src="/images/console.png"
                alt="console" 
                width={20} // Desired width in pixels
                height={20} // Desired height in pixels
              />
            </div>
            <h3 className="text-xl font-medium mb-2">
              Gaming
              </h3>
            <p className="text-gray-500">
              Discovering and playing new cozy/action games with friends
            </p>
          </div>

          <div className="group cursor-pointer">

             <div className="rounded-2xl overflow-hidden mb-4  ">
              <img 
                src="/images/headphone.png"
                alt="headphone" 
                width={20} // Desired width in pixels
                height={20} // Desired height in pixels
              />
            </div>
            <h3 className="text-xl font-medium mb-2">
              Music/Podcast
              </h3>
            <p className="text-gray-500">
              Chronically on Spotify, looking for new music and murder-mystery podcasts
            </p>
          </div>

       

        

       

        </div>
      </section>

  </div>
  );
}