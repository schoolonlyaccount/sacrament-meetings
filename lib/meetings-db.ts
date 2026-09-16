import type { SacramentMeeting } from "./types";

const meetings: SacramentMeeting[] = [
    {
        id: 1,
        date: '2026-01-04',
        meetingType: 'regular',
        presiding: 'Bishop Michael Anderson',
        conducting: 'Brother David Miller',
        announcements: [
            'Youth activity this Tuesday at 6:00 PM.',
            'Ward temple night is scheduled for January 16.'
        ],
        openingHymn: {
            number: 2,
            title: 'The Spirit of God'
        },
        openingPrayer: 'Sister Emily Johnson',
        wardBusiness: [],
        stakeBusiness: false,
        sacramentHymn: {
            number: 169,
            title: 'As Now We Take the Sacrament'
        },
        speakers: [
            {
                name: 'Sister Rachel Thompson',
                topic: 'Following the Savior',
                type: 'speaker'
            },
            {
                name: 'Brother James Wilson',
                topic: 'Faith in Jesus Christ',
                type: 'speaker'
            }
        ],
        closingHymn: {
            number: 85,
            title: 'How Firm a Foundation'
        },
        closingPrayer: 'Brother Robert Davis'
    },
    {
        id: 2,
        date: '2026-01-11',
        meetingType: 'testimony',
        presiding: 'Bishop Michael Anderson',
        conducting: 'Sister Laura Martinez',
        announcements: [
            'Please remember to bring donations for the food drive.'
        ],
        openingHymn: {
            number: 89,
            title: 'The Lord Is My Light'
        },
        openingPrayer: 'Brother Daniel Brown',
        wardBusiness: [],
        stakeBusiness: false,
        sacramentHymn: {
            number: 181,
            title: 'Jesus of Nazareth, Savior and King'
        },
        speakers: [
            {
                name: 'Ward Members',
                topic: 'Fast and Testimony Meeting',
                type: 'speaker'
            }
        ],
        closingHymn: {
            number: 100,
            title: 'Nearer, My God, to Thee'
        },
        closingPrayer: 'Sister Jennifer Smith'
    },
    {
        id: 3,
        date: '2026-01-18',
        meetingType: 'stake',
        presiding: 'President Thomas Clark',
        conducting: 'Brother Steven Harris',
        openingHymn: {
            number: 85,
            title: 'How Firm a Foundation'
        },
        openingPrayer: 'Sister Karen White',
        wardBusiness: [
            {
                description: 'Sustaining of newly called ward officers.'
            }
        ],
        stakeBusiness: true,
        sacramentHymn: {
            number: 172,
            title: 'In Humility, Our Savior'
        },
        speakers: [
            {
                name: 'President Thomas Clark',
                topic: 'Strengthening Families Through the Gospel',
                type: 'speaker'
            },
            {
                name: 'Sister Amanda Lewis',
                topic: 'Serving Others',
                type: 'speaker'
            },
            {
                name: 'Youth Choir',
                topic: 'I Am a Child of God',
                type: 'musical-number'
            }
        ],
        closingHymn: {
            number: 219,
            title: 'Because I Have Been Given Much'
        },
        closingPrayer: 'Brother Mark Robinson'
    },
    {
        id: 4,
        date: '2026-01-25',
        meetingType: 'regular',
        presiding: 'Bishop Michael Anderson',
        conducting: 'Brother David Miller',
        announcements: [
            'Relief Society activity will be held Thursday evening.',
            'Please sign up for ministering interviews.'
        ],
        openingHymn: {
            number: 3,
            title: 'Now We Sing with One Accord'
        },
        openingPrayer: 'Sister Emily Johnson',
        wardBusiness: [],
        stakeBusiness: false,
        sacramentHymn: {
            number: 193,
            title: 'I Stand All Amazed'
        },
        speakers: [
            {
                name: 'Brother Peter Adams',
                topic: 'Covenants and Commitment',
                type: 'speaker'
            },
            {
                name: 'Sister Rachel Thompson',
                topic: 'Finding Peace Through the Gospel',
                type: 'speaker'
            }
        ],
        closingHymn: {
            number: 85,
            title: 'How Firm a Foundation'
        },
        closingPrayer: 'Brother Daniel Brown'
    },
    {
        id: 5,
        date: '2026-02-01',
        meetingType: 'general',
        presiding: 'Bishop Michael Anderson',
        conducting: 'Sister Laura Martinez',
        announcements: [
            'Ward conference will be held next Sunday.'
        ],
        openingHymn: {
            number: 81,
            title: 'Press Forward, Saints'
        },
        openingPrayer: 'Brother Robert Davis',
        wardBusiness: [
            {
                description: 'Presentation and sustaining of new ward callings.'
            },
            {
                description: 'Approval of the annual ward budget.'
            }
        ],
        stakeBusiness: true,
        sacramentHymn: {
            number: 193,
            title: 'I Stand All Amazed'
        },
        speakers: [
            {
                name: 'Sister Jennifer Smith',
                topic: 'The Importance of Service',
                type: 'speaker'
            },
            {
                name: 'Brother James Wilson',
                topic: 'Building a Christ-Centered Home',
                type: 'speaker'
            },
            {
                name: 'Ward Choir',
                topic: 'Come, Ye Children of the Lord',
                type: 'musical-number'
            }
        ],
        closingHymn: {
            number: 227,
            title: 'There Is Sunshine in My Soul Today'
        },
        closingPrayer: 'Sister Karen White'
    }
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
    if (date) {
        return meetings.filter(m => m.date === date);
    }
    return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
    return meetings.find(m => m.id === id) ?? null;
}