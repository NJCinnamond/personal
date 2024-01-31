import React from "react";
import { InstagramEmbed } from 'react-social-media-embed';

function article_1() {
	return {
		date: "28 Jan 2024",
		title: "My Trip to Delhi",
		description:
			"Street food, smog and a splendorous wedding",
		keywords: [
			"india",
			"delhi",
			"wedding",
			"dance",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
				}

				.video-content {
					width: max(60%,320px);
					margin: auto;
				}

				.image-container {
					display: flex;
					flex-wrap: wrap;
				}

				.randImage {
					align-self: center;
					max-height: 400px;
					max-width: 100%;
					margin: auto;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">

					<div>
						<div className="video-content">
							<iframe width="100%" height="300px" src="https://www.youtube.com/embed/H-uEx_hEXAM?si=j8XPCAXf7HCZOz1Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						</div>
					</div>

					<div style={{alignItems: 'left'}}>
						<p>
							{`There's an iconic scene in Goodness Gracious Me, the turn-of-the-millennium British Asian comedy sketch show, 
							in which four Indians decide to 'go for an English' on a Friday night. Aside from being a hilarious piss-take of 
							British attitudes and dining preferences (one of the table-sitters shows off to his mates by ordering the 'blandest'
							thing on the menu), it holds up a mirror to those of us who have, albeit unwittingly, relegated entire cultures
							to single nouns or activities.`}
						</p>
						<p>
							{`Mark Twain wrote that, "Travel is fatal to narrow-mindedness." While I had many preconceptions of Indian culture through attending
							holiday-themed parties with desi friends, I knew I was experiencing their traditions through a slightly aberrated lens. As Twain suggests,
							for true authenticity you must explore for yourself. Luckily, for reasons I will come onto, I had the opportunity to spend a week in the Indian 
							capital city of Delhi last month.`}
						</p>
						<p>
							{`Delhi evokes similar imagery for many people: throat-gripping smog, rampant inequality, and insane traffic. All of these can point in some degree
							to the same cause: there are a lot of people in Delhi. And I mean a lot. `}
						</p>
						<p>
							{`On my ride from the airport, cars pulled up either side of me on a road barely wide enough for two vehicles and my sleep-deprived brain had a 
							vision of Dr Emmett Brown quipping, "Lanes? Where we're going, we don't need lanes." Such is the confidence of the Delhi driver that physics is 
							make-believe and their rickshaw really can exist in a superposition of both scratching and not scratching your car while it passes for an overtake.`}
						</p>
						<p>
							{'I think I can still hear the car horns inside of my head.'}
						</p>
						<div className="image-container">
							<img src="/redfort.jpeg" className="randImage"/>
						</div>
						<p>
							{`Delhi is very much associated with its vibrant street food scene. Old Delhi, as it is known, is of especially high interest to tourists seeking bazaars and 
							markets selling spices, clothes, food and desserts. Strolling through these streets myself, I quickly learned how my intention to not stick out like a sore
							thumb did not exactly pan out after a local approached me.`}
						</p>
						<p>
							{'"American, sir?"'}
						</p>
						<p>
							{`That was a first. "No, no, English," I replied. "You must want the spice market, sir. Come with me on rickshaw, only 20 rupees." Now I'm a sucker for a
							bargain, but I was in the mood to walk. Unfortunately this only encouraged my would-be chaperone, who proceeded to accompany me, 
							seemingly convinced my response was actually some kind of bargaining position. I'm sure we would have reached the spice market by foot had he not found
							himself undercut by the gentleman flanking me to other side, who offered a ride at a much more cost-effective rate of 10 rupees.`}
						</p>
						<p>
							<i>The Art of Negotiation</i> was finally paying off
						</p>
						<p>
							{`Despite feeling a little like Jesus Christ with the growing number of disciples following me, I have to say that the charm wore off in a flash. I consider
							myself a fairly patient person, but I found myself suddenly sympthaizing with every over-papped celebrity I have ever seen bat off reporters in grainy cell
							phone footage. Ultimately this is the price someone like me pays to visit a place like this, not really knowing any Hindi and dressed like a middle-schooler
							on a field trip. Which leads me to my first top tip in surviving India as a westerner.`}
						</p>
						<p>
							<strong>{`Tip #1: Pretend you're French`}</strong>
						</p>
						<p>
							{`Seriously. Nobody there knows French, and they won't be able to get business from you if they can't speak your language. If polite rejection doesn't
							work, throw in a cheeky "Je ne sais pas." You don't even have to speak well - one of my admirers told me to "go back to Spain."`}
						</p>
						<p>
							{`In the end, the little bit of Hindi I did know allowed me to purchase this delicious plate of pav bhaji for only 40 rupees, down from an initial 200. I think
							my Instagram following was being kind to me in this poll.`}
						</p>
						<p>
							{`Anyway, what was I even doing here in the first place? Well, simply, two of my friends were getting married. `}
						</p>
						<p>
							{`My only instruction before arriving was to pick up appropriate dresswear (see: kurta), ideally one for each of the two days of rituals. Speaking of, the rituals are
							one aspect of Indian weddings least familiar to outsiders. Each one speaks to some historical significance and is typically tied to the religious and spiritual beliefs of the
							families involved. Deciding which rituals are to be observed is therefore one of the most important items on the pre-wedding agenda.`}
						</p>
						<div className="image-container">
							<img src="/haldi.jpeg" className="randImage"/>
						</div>
						<p>
							{`On the first official day, we celebrated Haldi. For reasons that became apparent, Haldi is best observed wearing a yellow-colored kurta. This is because the
							ceremony involves rubbing a turmeric-based mixture over the bride (and soon everybody else's) skin, symbolizing rejuvenation and blessings.`}
						</p>
						<p>
							{`This was a lot of fun! In the picture above, I am methodically touching the bride's feet, knees, and shoulders with this mixture, to quite literally rub some good luck
							off on her.`}
						</p>
						<p>
							{`But the real fun started the next day. Entering the outdoors venue, the richly-designed arrangements and hues reminded you why they call this the country
							of colors. `}
						</p>
						<div className="image-container">
							<img src="/candidwalk.jpg" className="randImage"/>
						</div>
						<p>
							{`Here is me taking a candid walk toward the center of the venue, donning the same pose as all Indian uncles I could see!`}
						</p>
						<p>
							{`We only had time to mingle for a short while before our conversations suddenly had a slightly discernable backing track. What was that music? I was shortly
							informed that this was Bharat - the opening act of the wedding in which the groom proceeds to the venue on top of a horse, backed up by a literal army of
							family and friends playing what can only be described as some serious percussion.`}
						</p>
						<div className="image-container">
							<img src="/groom.jpg" className="randImage"/>
						</div>
						<p>
							{`I love this shot of the groom. Just out of frame is the majestic white horse upon which he sits.`}
						</p>
						
						<div className="image-container">
							<img src="/cuttingshapes.jpg" className="randImage"/>
						</div>
						<p>
							{`Meanwhile I was cutting some shapes with the aforementioned percussionists. I couldn't hear myself think but why would you want to think in
							moments like this?`}
						</p>
						<div className="image-container">
							<img src="/hats.jpg" className="randImage"/>
						</div>
						<p>
							<i>"You're probably wondering how I found myself in this situation"</i>
						</p>
						<p>
							{`Dance, by the way, is the subject of my second tip for visiting India. Dance holds a significant place in all of Indian culture, not just 
							weddings. This art form exhibits a diverse tapestry of traditions that vary widely across regions. So, if you, like me, have never danced without a 
							little liquid courage, the thought of performing this sacred art in front of hundreds of people on the biggest day of at least two people's lives makes you quake.`}
						</p>
						<p>
							{`Fortunately, we had our friend Srishty. She had both the patience and skill to get four engineers, all with a combined eight left feet, to not
							completely show ourselves up. Well, actually we did kind of show ourselves up (IYKYK) but this 30 second reel proves that it really is all about
							the journey, not the destination (right?)`}
						</p>
						<p>
							<strong>{`Tip #2: Dance`}</strong>{ ` (even if it doesn't go well, you need to burn those butter chicken calories)`}
						</p>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<InstagramEmbed url="https://www.instagram.com/reel/C04BHc3qvmH/?utm_source=ig_embed&amp;utm_campaign=loading/" width={328} height={500} />
						</div>
						<div className="image-container">
							<img src="/bridewalking.jpg" className="randImage"/>
						</div>
						<p>
							{`After the groom's side has entered the venue, the bride is lead to the ceremony by her father and brothers. This is the `}<i>kanyadaan</i>{`, the
							first appearance of the beautiful red lahenga. Many tears were shed at this stage.`}.
						</p>
						<div className="image-container" >
							<img src="/premandap.jpg" className="randImage"/>
							<img src="/mandap.jpg" className="randImage"/>
						</div>
						<p>
							{`The bride is helped onto the altar `}<i>(mandap)</i>{` by the groom where they exchange garlands to wear around their neck as part of `}<i>jaimala</i>. {`This
							is most comparable to the ring ceremony in the Western wedding, with the distinction that the garlands represent the union of two `}<i>families</i>{` as much as
							two individuals, which only added to the beauty of the moment.`}
						</p>
						<div className="image-container">
							<img src="/yeet.jpg" className="randImage"/>
						</div>
						<p>
							{`The remainder of the day was comprised of various other rituals onlooked by the extended families who were getting to know each other quite well. Above is one of
							my favorites - the `}<i>saptapadi</i>{` in which the newlyweds have their garments tied together and walk for seven rotations around a fire, each completion
							signifying a particular blessing. This was also joined with customary throwing of rice and turmeric - nothing like a bit of audience participation!`}
						</p>
						<p>
							{`The new couple circled the flames, and couldn't hold back their smiles.`}
						</p>
						<p>
							{`As dusk approached, the goodbye song of one of the most heartfelt days began to play. This is the `}<i>Vidaai</i>{`, the crescendo of all of the
							emotions that had spent too long simmering. The official send-off of the daughter to the groom's family, but not before she is personally addressed by each
							member of her family expressing in their own way their pride, love and wishes.`}
						</p>
						<p>{`I don't have any pictures of the Vidaai, yet it is my most vivid
							recollection of the day. I watched before me a scene that transcended familial love and took on something as close to the divine as I have ever
							witnessed. It truly was a reminder of why we keep tradition. Tradition in and of itself can be a force for good, and carried on for
							generations it can produce the most beautiful and poignant moments.`}
						</p>
						<p>{`Sharing in those moments is something I'll never forget.`}
						</p>
						<p>
							{`Which forms my argument for my final top tip for visiting India.`}
						</p>
						<p>
							<strong>{`Tip #3: Have an open mind`}</strong>
						</p>
						<p>
							{`Fortunately for me, I had plenty forewarning for much of what I saw and heard in Delhi. That being said, culture shock stayed with
							me through to the end of my trip, and it would doubtless be the same story for any visitor like me. This isn't to say that you shouldn't exercise
							the same safety pre-cautions as you would visiting any major city. But as I found out, choosing not to shy away from my uncertain surroundings
							and instead retaining an open and curious mind yielded some unimaginable results.`}
						</p>
						<p>
							{`Landing at Heathrow, I began to piece together some of these thoughts. Taking the first deep breath in a week helped a lot with this (thanks
							Delhi smog). I took the train homeward, riding the wave of both recollection of these fresh memories and the knowledge that when I got home,
							I could finally go out for an English.`}
						</p>
						<p>
							<strong>Addendum</strong>
						</p>
						<div className="image-container">
							<img src="/bride.jpeg" className="randImage"/>
						</div>
						<p>
							{`The bride, who I met while studying at Cornell Tech in 2019, had been working to make this happen for much longer than I had known her. Having grown close
							through college and post-graduation, I witnessed the tides and hard lines that befalls those who have to apply those tricky concepts of 'logistics' and
							'planning' to what is above all else mutual human attraction.`}
						</p>
						<p>
							{`For Pronoy, the best thing I can say about him is that he deserves Ananya as much as Ananya deserves him. I truly appreciate your kindess and hospitality over the
							years!`}
						</p>
						<p>
							{`Both of you, from the bottom of my heart, thank you and best wishes <3`}
						</p>
					</div>

				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1];

export default myArticles;
