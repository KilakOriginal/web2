import profilePicture from "@/assets/images/malik.jpg"
import { ProfileCard } from "@/components/ui/profile-card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export function Home() {
    return (
        <div className="p-10">
            {ProfileCard(
                <p>Hello and welcome to my website! I'm Malik—a computer science student
                  and musician from Kronshagen and the co-founder of the
                  <a href="https://die-mint.party/">MINT-Party</a>. If you’d like to
                  support my work, please consider making a small donation by clicking
                  <a href="https://www.paypal.com/paypalme/MalikAbdoulHamidou/">this link</a>.
                </p>,
                "Malik Abdoul Hamidou",
                profilePicture,
                "Computer Scientist, Photographer, Musician"
            )}
            <br />
            <div className="newspaper">
                <h1 className="text-3xl mb-2">Music</h1>
                <p className="mb-6">
                  I'm a guitarist, singer, and pianist with a love for songwriting and
                  reinterpreting the works of artists like Leonard Cohen, Bob Dylan, 
                  Bert Jansch, Frank Sinatra, Elvis Presley, and many more. I explore 
                  a wide range of styles—from rock and pop to blues and jazz. I’m 
                  always up for collaborating with fellow musicians or performing live.
                  <br /><br />
                  Over the years, I've played at local venues and outdoor events making
                  some great memories along the way. My music, be it original songs or covers,
                  is my way of connecting with others and expressing the emotions that words
                  alone can't capture.
                  <br /><br />
                  It's a huge part of who I am, and I love connecting with others who share 
                  that passion. If you're interested in working together, exchanging ideas, 
                  or just want to chat about music, feel free to reach out!
                  <a href="mailto:malik@abdoulhamidou.com" className="ml-2 text-blue-600 underline"><FontAwesomeIcon icon={faEnvelope} /> malik@abdoulhamidou.com</a>
                </p>
                <br />

                <h1 className="text-3xl mb-2">Photography</h1>
                <p className="mb-6">
                  If you know me, you probably know I love photography. Capturing moments, 
                  emotions, and the beauty of the world around us is one thing and if you 
                  need an event or portrait photographer, I'd be happy to help out! However,
                  creating art through my camera is what truly drives me.
                  <br /><br />
                  I enjoy experimenting with different compositions, lighting, and 
                  perspectives to tell stories instead of just taking pictures. 
                  If you're interested in discussing photography, collaborating on projects, 
                  or just need someone to go around and create art with, please don't 
                  hesitate to reach out!
                </p>
                <br />

                <h1 className="text-3xl mb-2">Software Engineering</h1>
                <p className="mb-6">
                  I'm also a software engineer with experience across a range of programming 
                  languages, technologies, and platforms. I have a solid foundation in computer 
                  science and studied at the University of Kiel. Solving complex problems 
                  through code is what I love most about this field.
                  <br /><br />
                  My work spans mobile and desktop app development, backend systems, and creative 
                  coding projects. During my bachelor's degree, I specialised in machine learning
                  and data science, which has provided me with the necessary skill-set to tackle 
                  many challenging projects. 
                  <br /><br />
                  I've contributed to countless open-source projects, built tools to automate tasks, 
                  and prototyped ideas just for fun. I find the most fulfillment in projects that 
                  have a real-world impact and help make people's lives easier.
                  <br /><br />
                  I'm always eager to learn, take on new challenges, and connect with others in the 
                  tech community to share ideas and grow together.
                </p>
                <br />

                <h1 className="text-3xl mb-2">Close-Up Magic</h1>
                <p className="mb-6">
                  Close-up magic is another passion of mine. I love crafting original tricks, weaving 
                  in storytelling, and making people laugh.
                  <br /><br />
                  I specialise in mentalism and card magic and enjoy performing in intimate settings 
                  where the magic feels personal and immediate. There's something deeply rewarding 
                  about seeing someone's expression change from confusion to amazement in real time. 
                  For me, magic is less about deception and more about creating small, memorable 
                  moments that make people smile.
                  <br /><br />
                  If you're interested in chatting about magic or want me to perform at your event, 
                  feel free to reach out!
                </p>
                <br />

                <h1 className="text-3xl mb-2">Design</h1>
                <p className="mb-6">
                  Designing business cards is something I genuinely enjoy. I love crafting visually 
                  striking designs that are a true reflection of the person behind it.
                  <br /><br />
                  Every card is a chance to tell a story. Most people never get the chance to work with 
                  a personal designer and will settle for generic off-the-shelf options, but I aim to 
                  design pieces that people will remember. I take time to understand each client's 
                  personality and style, then translate that into a tangible design they can proudly hand 
                  out.
                  <br /><br />
                  If you're looking for a card with unique flair and personality, I'd be happy to help 
                  bring your vision to life. Let's make something beautiful together—feel free to get 
                  in touch!
                </p>
            </div>
        </div>
    );
}
