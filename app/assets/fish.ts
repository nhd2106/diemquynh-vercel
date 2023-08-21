export interface Fish {
    name: string;
    description: string;
    images: {
      url: string;
      orientation: "horizontal" | "vertical";
      title?: string;
    }[];
  }
  
 export interface Fishes {
    [key: string]: Fish;
  }

export const  fishes: Fishes = {
    barramundi: {
      name: "Barramundi",
      description:
        "Barramundi is a versatile fish that can be grilled, baked, or fried. It has a mild, buttery flavor and a firm, flaky texture.",
      images: [
        {
          url: "/fishes/barramundi/barramundi_1.webp",
          orientation: "horizontal",
          title: "Barramundi",
        },
        {
          url: "/fishes/barramundi/barramundi_1.webp",
          orientation: "horizontal",

          title: "Barramundi",
        },
        {
          url: "/fishes/barramundi/barramundi_3.webp",
          orientation: "horizontal",
          title: "Barramundi Portion centre cut",
        },
        {
          url: "/fishes/barramundi/barramundi_2.webp",
          orientation: "vertical",

          title: "Barramundi fillet skin on",
        },
        {
          url: "/fishes/barramundi/barramundi_4.webp",
          orientation: "vertical",
          title: "Barramundi fillet skinless deeply trimmed",
        },
        {
          url: "/fishes/barramundi/barramundi_5.webp",
          orientation: "vertical",
          title: "Barramundi fillet skinless",
        },
      ],
    },
    grouper: {
      name: "Grouper",
      description:
        "Grouper fillet: A delectable seafood delight with a firm texture and mild, succulent flavor. Perfect for gourmet dishes or simple grilling, our grouper fillets promise a delightful culinary experience that caters to seafood enthusiasts of all tastes.",
      images: [
        {
          url: "/fishes/grouper/grouper_1.webp",
          orientation: "vertical",
        },
        {
          url: "/fishes/grouper/grouper_2.webp",
          orientation: "vertical",
        },
      ],
    },
    
    red_snapper: {
        name: "Red Snapper",
        description: "Red Snapper is a versatile fish that can be grilled, baked, or fried. It has a mild, buttery flavor and a firm, flaky texture.",
        images: [
            {
                url: "/fishes/red_snapper/red_snapper_1.webp",
                orientation: "horizontal",
                title: "Red Snapper",
            
            }
        ]
    },
    red_spot_emperor: {
        name: "Red Spot Emperor",
        description: "Red Spot Emperor is a versatile fish that can be grilled, baked, or fried. It has a mild, buttery flavor and a firm, flaky texture.",
        images: [
            {
                url: "/fishes/red_spot_emperor/red_spot_emperor_1.webp",
                orientation: "horizontal",
                title: "Red Spot Emperor",

            }
        ]
    },
    red_mullet: {
        name: "Red Mullet",
        description: "Red Mullet is a versatile fish that can be grilled, baked, or fried. It has a mild, buttery flavor and a firm, flaky texture.",
        images: [
            {
                url: "/fishes/red_mullet/red_mullet_1.webp",
                orientation: "horizontal",
                title: "Red Mullet",
            }
        ]
    },
    goldband_snapper: {
        name: "Goldband Snapper",
        description: "Goldband Snapper is a versatile fish that can be grilled, baked, or fried. It has a mild, buttery flavor and a firm, flaky texture.",
        images: [
            {
                url: "/fishes/goldband_snapper/goldband_snapper_1.webp",
                orientation: "horizontal",
                title: "Goldband Snapper",
            }
        ]
    },
    leather_jacket: {
        name: "Leather Jacket",
        description: "Leather Jacket is a versatile fish that can be grilled, baked, or fried. It has a mild, buttery flavor and a firm, flaky texture.",
        images: [
            {
                url: "/fishes/leather_jacket/leather_jacket_1.webp",
                orientation: "horizontal",
                title: "Leather Jacket",
            }
        ]
    },
    mahi_mahi: {
        name: "Mahi Mahi",
        description: "Mahi Mahi is a versatile fish that can be grilled, baked, or fried. It has a mild, buttery flavor and a firm, flaky texture.",
        images: [
            {
                url: "/fishes/mahi_mahi/mahi_mahi_1.webp",
                orientation: "horizontal",
                title: "Mahi Mahi",
            }
        ]
    },
    parrot_fish: {
        name: "Parrot Fish",
        description: "Parrot Fish is a versatile fish that can be grilled, baked, or fried. It has a mild, buttery flavor and a firm, flaky texture.",
        images: [
            {
                url: "/fishes/parrot_fish/parrot_fish_1.webp",
                orientation: "horizontal",
                title: "Parrot Fish",

            }
        ]
    },
    sillago_whiting: {
        name: "Sillago Whiting",
        description: "Sillago Whiting is a versatile fish that can be grilled, baked, or fried. It has a mild, buttery flavor and a firm, flaky texture.",
        images: [
            {
                url: "/fishes/sillago_whiting/sillago_whiting_1.webp",
                orientation: "horizontal",

            }
        ]
    }
  };
