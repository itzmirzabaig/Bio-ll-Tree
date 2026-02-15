export interface TreeNode {
  name: string;
  children?: TreeNode[];
  hoverContent?: {
    title?: string;
    sections: {
      heading: string;
      items: string[];
    }[];
  };
  isTerminal?: boolean;
}

export const treeData: TreeNode = {
  name: "Universal Common Ancestor",
  hoverContent: {
    title: "The Origin of All Life",
    sections: [
      {
        heading: "Significance",
        items: ["Single common lineage from which all life descends", "Root of the tree of life"]
      }
    ]
  },
  children: [
    {
      name: "Domain Bacteria",
      hoverContent: {
        title: "Domain Bacteria",
        sections: [
          {
            heading: "Evolutionary Developments",
            items: ["Single-cellular organisms", "Prokaryotic (lack a true nucleus)"]
          },
          {
            heading: "Structural Trait",
            items: ["Possession of a peptidoglycan cell wall"]
          },
          {
            heading: "Classification",
            items: [
              "Gram-positive: thick peptidoglycan layer, stains purple",
              "Gram-negative: thin peptidoglycan and outer membrane with porins, stains pink"
            ]
          },
          {
            heading: "Ecological Roles",
            items: [
              "Includes nitrogen-fixers (Alpha-proteobacteria) vital for agriculture",
              "Decomposers"
            ]
          }
        ]
      },
      children: [
        {
          name: "Phylum Proteobacteria",
          isTerminal: true,
          hoverContent: {
            title: "Phylum Proteobacteria",
            sections: [
              {
                heading: "Overview",
                items: ["The largest and broadest bacterial group"]
              },
              {
                heading: "Sub-groups",
                items: [
                  "Alpha (Rhizobium; nitrogen fixation)",
                  "Beta (Neisseria; meningitis)",
                  "Gamma (E. coli; gut flora)",
                  "Delta (largest bacterial genome)",
                  "Epsilon (H. pylori)"
                ]
              }
            ]
          }
        },
        {
          name: "Phylum Cyanobacteria",
          isTerminal: true,
          hoverContent: {
            title: "Phylum Cyanobacteria",
            sections: [
              {
                heading: "Overview",
                items: ['Commonly called "blue-green algae"']
              },
              {
                heading: "Key Trait",
                items: ["Photosynthetic; responsible for massive CO₂ absorption"]
              },
              {
                heading: "Ecological Fact",
                items: [
                  "Most abundant photosynthetic organisms on Earth",
                  "Can cause oxygen-depleting algal blooms"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      name: "Domain Archaea",
      hoverContent: {
        title: "Domain Archaea",
        sections: [
          {
            heading: "Evolutionary Development",
            items: ["Complete lack of peptidoglycan in cell walls (distinguishes them from Bacteria)"]
          },
          {
            heading: "Adaptive Traits",
            items: [
              "Extremophiles; possess rigid proteins to survive heat (thermophiles)",
              "Antifreeze proteins for cold (psychrophiles)",
              "Compact amino acids for high pressure (piezophiles)"
            ]
          }
        ]
      },
      children: [
        {
          name: "Kingdom Methanobacteria",
          isTerminal: true,
          hoverContent: {
            title: "Kingdom Methanobacteria",
            sections: [
              {
                heading: "Characteristics",
                items: ["Produce methane", "Live in hydrothermal vents or intestines"]
              }
            ]
          }
        },
        {
          name: "Kingdom Thermoprotei",
          isTerminal: true,
          hoverContent: {
            title: "Kingdom Thermoprotei",
            sections: [
              {
                heading: "Characteristics",
                items: ["Hyperthermophilic", "Can survive boiling temperatures and pH as low as 1.0"]
              }
            ]
          }
        },
        {
          name: "Kingdom Nanoarchaeota",
          isTerminal: true,
          hoverContent: {
            title: "Kingdom Nanoarchaeota",
            sections: [
              {
                heading: "Characteristics",
                items: ["The smallest known archaea with the smallest genome"]
              }
            ]
          }
        }
      ]
    },
    {
      name: "Domain Eukarya",
      hoverContent: {
        title: "Domain Eukarya",
        sections: [
          {
            heading: "Evolutionary Developments",
            items: [
              "True nucleus with nuclear envelope",
              "Mitochondria (and chloroplasts in some) via Endosymbiotic Theory",
              "Mitosis"
            ]
          },
          {
            heading: "Size Trait",
            items: ["Typically 10 times larger than prokaryotes"]
          }
        ]
      },
      children: [
        {
          name: "Archaeoplastida",
          isTerminal: true,
          hoverContent: {
            title: "Archaeoplastida",
            sections: [
              {
                heading: "Characteristics",
                items: ["Includes red/green algae", "Closest relatives to land plants"]
              }
            ]
          }
        },
        {
          name: "Amoebazoans",
          isTerminal: true,
          hoverContent: {
            title: "Amoebazoans",
            sections: [
              {
                heading: "Characteristics",
                items: ["Includes amoebas and slime molds", "Colonial behavior when food is scarce"]
              }
            ]
          }
        },
        {
          name: "Chromalveolata",
          isTerminal: true,
          hoverContent: {
            title: "Chromalveolata",
            sections: [
              {
                heading: "Includes",
                items: [
                  "Dinoflagellates (cause Red Tides)",
                  "Ciliates (Paramecium)",
                  "Apicomplexans (all parasitic, e.g., Toxoplasma gondii)"
                ]
              }
            ]
          }
        },
        {
          name: "Kingdom Fungi",
          hoverContent: {
            title: "Kingdom Fungi",
            sections: [
              {
                heading: "Evolutionary Developments",
                items: ["Cell walls made of chitin"]
              },
              {
                heading: "Nutrition",
                items: ["Absorptive heterotrophs", "Often saprobes (eating decaying matter)"]
              },
              {
                heading: "Anatomy",
                items: ["Consists of hyphae (filaments)", "Mycelium (root-like mass)"]
              }
            ]
          },
          children: [
            {
              name: "Phylum Chytridiomycota",
              isTerminal: true,
              hoverContent: {
                title: "Phylum Chytridiomycota",
                sections: [
                  {
                    heading: "Characteristics",
                    items: ["Aquatic fungi", "Amphibian parasites"]
                  }
                ]
              }
            },
            {
              name: "Phylum Zygomycota",
              isTerminal: true,
              hoverContent: {
                title: "Phylum Zygomycota",
                sections: [
                  {
                    heading: "Characteristics",
                    items: ["Bread molds"]
                  }
                ]
              }
            },
            {
              name: "Phylum Glomeromycota",
              isTerminal: true,
              hoverContent: {
                title: "Phylum Glomeromycota",
                sections: [
                  {
                    heading: "Characteristics",
                    items: ["Tree root symbionts"]
                  }
                ]
              }
            },
            {
              name: "Phylum Ascomycota",
              isTerminal: true,
              hoverContent: {
                title: "Phylum Ascomycota",
                sections: [
                  {
                    heading: "Characteristics",
                    items: ["Sac fungi", "Includes truffles"]
                  }
                ]
              }
            },
            {
              name: "Phylum Basidiomycota",
              isTerminal: true,
              hoverContent: {
                title: "Phylum Basidiomycota",
                sections: [
                  {
                    heading: "Characteristics",
                    items: ["Club Fungi/Mushrooms"]
                  }
                ]
              }
            }
          ]
        },
        {
          name: "Kingdom Animalia",
          hoverContent: {
            title: "Kingdom Animalia",
            sections: [
              {
                heading: "Accumulated Eukarya Traits",
                items: ["Nucleus", "Mitochondria", "Multicellularity"]
              },
              {
                heading: "Unique Animal Traits",
                items: [
                  "Heterotrophic",
                  "No cell wall (flexible membrane)",
                  "Hox genes (determine body plan)"
                ]
              }
            ]
          },
          children: [
            {
              name: "Phylum Porifera (Sponges)",
              isTerminal: true,
              hoverContent: {
                title: "Phylum Porifera (Sponges)",
                sections: [
                  {
                    heading: "Characteristics",
                    items: [
                      "Asymmetrical",
                      "Sessile",
                      "Lack true tissues or a nervous system",
                      "Utilize filter feeding via choanocytes (collar cells)"
                    ]
                  }
                ]
              }
            },
            {
              name: "Phylum Cnidaria (Jellies, Corals, Anemones)",
              hoverContent: {
                title: "Phylum Cnidaria",
                sections: [
                  {
                    heading: "Evolutionary Development",
                    items: [
                      "Radial symmetry",
                      "Diploblastic (two germ layers: ectoderm/endoderm)",
                      "Nematocysts (stinging cells)"
                    ]
                  },
                  {
                    heading: "Accumulated Traits",
                    items: ["Multicellular", "No cell wall", "Hox genes"]
                  }
                ]
              },
                children: [
    {
      name: "Class Anthozoa (Corals)",
      isTerminal: true,
      hoverContent: {
        title: "Class Anthozoa (Corals)",
        sections: [
          {
            heading: "Accumulated Traits",
            items: ["Multicellular", "No cell wall", "Hox genes", "Radial symmetry", "Diploblastic", "Nematocysts"]
          },
          {
            heading: "Colonial Structure",
            items: [
              "Large corals (brain/elkhorn) are colonies of genetically identical polyps",
              "Each polyp in a colony is a clone of the original"
            ]
          },
          {
            heading: "Reproduction and Growth",
            items: [
              "Sexual: Broadcast spawning (synchronized gamete release)",
              "Development: Fertilized eggs → swimming larvae → settled polyp → calcium carbonate skeleton secretion",
              "Asexual: Clonal budding produces additional identical polyps, forming massive skeletal structures"
            ]
          },
          {
            heading: "Nutrition and Symbiosis",
            items: [
              "Predatory: Use mouths to consume small invertebrates/parasites",
              "Primary energy: Mutualistic relationship with Symbiodinium (zooxanthellae) dinoflagellates",
              "Dinoflagellates provide photosynthetic nutrients; polyps provide protected habitat"
            ]
          },
          {
            heading: "Coral Bleaching",
            items: [
              "Stress (high temperatures) causes expulsion of Symbiodinium",
              "Loss of dinoflagellates reveals white calcium carbonate skeleton",
              "Recovery possible if stress is brief; prolonged stress causes death",
              "Scientists measure 'degree heating weeks' to predict recovery likelihood",
              "Current research: Crossbreeding heat-tolerant fragments for resilient colonies"
            ]
          }
        ]
      }
    },
    {
      name: "Class Scyphozoa (True Jellyfish)",
      isTerminal: true,
      hoverContent: {
        title: "Class Scyphozoa (True Jellyfish)",
        sections: [
          {
            heading: "Accumulated Traits",
            items: ["Multicellular", "No cell wall", "Hox genes", "Radial symmetry", "Diploblastic", "Nematocysts"]
          },
          {
            heading: "Morphology",
            items: [
              "Name from 'scypho' (cup) + 'zoa' (animal)",
              "Cup-shaped medusa stage where they spend most of their lives"
            ]
          },
          {
            heading: "Feeding and Digestion",
            items: [
              "Use nematocysts on tentacles to sting, stun, and catch prey (zooplankton, small fish)",
              "Lack true gut; food pulled into central mouth",
              "Processed in 'proto-stomach' using enzymes",
              "Undigested waste expelled back through mouth"
            ]
          },
          {
            heading: "Life Cycle",
            items: [
              "Gonochoristic (separate sexes)",
              "Cycle: Gametes → Larva → Settled Polyp → Budding Medusa"
            ]
          },
          {
            heading: "Case Study",
            items: [
              "Upside-down Jellyfish (Cassiopea frondosa): Sits on seafloor with tentacles upward to catch falling plankton"
            ]
          }
        ]
      }
    },
    {
      name: "Class Cubozoa (Box Jellyfish)",
      isTerminal: true,
      hoverContent: {
        title: "Class Cubozoa (Box Jellyfish)",
        sections: [
          {
            heading: "Accumulated Traits",
            items: ["Multicellular", "No cell wall", "Hox genes", "Radial symmetry", "Diploblastic", "Nematocysts"]
          },
          {
            heading: "Unique Traits",
            items: [
              "Box-shaped body",
              "Typically smaller than Scyphozoans",
              "Possess extremely strong venom",
              "Complex eyes capable of seeing images and shadows",
              "Actively hunt prey (unlike simpler jellies)"
            ]
          }
        ]
      }
    },
    {
      name: "Class Hydrozoa (Hydroids)",
      isTerminal: true,
      hoverContent: {
        title: "Class Hydrozoa (Hydroids)",
        sections: [
          {
            heading: "Accumulated Traits",
            items: ["Multicellular", "No cell wall", "Hox genes", "Radial symmetry", "Diploblastic", "Nematocysts"]
          },
          {
            heading: "Overview",
            items: [
              "Group of 'water animals'",
              "Mostly marine organisms"
            ]
          },
          {
            heading: "Portuguese Man o' War",
            items: [
              "Passive organism using sail-like structure to float on wind and currents",
              "Tentacles can reach tens of meters in length"
            ]
          },
          {
            heading: "Siphonophores",
            items: [
              "Colonial hydrozoans with connected individuals (polyps and medusae)",
              "Form long chains",
              "Each individual has specialized duty: defense, reproduction, or food collection"
            ]
          }
        ]
      }
    }
  ]
},
            {
              name: "Bilateria",
              hoverContent: {
                title: "Bilateria",
                sections: [
                  {
                    heading: "Evolutionary Developments",
                    items: [
                      "Bilateral symmetry",
                      "Triploblastic (three germ layers)",
                      "Cephalization (concentration of nerves/sensory organs at the head)"
                    ]
                  },
                  {
                    heading: "Accumulated Traits",
                    items: [
                      "Multicellular",
                      "No cell wall",
                      "Hox genes",
                      "Bilateral symmetry",
                      "Triploblastic",
                      "Cephalization"
                    ]
                  }
                ]
              },
              children: [
                {
                  name: "Superphylum Lophotrochozoa (Protostomes)",
                  hoverContent: {
                    title: "Superphylum Lophotrochozoa",
                    sections: [
                      {
                        heading: "Development Type",
                        items: ["Protostomes (blastopore becomes the mouth)"]
                      },
                      {
                        heading: "Accumulated Traits",
                        items: ["Bilateral symmetry", "Triploblastic", "Cephalization", "Protostome development"]
                      }
                    ]
                  },
                  children: [
                    {
  name: "Phylum Ctenophora (Comb Jellies)",
  isTerminal: true,
  hoverContent: {
    title: "Phylum Ctenophora (Comb Jellies)",
    sections: [
      {
        heading: "Accumulated Traits",
        items: ["Bilateral symmetry", "Triploblastic", "Cephalization", "Protostome development"]
      },
      {
        heading: "Distinction from Jellyfish",
        items: [
          "Separate phylum from Cnidaria (jellies)",
          "Lack nematocysts (stinging cells)",
          "Use cilia for movement instead",
          "Use tentacles to grab prey (not sting)"
        ]
      },
      {
        heading: "Unique Traits",
        items: [
          "First group under Protostomia discussed",
          "Possess a true digestive tract with a separate mouth and anus (complete gut)",
          "Bioluminescence: Many species use it to communicate or attract prey in deep sea"
        ]
      }
    ]
  }
},
                    {
                      name: "Phylum Platyhelminthes (Flatworms)",
                      isTerminal: true,
                      hoverContent: {
                        title: "Phylum Platyhelminthes",
                        sections: [
                          {
                            heading: "Accumulated Traits",
                            items: ["Bilateral symmetry", "Triploblastic", "Cephalization", "Protostome development"]
                          },
                          {
                            heading: "Unique Traits",
                            items: ["Acoelomate (lost coelom secondarily)", "Unique regeneration via neoblasts"]
                          }
                        ]
                      }
                    },
                    {
                      name: "Phylum Rotifera",
                      isTerminal: true,
                      hoverContent: {
                        title: "Phylum Rotifera",
                        sections: [
                          {
                            heading: "Accumulated Traits",
                            items: ["Bilateral symmetry", "Triploblastic", "Cephalization", "Protostome development"]
                          },
                          {
                            heading: "Unique Traits",
                            items: ["Pseudo-coelom", "Corona (ciliated head)"]
                          }
                        ]
                      }
                    },
                    {
                      name: "Phylum Mollusca",
                      hoverContent: {
                        title: "Phylum Mollusca",
                        sections: [
                          {
                            heading: "Accumulated Traits",
                            items: ["Bilateral symmetry", "Triploblastic", "Cephalization", "Protostome development"]
                          },
                          {
                            heading: "Unique Traits",
                            items: ["Four components: Foot, Visceral Mass, Gills, Radula"]
                          }
                        ]
                      },
                      children: [
                        {
                          name: "Class Bivalvia",
                          isTerminal: true,
                          hoverContent: {
                            title: "Class Bivalvia",
                            sections: [
                              {
                                heading: "Accumulated Traits",
                                items: ["Bilateral symmetry", "Triploblastic", "Cephalization", "Protostome development", "Foot", "Visceral mass", "Gills", "Radula"]
                              },
                              {
                                heading: "Unique Traits",
                                items: ["Filter-feeding"]
                              }
                            ]
                          }
                        },
                        {
                          name: "Class Gastropoda",
                          isTerminal: true,
                          hoverContent: {
                            title: "Class Gastropoda",
                            sections: [
                              {
                                heading: "Accumulated Traits",
                                items: ["Bilateral symmetry", "Triploblastic", "Cephalization", "Protostome development", "Foot", "Visceral mass", "Gills", "Radula"]
                              },
                              {
                                heading: "Unique Traits",
                                items: ["Snails and slugs"]
                              }
                            ]
                          }
                        },
                        {
                          name: "Class Cephalopoda",
                          isTerminal: true,
                          hoverContent: {
                            title: "Class Cephalopoda",
                            sections: [
                              {
                                heading: "Accumulated Traits",
                                items: ["Bilateral symmetry", "Triploblastic", "Cephalization", "Protostome development", "Foot", "Visceral mass", "Gills", "Radula"]
                              },
                              {
                                heading: "Unique Traits",
                                items: [
                                  "Camouflage mastery via Chromatophores (color control)",
                                  "Iridophores/Leucophores (light reflection)",
                                  "Highly intelligent"
                                ]
                              }
                            ]
                          }
                        }
                      ]
                    },
                    {
                      name: "Phylum Annelida",
                      isTerminal: true,
                      hoverContent: {
                        title: "Phylum Annelida",
                        sections: [
                          {
                            heading: "Accumulated Traits",
                            items: ["Bilateral symmetry", "Triploblastic", "Cephalization", "Protostome development"]
                          },
                          {
                            heading: "Unique Traits",
                            items: ["Metameric segmentation (repeated organ sets)"]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  name: "Superphylum Ecdysozoa (Protostomes)",
                  hoverContent: {
                    title: "Superphylum Ecdysozoa",
                    sections: [
                      {
                        heading: "Defining Development",
                        items: ["Ecdysis (molting of a rigid exoskeleton) triggered by brain hormones"]
                      },
                      {
                        heading: "Development Type",
                        items: ["Protostomes (blastopore becomes the mouth)"]
                      },
                      {
                        heading: "Accumulated Traits",
                        items: ["Bilateral symmetry", "Triploblastic", "Cephalization", "Protostome development", "Ecdysis"]
                      }
                    ]
                  },
                  children: [
                    {
                      name: "Phylum Nematoda (Roundworms)",
                      isTerminal: true,
                      hoverContent: {
                        title: "Phylum Nematoda",
                        sections: [
                          {
                            heading: "Accumulated Traits",
                            items: ["Bilateral symmetry", "Triploblastic", "Cephalization", "Protostome development", "Ecdysis"]
                          },
                          {
                            heading: "Unique Traits",
                            items: ["Thread-like", "Eutely (constant cell number)", "High-pressure pseudocoelom"]
                          }
                        ]
                      }
                    },
                    {
                      name: "Phylum Arthropoda",
                      hoverContent: {
                        title: "Phylum Arthropoda",
                        sections: [
                          {
                            heading: "Evolutionary Developments",
                            items: [
                              "Tagmatization (fused functional regions: head, thorax, abdomen)",
                              "Jointed limbs",
                              "Complex vision (ommatidia in compound eyes)"
                            ]
                          },
                          {
                            heading: "Accumulated Traits",
                            items: ["Bilateral symmetry", "Triploblastic", "Cephalization", "Protostome development", "Ecdysis", "Tagmatization", "Jointed limbs"]
                          }
                        ]
                      },
                      children: [
                        {
                          name: "Subphylum Myriapoda (Centipedes and Millipedes)",
                          isTerminal: true,
                          hoverContent: {
                            title: "Subphylum Myriapoda",
                            sections: [
                              {
                                heading: "Accumulated Traits",
                                items: ["Bilateral symmetry", "Triploblastic", "Cephalization", "Protostome development", "Ecdysis", "Tagmatization", "Jointed limbs"]
                              },
                              {
                                heading: "Unique Traits",
                                items: ["Repugnatorial glands (defensive secretions)", "Centipedes and millipedes"]
                              }
                            ]
                          }
                        },
                        {
                          name: "Subphylum Chelicerata",
                          isTerminal: true,
                          hoverContent: {
                            title: "Subphylum Chelicerata",
                            sections: [
                              {
                                heading: "Accumulated Traits",
                                items: ["Bilateral symmetry", "Triploblastic", "Cephalization", "Protostome development", "Ecdysis", "Tagmatization", "Jointed limbs"]
                              },
                              {
                                heading: "Unique Traits",
                                items: ["Lacks antennae", "Possesses chelicerae (fangs/claws)"]
                              }
                            ]
                          }
                        },
                        {
                          name: "Subphylum Crustacea",
                          isTerminal: true,
                          hoverContent: {
                            title: "Subphylum Crustacea",
                            sections: [
                              {
                                heading: "Accumulated Traits",
                                items: ["Bilateral symmetry", "Triploblastic", "Cephalization", "Protostome development", "Ecdysis", "Tagmatization", "Jointed limbs"]
                              },
                              {
                                heading: "Unique Traits",
                                items: [
                                  "Two pairs of antennae",
                                  "Mandibles (crushing/breaking jaws for food processing)",
                                  "Nauplius larva stage"
                                ]
                              }
                            ]
                          }
                        },
                        {
                          name: "Subphylum Hexapoda (Insects)",
                          isTerminal: true,
                          hoverContent: {
                            title: "Subphylum Hexapoda",
                            sections: [
                              {
                                heading: "Accumulated Traits",
                                items: ["Bilateral symmetry", "Triploblastic", "Cephalization", "Protostome development", "Ecdysis", "Tagmatization", "Jointed limbs"]
                              },
                              {
                                heading: "Unique Traits",
                                items: [
                                  "Six legs",
                                  "Wings (evolved from thermoregulation structures)",
                                  "3 tagmata"
                                ]
                              }
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "Deuterostomia",
                  hoverContent: {
                    title: "Deuterostomia",
                    sections: [
                      {
                        heading: "Evolutionary Development",
                        items: ["Deuterostome development (blastopore becomes the anus)"]
                      },
                      {
                        heading: "Accumulated Traits",
                        items: ["Bilateral symmetry", "Triploblastic", "Cephalization", "Deuterostome development"]
                      }
                    ]
                  },
                  children: [
                    {
                      name: "Phylum Echinodermata",
                      hoverContent: {
                        title: "Phylum Echinodermata",
                        sections: [
                          {
                            heading: "Accumulated Traits",
                            items: ["Bilateral symmetry", "Triploblastic", "Cephalization (secondarily lost)", "Deuterostome development"]
                          },
                          {
                            heading: "Unique Traits",
                            items: [
                              "Pentaradial symmetry (multiples of five)",
                              "Water Vascular System (WVS) for movement/respiration",
                              "Cephalization secondarily lost"
                            ]
                          }
                        ]
                      },
                      children: [
                        {
                          name: "Class Asteroidea (Sea Stars)",
                          isTerminal: true,
                          hoverContent: {
                            title: "Class Asteroidea",
                            sections: [
                              {
                                heading: "Accumulated Traits",
                                items: ["Bilateral symmetry", "Triploblastic", "Cephalization (secondarily lost)", "Deuterostome development", "Pentaradial symmetry", "Water vascular system"]
                              },
                              {
                                heading: "Unique Traits",
                                items: ["Sea stars"]
                              }
                            ]
                          }
                        },
                        {
                          name: "Class Ophiuroidea (Brittle Stars)",
                          isTerminal: true,
                          hoverContent: {
                            title: "Class Ophiuroidea",
                            sections: [
                              {
                                heading: "Accumulated Traits",
                                items: ["Bilateral symmetry", "Triploblastic", "Cephalization (secondarily lost)", "Deuterostome development", "Pentaradial symmetry", "Water vascular system"]
                              },
                              {
                                heading: "Unique Traits",
                                items: ["Brittle stars"]
                              }
                            ]
                          }
                        },
                        {
                          name: "Class Echinoidea (Urchins/Sand Dollars)",
                          isTerminal: true,
                          hoverContent: {
                            title: "Class Echinoidea",
                            sections: [
                              {
                                heading: "Accumulated Traits",
                                items: ["Bilateral symmetry", "Triploblastic", "Cephalization (secondarily lost)", "Deuterostome development", "Pentaradial symmetry", "Water vascular system"]
                              },
                              {
                                heading: "Unique Traits",
                                items: ["Urchins and sand dollars"]
                              }
                            ]
                          }
                        },
                        {
                          name: "Class Crinoidea (Sea Lilies)",
                          isTerminal: true,
                          hoverContent: {
                            title: "Class Crinoidea",
                            sections: [
                              {
                                heading: "Accumulated Traits",
                                items: ["Bilateral symmetry", "Triploblastic", "Cephalization (secondarily lost)", "Deuterostome development", "Pentaradial symmetry", "Water vascular system"]
                              },
                              {
                                heading: "Unique Traits",
                                items: ["Sea lilies"]
                              }
                            ]
                          }
                        },
                        {
                          name: "Class Holothuroidea (Sea Cucumbers)",
                          isTerminal: true,
                          hoverContent: {
                            title: "Class Holothuroidea",
                            sections: [
                              {
                                heading: "Accumulated Traits",
                                items: ["Bilateral symmetry", "Triploblastic", "Cephalization (secondarily lost)", "Deuterostome development", "Pentaradial symmetry", "Water vascular system"]
                              },
                              {
                                heading: "Unique Traits",
                                items: ["Sea cucumbers"]
                              }
                            ]
                          }
                        }
                      ]
                    },
                    {
                      name: "Phylum Chordata",
                      hoverContent: {
                        title: "Phylum Chordata",
                        sections: [
                          {
                            heading: "Accumulated Traits",
                            items: ["Bilateral symmetry", "Triploblastic", "Cephalization", "Deuterostome development"]
                          },
                          {
                            heading: "Key Evolutionary Developments (The 5 Chordate Traits)",
                            items: [
                              "Notochord",
                              "Dorsal Hollow Nerve Cord",
                              "Pharyngeal Gill Slits",
                              "Post-anal Tail",
                              "Endostyle/Thyroid Gland"
                            ]
                          }
                        ]
                      },
                      children: [
                        {
                          name: "Subphylum Urochordata (Tunicates)",
                          isTerminal: true,
                          hoverContent: {
                            title: "Subphylum Urochordata",
                            sections: [
                              {
                                heading: "Accumulated Traits",
                                items: ["Notochord", "Dorsal hollow nerve cord", "Pharyngeal gill slits", "Post-anal tail", "Endostyle/thyroid gland"]
                              },
                              {
                                heading: "Unique Traits",
                                items: ["Tunicates"]
                              }
                            ]
                          }
                        },
                        {
                          name: "Subphylum Cephalochordata (Lancelets)",
                          isTerminal: true,
                          hoverContent: {
                            title: "Subphylum Cephalochordata",
                            sections: [
                              {
                                heading: "Accumulated Traits",
                                items: ["Notochord", "Dorsal hollow nerve cord", "Pharyngeal gill slits", "Post-anal tail", "Endostyle/thyroid gland"]
                              },
                              {
                                heading: "Unique Traits",
                                items: ["Lancelets"]
                              }
                            ]
                          }
                        },
                        {
                          name: "Subphylum Vertebrata",
                          hoverContent: {
                            title: "Subphylum Vertebrata",
                            sections: [
                              {
                                heading: "Evolutionary Development",
                                items: ["Development of a cranium (skull)", "Occurred approximately 540 million years ago"]
                              },
                              {
                                heading: "Accumulated Traits",
                                items: ["Notochord", "Dorsal hollow nerve cord", "Pharyngeal gill slits", "Post-anal tail", "Endostyle/thyroid gland", "Cranium"]
                              }
                            ]
                          },
                          children: [
                            {
                              name: "Class Myxini (Hagfishes)",
                              isTerminal: true,
                              hoverContent: {
                                title: "Class Myxini",
                                sections: [
                                  {
                                    heading: "Accumulated Traits",
                                    items: ["Notochord", "Dorsal hollow nerve cord", "Pharyngeal gill slits", "Post-anal tail", "Endostyle/thyroid gland", "Cranium"]
                                  },
                                  {
                                    heading: "Unique Traits",
                                    items: ["Hagfishes", "Jawless"]
                                  }
                                ]
                              }
                            },
                            {
                              name: "Class Petromyzontida (Lampreys)",
                              isTerminal: true,
                              hoverContent: {
                                title: "Class Petromyzontida",
                                sections: [
                                  {
                                    heading: "Accumulated Traits",
                                    items: ["Notochord", "Dorsal hollow nerve cord", "Pharyngeal gill slits", "Post-anal tail", "Endostyle/thyroid gland", "Cranium"]
                                  },
                                  {
                                    heading: "Unique Traits",
                                    items: ["Lampreys", "Jawless"]
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
