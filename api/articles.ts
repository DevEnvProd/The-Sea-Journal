const articles = [
  {
    id: "1",
    title: "Vietnam's Tech Sector Booms as Global Firms Diversify Supply Chains",
    slug: "vietnam-tech-sector-booms-supply-chains",
    summary: "With major investments from Apple, Samsung, and Intel, Vietnam is rapidly positioning itself as the new manufacturing hub of Southeast Asia.",
    content: `Ho Chi Minh City — Vietnam is experiencing a technological renaissance, driven by a global shift in supply chain strategies. As multinational corporations seek to diversify their manufacturing bases, the Southeast Asian nation has emerged as a primary beneficiary.

In the first quarter of 2024 alone, foreign direct investment (FDI) in Vietnam's high-tech sector surged by 18% year-on-year. Giants like Apple have already moved significant portions of their iPad and Apple Watch production to northern Vietnam, while Samsung continues to expand its massive R&D center in Hanoi.

"Vietnam offers a unique combination of political stability, a young and tech-savvy workforce, and strategic geographic location," says Le Thi Thu, a senior economist at the Vietnam Institute for Economic and Policy Research. "We are no longer just a low-cost manufacturing destination; we are moving up the value chain."

However, challenges remain. Infrastructure bottlenecks and a shortage of highly skilled engineers could slow down this rapid growth. The government has responded with aggressive infrastructure spending and new vocational training programs aimed at upskilling the workforce.

As the global tech landscape shifts, Vietnam's role is becoming increasingly central, promising a new era of economic prosperity for the nation.`,
    author: "Nguyen Van Minh",
    category: "Technology",
    publishedAt: new Date().toISOString(),
    imageUrl: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=2600&auto=format&fit=crop",
    featured: true
  },
  {
    id: "2",
    title: "Singapore Unveils Ambitious 'Green Plan 2030' Updates",
    slug: "singapore-green-plan-2030-updates",
    summary: "The city-state accelerates its sustainability goals with new carbon tax measures and electric vehicle incentives.",
    content: `Singapore — The Singaporean government has announced a revised timeline for its "Green Plan 2030," signaling a more aggressive stance on climate action. The updated roadmap includes a steeper hike in carbon taxes starting next year and enhanced subsidies for electric vehicle (EV) adoption.

Minister for Sustainability and the Environment, Grace Fu, emphasized the urgency of the situation during a press conference yesterday. "Climate change is an existential threat to our island nation. We cannot afford to wait," she stated.

Key pillars of the updated plan include:
1. **Solar Energy Expansion**: Quadrupling solar energy deployment by 2025.
2. **EV Infrastructure**: Installing 60,000 EV charging points island-wide by 2030.
3. **Green Buildings**: Ensuring 80% of new buildings meet Super Low Energy standards.

The business community has reacted with cautious optimism. While some manufacturers are concerned about rising operational costs due to the carbon tax, the finance sector sees a massive opportunity in green financing and carbon trading. Singapore aims to position itself as the region's leading hub for green finance, leveraging its robust regulatory framework.`,
    author: "Sarah Tan",
    category: "Environment",
    publishedAt: new Date(Date.now() - 86400000).toISOString(),
    imageUrl: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=2674&auto=format&fit=crop",
    featured: true
  },
  {
    id: "3",
    title: "Indonesia's Digital Economy on Track to Hit $130 Billion by 2025",
    slug: "indonesia-digital-economy-growth-2025",
    summary: "E-commerce and fintech sectors drive explosive growth in Southeast Asia's largest economy.",
    content: `Jakarta — Indonesia's digital economy is defying global headwinds, projected to reach a gross merchandise value (GMV) of $130 billion by 2025, according to a new report by Google, Temasek, and Bain & Company.

The growth is fueled primarily by e-commerce, which accounts for nearly 60% of the digital economy. Platforms like Tokopedia and Shopee have penetrated even the most remote archipelagos, bringing millions of new consumers online.

"The pandemic was a catalyst, but the habit has stuck," explains Budi Santoso, a digital market analyst. "Indonesians are now comfortable buying everything from groceries to electronics online."

Fintech is another bright spot. With a large unbanked population, digital wallets and peer-to-peer lending platforms are filling a critical gap. The central bank's launch of QRIS (Quick Response Code Indonesian Standard) has standardized digital payments, making cashless transactions seamless across the country.

As venture capital continues to pour into Jakarta's startup ecosystem, the country is minting unicorns at a record pace, solidifying its status as the digital engine of Southeast Asia.`,
    author: "Budi Santoso",
    category: "Business",
    publishedAt: new Date(Date.now() - 172800000).toISOString(),
    imageUrl: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2670&auto=format&fit=crop",
    featured: false
  },
  {
    id: "4",
    title: "Thailand's Tourism Revival: Beyond the Beaches",
    slug: "thailand-tourism-revival-culture",
    summary: "The Tourism Authority of Thailand launches a new campaign focusing on cultural heritage and sustainable travel.",
    content: `Bangkok — Thailand is reimagining its tourism strategy. Moving away from the mass tourism model of the past, the "Amazing Thailand: New Chapters" campaign highlights cultural immersion, wellness, and sustainability.

"We want visitors to stay longer and spend more, but also to respect our environment and culture," says Yuthasak Supasorn, Governor of the Tourism Authority of Thailand (TAT).

New initiatives include:
*   **Creative Tourism**: Workshops on traditional Thai silk weaving and pottery in Chiang Mai.
*   **Gastronomy Trails**: promoting lesser-known regional cuisines in Isan and the South.
*   **Work-from-Thailand**: Special long-term visas for digital nomads.

Early results are promising. While arrival numbers are still below pre-pandemic levels, the average spend per tourist has increased. The shift suggests a more sustainable future for an industry that accounts for nearly 18% of the country's GDP.`,
    author: "Chaiwat S.",
    category: "Travel",
    publishedAt: new Date(Date.now() - 259200000).toISOString(),
    imageUrl: "https://picsum.photos/seed/thailand/800/600",
    featured: false
  },
  {
    id: "5",
    title: "Malaysia's Semiconductor Hub in Penang Attracts Global Giants",
    slug: "malaysia-semiconductor-penang-investment",
    summary: "Intel and Infineon expand operations as Penang solidifies its reputation as the 'Silicon Valley of the East'.",
    content: `George Town — Penang is buzzing with activity as construction cranes dot the skyline of the Bayan Lepas Free Industrial Zone. The Malaysian state, long known for its electronics manufacturing, is experiencing a fresh wave of investment in the semiconductor sector.

Intel recently announced a $7 billion investment to build a new advanced packaging facility, while German chipmaker Infineon is investing heavily in a new wafer fab.

"The global chip shortage highlighted the importance of diversified supply chains," says Chief Minister Chow Kon Yeow. "Penang has a 50-year track record, a skilled English-speaking workforce, and a robust ecosystem of local suppliers."

The boom is creating thousands of high-income jobs but also straining local infrastructure. Housing prices in Penang have ticked up, and traffic congestion is a growing concern. The state government is fast-tracking the Penang Transport Master Plan to address these issues, ensuring the island remains livable as it grows.`,
    author: "Ahmad Razak",
    category: "Technology",
    publishedAt: new Date(Date.now() - 345600000).toISOString(),
    imageUrl: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=2670&auto=format&fit=crop",
    featured: false
  },
  {
    id: "6",
    title: "Philippines Pushes for Renewable Energy with Offshore Wind Projects",
    slug: "philippines-renewable-energy-offshore-wind",
    summary: "The Department of Energy awards new contracts to boost the country's wind power capacity by 2030.",
    content: `Manila — The Philippines is looking to the sea to solve its energy crisis. With frequent brownouts and high electricity costs hampering economic growth, the government has aggressively pivoted towards renewable energy.

The Department of Energy (DOE) announced yesterday the awarding of five new offshore wind service contracts to a consortium of European and local developers. These projects, located off the coasts of Mindoro and Guimaras, are expected to generate over 3 gigawatts of power once operational.

"We have some of the best wind resources in the region," noted Energy Secretary Raphael Lotilla. "Harnessing this potential is key to achieving energy independence and meeting our climate commitments."

The transition faces hurdles, including the need to upgrade the national grid to handle intermittent renewable energy. However, with foreign investors lining up, the mood in Manila is optimistic. The move is seen as a crucial step in reducing the country's reliance on imported coal and oil.`,
    author: "Maria Santos",
    category: "Environment",
    publishedAt: new Date(Date.now() - 432000000).toISOString(),
    imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2670&auto=format&fit=crop",
    featured: false
  },
  {
    id: "7",
    title: "The Rise of Specialty Coffee Culture in Hanoi",
    slug: "hanoi-specialty-coffee-culture",
    summary: "A new generation of baristas is transforming Vietnam's coffee scene, moving beyond traditional robusta to artisanal arabica.",
    content: `Hanoi — In the narrow alleyways of Hanoi's Old Quarter, a quiet revolution is brewing. While the city is famous for its strong, condensed-milk-laden *ca phe sua da* and the iconic egg coffee, a new wave of specialty coffee shops is emerging.

Young entrepreneurs, many educated abroad, are bringing third-wave coffee culture back home. They are partnering directly with farmers in Da Lat to improve bean quality, experimenting with light roasts, and using precision brewing methods like V60 and Aeropress.

"Vietnamese coffee has always been about strength," says Tran Thi Mai, owner of 'The Workshop' cafe. "We want to show that it can also be about nuance, acidity, and floral notes."

This shift is not just aesthetic; it's economic. By focusing on high-quality Arabica, Vietnamese farmers can command higher prices in the international market. The trend is reshaping the domestic market too, with local youth increasingly willing to pay a premium for a high-quality cup.`,
    author: "Tran Thi Mai",
    category: "Lifestyle",
    publishedAt: new Date(Date.now() - 518400000).toISOString(),
    imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2574&auto=format&fit=crop",
    featured: false
  },
  {
    id: "8",
    title: "Cambodia's Angkor Wat Sees Tourist Numbers Rebound",
    slug: "cambodia-angkor-wat-tourism-rebound",
    summary: "Visitor numbers to the ancient temple complex hit a post-pandemic high in Q1 2024.",
    content: `Siem Reap — The sunrise over Angkor Wat is drawing crowds again. Cambodia's Ministry of Tourism reported that ticket sales for the Angkor Archaeological Park reached 300,000 in the first three months of 2024, a significant jump from the previous year.

The return of tourists is a lifeline for Siem Reap, a city whose economy was devastated by the pandemic. Hotels are reopening, and the bustling Pub Street is once again filled with the sounds of music and conversation.

"It's been a long, hard winter," says hotelier Sokha Bun. "But seeing the buses return gives us hope."

To manage the influx and preserve the site, authorities are implementing stricter crowd control measures at popular temples like Ta Prohm. They are also promoting secondary destinations like Battambang and the coastal islands to disperse the crowds and spread the economic benefits more evenly across the country.`,
    author: "Sokha Bun",
    category: "Travel",
    publishedAt: new Date(Date.now() - 604800000).toISOString(),
    imageUrl: "https://picsum.photos/seed/angkor/800/600",
    featured: false
  },
  {
    id: "9",
    title: "Grab Holdings Reports First Profitable Quarter",
    slug: "grab-holdings-first-profitable-quarter",
    summary: "The Southeast Asian superapp giant achieves a historic milestone, signaling maturity in the region's tech ecosystem.",
    content: `Singapore — Grab Holdings, the ubiquitous superapp of Southeast Asia, has reported its first-ever quarterly profit on an adjusted EBITDA basis. The announcement sent its stock soaring and silenced critics who questioned the sustainability of its business model.

CEO Anthony Tan called it a "watershed moment" for the company. "We have proven that we can grow while being disciplined with our costs," he told investors.

The profitability was driven by:
1.  **Mobility Recovery**: Ride-hailing demand has returned to pre-pandemic levels.
2.  **Delivery Optimization**: Efficiencies in food and grocery delivery logistics.
3.  **Financial Services**: Strong uptake of GrabPay and its digital bank offerings in Singapore and Malaysia.

Analysts see this as a bellwether for the region's tech sector. Investors are shifting focus from "growth at all costs" to sustainable profitability, and Grab's success sets a new benchmark for aspiring unicorns in the region.`,
    author: "David Lee",
    category: "Business",
    publishedAt: new Date(Date.now() - 691200000).toISOString(),
    imageUrl: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?q=80&w=2574&auto=format&fit=crop",
    featured: false
  },
  {
    id: "10",
    title: "Laos High-Speed Railway Transforms Regional Logistics",
    slug: "laos-china-railway-logistics-transform",
    summary: "The Vientiane-Boten railway line is boosting trade between China and ASEAN, unlocking potential for the landlocked nation.",
    content: `Vientiane — The Laos-China Railway has been operational for over two years, and its impact is reshaping regional trade. The $6 billion project has transformed Laos from a landlocked country into a land-linked hub.

Freight trains carrying tropical fruit from Thailand and rubber from Laos now reach Kunming, China, in under 30 hours—a journey that used to take days by truck. Conversely, Chinese electronics and machinery are flowing south into ASEAN markets more cheaply than ever.

"The railway has lowered logistics costs by 30-40%," estimates the World Bank. For Lao exporters, this is a game-changer.

However, debt concerns linger. The project was heavily financed by Chinese loans, raising questions about Laos's ability to repay. The government insists that the economic spillover effects—boosted tourism, new industrial zones along the rail corridor—will generate sufficient revenue to manage the debt service.`,
    author: "Phonethip S.",
    category: "Business",
    publishedAt: new Date(Date.now() - 777600000).toISOString(),
    imageUrl: "https://images.unsplash.com/photo-1513569771920-c9e1d31714b0?q=80&w=2574&auto=format&fit=crop",
    featured: false
  }
];

export default function handler(req, res) {
  try {
    console.log("GET /api/articles hit (Vercel)");
    
    if (!articles) {
      console.error("Articles data is undefined or null");
      return res.status(500).json({ error: "Internal Server Error: Data missing" });
    }

    console.log("Query params:", req.query);
    const { category, featured } = req.query;
    let filtered = articles;
    
    if (category && typeof category === 'string' && category !== 'undefined') {
      const categoryParam = category.toLowerCase().trim();
      console.log(`Filtering by category: '${categoryParam}'`);
      
      filtered = filtered.filter(a => {
        const articleCategory = a.category.toLowerCase().trim();
        const match = articleCategory === categoryParam;
        return match;
      });
      
      console.log(`Found ${filtered.length} articles for category '${categoryParam}'`);
    }
    
    if (featured === 'true') {
      filtered = filtered.filter(a => a.featured);
    }

    res.status(200).json(filtered);
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}
