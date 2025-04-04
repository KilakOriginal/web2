import profilePicture from "@/assets/images/malik.jpg"
import { ProfileCard } from "@/components/ui/profile-card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export function Home() {
    return (
        <div className="p-10">
            {ProfileCard(
                <p>Hello and welcome to my website! I'm Malik - a computer science student and musician from Kronshagen and the co-founder of the <a href="https://die-mint.party/">MINT-Party</a>. If you’d like to support my work, please consider making a small donation by clicking <a href="https://www.paypal.com/paypalme/MalikAbdoulHamidou/1">this link</a>.</p>,
                "Malik Abdoul Hamidou",
                profilePicture,
                "Computer Scientist, Musician"
            )}
            <br />
            <div className="newspaper">
                <h1 className="text-3xl mb-2">Music</h1>
                <p className="mb-6">
                  I'm a guitarist, singer, and pianist with a love for both original songwriting and reimagining the works of artists like Leonard Cohen, Bob Dylan, Bert Jansch, Frank Sinatra, Elvis Presley, and many more. I explore a wide range of styles—from rock and pop to blues and jazz—and I’m always up for collaborating with fellow musicians or performing live.
                  <br /><br />
                  Over the years, music has been a constant companion and creative outlet. Whether I'm writing lyrics late at night, experimenting with chord progressions, or improvising with friends, I find joy in the process just as much as the performance. I've played at local venues, cozy living rooms, and outdoor events—each moment unique and special in its own way.
                  <br /><br />
                  Music is a huge part of who I am, and I love connecting with others who share that passion. If you're interested in working together, exchanging ideas, or just want to chat about music, feel free to reach out!
                  <a href="mailto:malik@abdoulhamidou.com" className="ml-2 text-blue-600 underline"><FontAwesomeIcon icon={faEnvelope} /> malik@abdoulhamidou.com</a>
                </p>

                <h1 className="text-3xl mb-2">Software Engineering</h1>
                <p className="mb-6">
                  I'm also a software engineer with experience across a range of programming languages, technologies, and platforms. I have a solid foundation in computer science and a deep curiosity for solving complex problems through code.
                  <br /><br />
                  My work spans mobile and desktop app development, backend systems, and creative coding projects. I enjoy exploring the intersection of code and creativity—where logic meets design. I’ve contributed to open-source projects, built tools to automate tasks, and prototyped ideas just for fun. I find the most fulfillment in projects that blend technical challenge with real-world impact.
                  <br /><br />
                  Whether it's building cross-platform applications, designing efficient algorithms, or working with databases, I enjoy turning ideas into practical, scalable solutions. I'm always eager to learn, take on new challenges, and connect with others in the tech community to share ideas and grow together.
                </p>

                <h1 className="text-3xl mb-2">Close-Up Magic</h1>
                <p className="mb-6">
                  Close-up magic is another passion of mine—I love crafting original tricks, weaving in storytelling, and making people laugh along the way. Whether it's sparking wonder or just sharing a good moment, magic is all about connection.
                  <br /><br />
                  I specialise in sleight-of-hand and enjoy performing in intimate settings where the magic feels personal and immediate. There's something deeply rewarding about seeing someone's expression change from confusion to amazement in real time. For me, magic is less about deception and more about delight—about creating small, memorable moments that make people smile.
                  <br /><br />
                  If you're interested in chatting about magic, learning a trick or two, or want me to perform at your event, feel free to reach out!
                </p>

                <h1 className="text-3xl mb-2">Design</h1>
                <p className="mb-6">
                  Designing business cards is something I genuinely enjoy—I love the creative challenge of crafting a design that’s both visually striking and a true reflection of the person behind it.
                  <br /><br />
                  Every card is a chance to tell a story. Whether it’s minimalist and modern or bold and expressive, I aim to design pieces that people want to keep. I take time to understand each client’s personality, values, and style, then translate that into a tangible design they can proudly hand out.
                  <br /><br />
                  If you're looking for a card with unique flair and personality, I'd be happy to help bring your vision to life. Let's make something beautiful together—feel free to get in touch!
                </p>
            </div>
        </div>
    );
}
