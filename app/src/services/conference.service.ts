import type { Conference } from '@/Conference'

const allConferences: Conference[] = [
	{
		id: `conf-${Math.random().toString().substring(2)}`,
		title: 'Et demain ? (Web2day)',
		date: {
			start: new Date('2024-06-05'),
			end: new Date('2024-06-06')
		},
		location: 'Nantes, France',
		website: new URL('https://web2day.co/'),
		illustration: {
			src: 'images/web2day.webp',
			description: 'un éléphant géant en bois supporte un écran géant qui présente une conférence'
		}
	},
	{
		id: `conf-${Math.random().toString().substring(2)}`,
		title: 'DevFest Nantes',
		date: {
			start: new Date('2024-10-17'),
			end: new Date('2024-10-18')
		},
		location: 'Nantes, France',
		website: new URL('https://devfest.gdgnantes.com/'),
		illustration: {
			src: 'images/devfest.webp',
			description: "le grand hall d'un centre de conférence"
		}
	},
	{
		id: `conf-${Math.random().toString().substring(2)}`,
		title: 'AgileTour Nantes',
		date: {
			start: new Date('2024-10-30'),
			end: new Date('2024-10-31')
		},
		location: 'Nantes, France',
		website: new URL(
			'https://agilenantes.org/evenements/agile-tour-nantes/'
		),
		illustration: {
			src: 'images/agiletour.webp',
			description: 'un équipe fièrement debout devant un tableau kanban'
		}
	},
	{
		id: `conf-${Math.random().toString().substring(2)}`,
		title: 'BreizhCamp',
		date: {
			start: new Date('2023-06-28'),
			end: new Date('2023-06-30')
		},
		location: 'Rennes, France',
		website: new URL('https://www.breizhcamp.org/'),
		illustration: {
			src: 'images/breizhcamp.webp',
			description: 'un auditorium rempli de participants à une conférence'
		}
	},
	{
		id: `conf-${Math.random().toString().substring(2)}`,
		title: 'Devoxx France',
		date: {
			start: new Date('2024-04-17'),
			end: new Date('2024-04-19')
		},
		location: 'Paris, France',
		website: new URL('https://www.devoxx.fr/'),
		illustration: {
			src: 'images/devoxx.webp',
			description: 'un groupe de developpeurs sur scène portant des lettres géantes DEVOXX'
		}
	},
	{
		id: `conf-${Math.random().toString().substring(2)}`,
		title: 'Le Camping des Speakers',
		date: {
			start: new Date('2023-06-15'),
			end: new Date('2023-06-16')
		},
		location: 'Morbihan, France',
		website: new URL('https://camping-speakers.fr/'),
		illustration: {
			src: 'images/camping-speakers.webp',
			description:
				"deux ours en peluche cuisent des marshmallows autour d'un feu de camp alimenté par un ordinateur"
		}
	},
	{
		id: `conf-${Math.random().toString().substring(2)}`,
		title: 'AgileTour Rennes',
		date: {
			start: new Date('2024-11-13'),
			end: new Date('2024-11-14')
		},
		location: 'Rennes, France',
		website: new URL('https://agiletour.agilerennes.org/'),
		illustration: {
			src: 'images/agiletour-rennes.webp',
			description: 'une hermine debout devant un tableau kanban'
		}
	},
	{
		id: `conf-${Math.random().toString().substring(2)}`,
		title: 'Nantes Digital Week',
		date: {
			start: new Date('2023-09-14'),
			end: new Date('2023-09-25')
		},
		location: 'Nantes, France',
		website: new URL('https://nantesdigitalweek.com/le-programme-du-festival/'),
		illustration: {
			src: 'images/nantesdigitalweek.webp',
			description: 'des enfants apprenant à programmer des robots dans une classe'
		}
	},
	{
		id: `conf-${Math.random().toString().substring(2)}`,
		title: 'Salon de la Data',
		date: {
			start: new Date('2023-09-19')
		},
		location: 'Nantes, France',
		website: new URL('https://salondata.fr/'),
		illustration: {
			src: 'images/salondata.webp',
			description: "le lounge d'un centre de congrès, un écran géant affiche une data visualisation"
		}
	}
]

export function getConferences(): Conference[] {
	const sorted = allConferences.sort((a, b) => a.date.start.getTime() - b.date.start.getTime())

	const expired = sorted.filter((conference) => isExpired(conference))
	const active = sorted.filter((conference) => !isExpired(conference))

	return active.concat(expired)
}

export function isExpired(conference: Conference, today: Date = new Date()): boolean {
	const startOfToday = new Date(today.getTime())
	startOfToday.setHours(0, 0, 0, 0)

	if (conference.date.end) {
		return conference.date.end < startOfToday
	}
	return conference.date.start < startOfToday
}
