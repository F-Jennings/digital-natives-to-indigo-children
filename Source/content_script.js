walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	// Digital Generation
	v = v.replace(/\b(?:Digital Generation)|(?:Generation Digital)\b/g,"Indigo Council");
	v = v.replace(/\b(?:digital generation)|(?:generation digital)\b/g,"indigo council");

	// Digital Native
	v = v.replace(/\b(?:Digital Native)\b/g,"Indigo Child");
	v = v.replace(/\b(?:digital native)\b/g,"indigo child");
	v = v.replace(/\b(?:A Digital Native)\b/g,"An Indigo Child");
	v = v.replace(/\b(?:a digital native)\b/g,"an indigo child");
	v = v.replace(/\b(?:digital natives)\b/g,"indigo children");
	v = v.replace(/\b(?:Digital Natives)\b/g,"Indigo Children");
	v = v.replace(/\b(?:Digital natives)\b/g,"Indigo children");
	v = v.replace(/\b(?:Digital native)\b/g,"Indigo child");
	v = v.replace(/\b(?:Digital Native's)\b/g,"Indigo Child's");
	v = v.replace(/\b(?:Digital Natives')\b/g,"Indigo Children's");
	v = v.replace(/\b(?:digital native's)\b/g,"indigo child's");
	v = v.replace(/\b(?:digital natives')\b/g,"indigo children's");
	
	// Digital Immigrant
	v = v.replace(/\b(?:Digital Immigrant)\b/g,"Low-Vibration Skeptic");
	v = v.replace(/\b(?:digital immigrant)\b/g,"low-vibration skeptic");
	v = v.replace(/\b(?:digital immigrants)\b/g,"low-vibration skeptics");
	v = v.replace(/\b(?:Digital Immigrants)\b/g,"Low-Vibration Skeptics");
	v = v.replace(/\b(?:Digital immigrant)\b/g,"Low-vibration skeptic");
	v = v.replace(/\b(?:Digital immigrants)\b/g,"Low-vibration skeptics");
	v = v.replace(/\b(?:Digital Immigrant's)\b/g,"Low-Vibration Skeptic's");
	v = v.replace(/\b(?:Digital Immigrants')\b/g,"Low-Vibration Skeptics'");
	v = v.replace(/\b(?:digital immigrant's)\b/g,"low-vibration skeptic's");
	v = v.replace(/\b(?:digital immigrants')\b/g,"low-vibration skeptics'");
	
	//TechnoDevices
	v = v.replace(/\b(?:iPhone)\b/g,"Golden Apple");
	v = v.replace(/\b(?:iPhones)\b/g,"Golden Apples");
	v = v.replace(/\b(?:iphone)\b/g,"golden apple");
	v = v.replace(/\b(?:iphones)\b/g,"golden apples");
	v = v.replace(/\b(?:Android)\b/g,"Sacred Source");
	v = v.replace(/\b(?:android)\b/g,"sacred source");
	v = v.replace(/\b(?:Smartphones)\b/g,"Mana Orbs");
	v = v.replace(/\b(?:smartphones)\b/g,"mana orbs");
	v = v.replace(/\b(?:Internet of Things)\b/g,"Collective Unconscious");
	v = v.replace(/\b(?:internet of things)\b/g,"collective unconscious");
	v = v.replace(/\b(?:IoT)\b/g,"collective unconscious");
	v = v.replace(/\b(?:I.o.T.)\b/g,"collective unconscious");
	v = v.replace(/\b(?:Floppy Dis(c|k))\b/g,"Charged Tourmaline");
	v = v.replace(/\b(?:floppy dis(c|k))\b/g,"charged tourmaline");
	v = v.replace(/\b(?:CD-ROM)\b/g,"Shimmering Opal");
	v = v.replace(/\b(?:CD-ROMs)\b/g,"Shimmering Opals");
	v = v.replace(/\b(?:Compact Dis(c|k))\b/g,"Shimmering Opal");
	v = v.replace(/\b(?:Compact Dis(c|k)s)\b/g,"Shimmering Opals");

	// The Information Age
	v = v.replace(/\bInformation Age\b/g,"Indigo Celebration");
	v = v.replace(/\binformation age\b/g,"indigo celebration");
	v = v.replace(/\bWeb\b/g,"Ariadne's Weaving");
	v = v.replace(/\bweb\b/g,"Ariadne's weaving");

	// Social Media
	v = v.replace(/\bSocial Media\b/g,"Vibratory Communication");
	v = v.replace(/\bsocial media\b/g,"vibratory communication");
	v = v.replace(/\bSocial Network\b/g,"Vibratory Communication");
	v = v.replace(/\bsocial network\b/g,"vibratory communication");
	v = v.replace(/\bSocial Networks\b/g,"Vibratory Communications");
	v = v.replace(/\bsocial networks\b/g,"vibratory communications");
	v = v.replace(/\bTwitter\b/g,"Great Thunderbird");
	v = v.replace(/\btwitter\b/g,"great thunderbird");
	v = v.replace(/\bFacebook\b/g,"Book of Names");
	v = v.replace(/\bfacebook\b/g,"book of names");
	v = v.replace(/\bText Messaging\b/g,"Telepathic Linking");
	v = v.replace(/\btext messaging\b/g,"telepathic linking");
	v = v.replace(/\bWikipedia\b/g,"Overmind");
	v = v.replace(/\bwikipedia\b/g,"overmind");
	v = v.replace(/\bYou(T|t)ube\b/g,"Scrying");
	v = v.replace(/\byoutube\b/g,"scrying");

	// Online Presence
	v = v.replace(/\bOnline Presence\b/g,"Astral Projection");
	v = v.replace(/\bonline presence\b/g,"astral projection");

	// HMDs
	v = v.replace(/\bGoogle Glass\b/g,"Third-Eye Chakra");
	v = v.replace(/\bgoogle glass\b/g,"third-eye chakra");
	v = v.replace(/\bOculus Rift\b/g,"Third-Eye Chakra");
	v = v.replace(/\boculus rift\b/g,"third-eye chakra");
	v = v.replace(/\bHead Mounted Display\b/g,"Third-Eye Chakra");
	v = v.replace(/\bhead mounted display\b/g,"third-eye chakra");
	v = v.replace(/\bHMD\b/g,"Ajna Chakra");
	v = v.replace(/\bhmd\b/g,"ajna chakra");

	// Narcissism
	v = v.replace(/\bNarcissism\b/g,"Deep Eyes and Magnetic Personality");
	v = v.replace(/\bnarcissism\b/g,"deep eyes and magnetic personality");

	// ADHD
	v = v.replace(/\bADHD\b/g,"Attention Dialed into a Higher Dimension");
	v = v.replace(/\badhd\b/g,"attention dialed into a higher dimension");
	v = v.replace(/\b(?:Attention Deficit Hyperactivity Disorder)|(?:attention deficit hyperactivity disorder)\b/g,
	"Attention Dialed into a Higher Dimension");

	// The Cloud
	v = v.replace(/\b(?:Cloud|cloud)|(?:Cloud Computing|cloud computing)\b/g,"Crystal Harmonics");
	v = v.replace(/\b(?:cloud hosting)|(?:cloud computing)\b/g,"crystal harmonics");
	v = v.replace(/\b(?:Hosted Solutions)\b/g,"Crystal Frequencies");
	v = v.replace(/\b(?:hosted solutions)\b/g,"crystal frequencies");

	// Digital Technologies
	v = v.replace(/\b(?:Digital Technologies)\b/g,"Higher Vibrations")
	v = v.replace(/\b(?:digital technologies)\b/g,"higher vibrations")
	v = v.replace(/\b(?:Digital Technology)\b/g,"Higher Vibration")
	v = v.replace(/\b(?:digital technology)\b/g,"higher vibration")

	// Helicopter Parents
	v = v.replace(/\bHelicopter Parents\b/g,"Enlightened Mentors");
	v = v.replace(/\bhelicopter parents\b/g,"chosen souls");
	v = v.replace(/\bHelicopter Parents'\b/g,"Enlightened Mentors'");
	v = v.replace(/\bhelicopter parents'\b/g,"chosen souls'");

	// Trophy Kids
	v = v.replace(/\bTrophy Kids\b/g,"Rainbow Children");
	v = v.replace(/\btrophy kids\b/g,"rainbow children");
	v = v.replace(/\bTrophy Kids'\b/g,"Rainbow Children's");
	v = v.replace(/\btrophy kids'\b/g,"rainbow children's");

	// Generation Y
	v = v.replace(/\b(?:Generation Y)|(?:Generation Why)\b/g,"The Crystal Cusp");
	v = v.replace(/\bgen(?:eration)? ?(?:wh)?y\b/g,"the crystal cusp");
	v = v.replace(/\bGen Y\b/g,"crystal generation");
	
	// Millenials
	v = v.replace(/\b(?:Millennials)\b/g,"Crystal Souls");
	v = v.replace(/\bgen(?:millennials)\b/g,"crystal souls");
	v = v.replace(/\bgen(?:Millennial)\b/g,"Crystal Soul");
	v = v.replace(/\bgen(?:millennial)\b/g,"crystal soul");

	// Generation We
	v = v.replace(/\bGeneration We\b/g,"Lightworkers");
	v = v.replace(/\bgeneration we\b/g,"lightworkers");
	v = v.replace(/\bWe Generation\b/g,"Age of Light");
	v = v.replace(/\bwe generation\b/g,"Age of Light");

	// Generation Me
	v = v.replace(/\bGeneration Me\b/g,"Good Vibes Generation");
	v = v.replace(/\bgeneration me\b/g,"good vibes generation");

	// Online Natives
	v = v.replace(/\bOnline Natives\b/g,"Indigos");
	v = v.replace(/\bonline natives\b/g,"indigos");
	v = v.replace(/\bOnline Native\b/g,"Indigo");
	v = v.replace(/\bonline native\b/g,"indigo");

	// Net Generation
	v = v.replace(/\bNet Generation\b/g,"Crystal Generation");
	v = v.replace(/\bnet generation\b/g,"crystal generation");
	v = v.replace(/\bGeneration Net\b/g,"Crystal Generation");
	v = v.replace(/\bgeneration net\b/g,"crystal generation");

	// Boomerang Generation
	v = v.replace(/\b(?:Boomerang Generation)|(?:Generation Boomerang)\b/g,"Enlightened Homesteaders");
	v = v.replace(/\b(?:boomerang generation)|(?:generation boomerang)\b/g,"enlightened homesteaders");

	// Peter Pan Generation
	v = v.replace(/\bPeter Pan Generation\b/g,"Young Souls");
	v = v.replace(/\b(?:P|p)eter (?:P|p)an generation\b/g,"young souls");
	v = v.replace(/\bGeneration Peter Pan\b/g,"Young Souls");
	v = v.replace(/\bgeneration (?:P|p)eter (?:P|p)an\b/g,"young souls");


	textNode.nodeValue = v;
}
