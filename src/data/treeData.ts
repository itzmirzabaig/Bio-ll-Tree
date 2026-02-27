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
            heading: "Anatomy",
            items: [
              "Nucleoid: loosely tangled single circular DNA strand",
              "Cytoplasm: fluid-filled interior",
              "Ribosomes: make proteins for DNA replication"
            ]
          },
          {
            heading: "Morphology (Body Plans)",
            items: [
              "Cocci: spherical-shaped",
              "Bacilli: rod-shaped",
              "Spirullae: spiral-shaped"
            ]
          },
          {
            heading: "Movement",
            items: [
              "Flagella: tail-like appendage used for swimming/pulling",
              "Cilia/Pelia: hair-like bristles that act like legs, pulling through liquid"
            ]
          },
          {
            heading: "Structural Trait",
            items: ["Possession of a peptidoglycan cell wall"]
          },
          {
            heading: "Gram Staining Classification",
            items: [
              "Gram-positive: thick peptidoglycan layer, absorbs crystal violet dye, appears purple",
              "Gram-negative: thin peptidoglycan layer, has outer membrane with porins for efficiency, appears pink"
            ]
          },
          {
            heading: "Ecological Roles",
            items: [
              "Includes nitrogen-fixers (Alpha-proteobacteria) vital for agriculture",
              "Decomposers"
            ]
          },
          {
            heading: "Pathogenic Examples",
            items: [
              "Bacillus anthracis: causes Anthrax (Gram-positive)",
              "Clostridium botulinum: causes Botulism, pH-sensitive (Gram-positive)"
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
                heading: "Accumulated Traits",
                items: [
                  "Prokaryotic (no true nucleus)",
                  "Nucleoid (circular DNA), Cytoplasm, Ribosomes",
                  "Peptidoglycan cell wall",
                  "Movement via Flagella and/or Cilia/Pelia"
                ]
              },
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
              },
              {
                heading: "Gram Staining",
                items: [
                  "Gram-positive members: thick peptidoglycan, absorbs crystal violet, appears purple (e.g., Bacillus anthracis — Anthrax; Clostridium botulinum — Botulism)",
                  "Gram-negative members: thin peptidoglycan, porins in outer membrane, appears pink (e.g., E. coli, Neisseria)"
                ]
              },
              {
                heading: "Movement",
                items: [
                  "Flagella (tail-like; swimming/pulling)",
                  "Cilia/Pelia (hair-like; pulling through liquid)"
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
                heading: "Accumulated Traits",
                items: [
                  "Prokaryotic (no true nucleus)",
                  "Nucleoid (circular DNA), Cytoplasm, Ribosomes",
                  "Peptidoglycan cell wall",
                  "Movement via Flagella and/or Cilia/Pelia"
                ]
              },
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
                  "Most abundant photosynthetic organisms on Earth (e.g., Prochlorococcus)",
                  "Can cause oxygen-depleting algal blooms"
                ]
              },
              {
                heading: "Movement",
                items: [
                  "Flagella (tail-like; swimming/pulling)",
                  "Cilia/Pelia (hair-like; pulling through liquid)"
                ]
              }
            ]
          }
        },
        {
          name: "Phylum Chlamydias",
          isTerminal: true,
          hoverContent: {
            title: "Phylum Chlamydias",
            sections: [
              {
                heading: "Accumulated Traits",
                items: [
                  "Prokaryotic (no true nucleus)",
                  "Nucleoid (circular DNA), Cytoplasm, Ribosomes",
                  "Peptidoglycan cell wall"
                ]
              },
              {
                heading: "Defining Trait",
                items: [
                  "All members are obligate intracellular parasites — must infect animal cells to survive",
                  "Cannot reproduce outside a host cell"
                ]
              },
              {
                heading: "Pathogenic Example",
                items: [
                  "Chlamydia trachomatis: can cause trachoma (leading infectious cause of blindness)"
                ]
              }
            ]
          }
        },
        {
          name: "Phylum Spirochetes",
          isTerminal: true,
          hoverContent: {
            title: "Phylum Spirochetes",
            sections: [
              {
                heading: "Accumulated Traits",
                items: [
                  "Prokaryotic (no true nucleus)",
                  "Nucleoid (circular DNA), Cytoplasm, Ribosomes",
                  "Peptidoglycan cell wall"
                ]
              },
              {
                heading: "Morphology",
                items: [
                  "Spirullae body plan: spiral-shaped ('spiral bristle')",
                  "Unique corkscrew motility via internal flagella (endoflagella)"
                ]
              },
              {
                heading: "Pathogenic Example",
                items: [
                  "Borrelia burgdorferi: causes Lyme disease",
                  "Transmitted by tick vectors; ticks use anti-coagulants to feed undetected"
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
            heading: "The Four Specialist Types",
            items: [
              "Thermophiles: rigid proteins to survive extreme heat",
              "Psychrophiles: antifreeze proteins for survival in extreme cold",
              "Piezophiles: compact amino acids for survival under high pressure",
              "Halophiles: osmoprotectants for survival in extreme salt concentrations"
            ]
          },
          {
            heading: "Scientific Utility",
            items: [
              "Enzymes used in PCR (polymerase chain reaction)",
              "Potential in biofuel production",
              "Bioremediation of radioactive waste"
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
              },
              {
                heading: "The Four Pillars of Animal Classification",
                items: [
                  "Body Symmetry: Asymmetry (Sponges), Radial (Cnidarians), Bilateral (associated with Cephalization)",
                  "Germ Layers: Diploblastic (Ectoderm + Endoderm) vs. Triploblastic (adds Mesoderm)",
                  "Body Cavity (Coelom): Acoelomate (Platyhelminthes), Pseudocoelomate (Nematodes/Rotifers), Eucoelomate (Mollusks/Humans)",
                  "Blastopore Development: Protostomes (mouth forms first) vs. Deuterostomes (anus forms first)"
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
                    heading: "Skeletal System",
                    items: [
                      "Hydrostatic skeleton: fluid-filled cavities controlled by longitudinal and circular muscles allow movement in dense water"
                    ]
                  },
                  {
                    heading: "Life Cycle",
                    items: [
                      "Alternates between Medusa (umbrella-shaped, mobile) and Polyp (stationary) phases"
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
                        items: ["Multicellular", "No cell wall", "Hox genes", "Radial symmetry", "Diploblastic", "Nematocysts", "Hydrostatic skeleton"]
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
                        items: ["Multicellular", "No cell wall", "Hox genes", "Radial symmetry", "Diploblastic", "Nematocysts", "Hydrostatic skeleton"]
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
                          "Upside-down Jellyfish (Cassiopea frondosa): sits on seafloor with tentacles pointing upward to passively catch falling plankton"
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
                        items: ["Multicellular", "No cell wall", "Hox genes", "Radial symmetry", "Diploblastic", "Nematocysts", "Hydrostatic skeleton"]
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
                        items: ["Multicellular", "No cell wall", "Hox genes", "Radial symmetry", "Diploblastic", "Nematocysts", "Hydrostatic skeleton"]
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
                              { heading: "Unique Traits", items: ["Sea stars"] }
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
                              { heading: "Unique Traits", items: ["Brittle stars"] }
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
                              { heading: "Unique Traits", items: ["Urchins and sand dollars"] }
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
                              { heading: "Unique Traits", items: ["Sea lilies"] }
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
                              { heading: "Unique Traits", items: ["Sea cucumbers"] }
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
                              { heading: "Unique Traits", items: ["Tunicates"] }
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
                              { heading: "Unique Traits", items: ["Lancelets"] }
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
                              name: "Infraphylum Agnatha (Jawless Vertebrates)",
                              hoverContent: {
                                title: "Infraphylum Agnatha (Jawless Vertebrates)",
                                sections: [
                                  {
                                    heading: "Defining Trait",
                                    items: ["Lack hinged jaws", "Most basal vertebrate lineage"]
                                  },
                                  {
                                    heading: "Accumulated Traits",
                                    items: ["Cranium", "Notochord", "Dorsal hollow nerve cord", "Pharyngeal gill slits", "Post-anal tail", "Endostyle/thyroid gland"]
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
                                      { heading: "Unique Traits", items: ["Hagfishes", "Jawless", "No true vertebrae"] }
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
                                      { heading: "Unique Traits", items: ["Lampreys", "Jawless", "Parasitic sucker mouth"] }
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              name: "Gnathostomes (Jawed Vertebrates)",
                              hoverContent: {
                                title: "Gnathostomes (Jawed Vertebrates)",
                                sections: [
                                  {
                                    heading: "Key Evolutionary Developments",
                                    items: [
                                      "Hinged jaws: evolved from the first pharyngeal gill slit",
                                      "Paired fins: pectoral and pelvic fins for enhanced mobility and maneuverability"
                                    ]
                                  },
                                  {
                                    heading: "Accumulated Traits",
                                    items: ["Cranium", "Notochord", "Dorsal hollow nerve cord", "Pharyngeal gill slits", "Post-anal tail", "Endostyle/thyroid gland", "Hinged jaws", "Paired fins"]
                                  }
                                ]
                              },
                              children: [
                                {
                                  name: "Class Chondrichthyes (Cartilaginous Fishes)",
                                  hoverContent: {
                                    title: "Class Chondrichthyes",
                                    sections: [
                                      {
                                        heading: "Accumulated Traits",
                                        items: ["Cranium", "Hinged jaws", "Paired fins", "Pharyngeal gill slits"]
                                      },
                                      {
                                        heading: "Defining Trait",
                                        items: ["Skeleton made entirely of cartilage (not bone)"]
                                      },
                                      {
                                        heading: "Sensory Systems",
                                        items: [
                                          "Lateral line: detects vibrations and pressure changes in water",
                                          "Chemoreception: highly sensitive smell for detecting chemical signals",
                                          "Electromagnetic sensing: snout receptors (ampullae of Lorenzini) detect electric fields of prey"
                                        ]
                                      }
                                    ]
                                  },
                                  children: [
                                    {
                                      name: "Subclass Elasmobranchii (Sharks and Rays)",
                                      isTerminal: true,
                                      hoverContent: {
                                        title: "Subclass Elasmobranchii",
                                        sections: [
                                          {
                                            heading: "Accumulated Traits",
                                            items: ["Cartilaginous skeleton", "Hinged jaws", "Paired fins", "Lateral line", "Chemoreception", "Electromagnetic sensing"]
                                          },
                                          {
                                            heading: "Unique Traits",
                                            items: [
                                              "Sharks and rays",
                                              "Multiple rows of replaceable teeth",
                                              "Heterocercal tail (asymmetrical lobes)"
                                            ]
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      name: "Subclass Holocephali (Chimeras/Ratfish)",
                                      isTerminal: true,
                                      hoverContent: {
                                        title: "Subclass Holocephali",
                                        sections: [
                                          {
                                            heading: "Accumulated Traits",
                                            items: ["Cartilaginous skeleton", "Hinged jaws", "Paired fins", "Lateral line", "Chemoreception", "Electromagnetic sensing"]
                                          },
                                          {
                                            heading: "Unique Traits",
                                            items: [
                                              "Diphycercal tail (equal upper and lower lobes)",
                                              "Grinding plates instead of true teeth",
                                              "Also known as Ratfish or Ghost Sharks"
                                            ]
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                },
                                {
                                  name: "Osteichthyes (Bony Fishes)",
                                  hoverContent: {
                                    title: "Osteichthyes (Bony Fishes)",
                                    sections: [
                                      {
                                        heading: "Accumulated Traits",
                                        items: ["Cranium", "Hinged jaws", "Paired fins", "Pharyngeal gill slits"]
                                      },
                                      {
                                        heading: "Key Innovations",
                                        items: [
                                          "Ossification: true mineralized bone replaces cartilage",
                                          "Overlapping scales for flexible armor",
                                          "Mucus layer: reduces drag through water and blocks parasites",
                                          "Swim bladder: gas-filled organ for precise buoyancy control"
                                        ]
                                      }
                                    ]
                                  },
                                  children: [
                                    {
                                      name: "Class Actinopterygii (Ray-finned Fishes)",
                                      isTerminal: true,
                                      hoverContent: {
                                        title: "Class Actinopterygii",
                                        sections: [
                                          {
                                            heading: "Accumulated Traits",
                                            items: ["True bone (ossification)", "Overlapping scales", "Mucus layer", "Swim bladder", "Hinged jaws", "Paired fins"]
                                          },
                                          {
                                            heading: "Unique Traits",
                                            items: [
                                              "Fins supported by bony rays (spines)",
                                              "Most diverse vertebrate group on Earth",
                                              "Includes salmon, tuna, goldfish, seahorses"
                                            ]
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      name: "Class Sarcopterygii (Lobe-finned Fishes)",
                                      hoverContent: {
                                        title: "Class Sarcopterygii",
                                        sections: [
                                          {
                                            heading: "Accumulated Traits",
                                            items: ["True bone (ossification)", "Overlapping scales", "Mucus layer", "Swim bladder", "Hinged jaws", "Paired fins"]
                                          },
                                          {
                                            heading: "Key Innovation",
                                            items: [
                                              "Lobe-fins: fleshy, muscular fins with internal bone structure homologous to tetrapod limbs (proto-wrists)",
                                              "Ancestral lineage that gave rise to all land vertebrates"
                                            ]
                                          }
                                        ]
                                      },
                                      children: [
                                        {
                                          name: "Coelacanths",
                                          isTerminal: true,
                                          hoverContent: {
                                            title: "Coelacanths",
                                            sections: [
                                              {
                                                heading: "Accumulated Traits",
                                                items: ["Lobe-fins", "True bone", "Swim bladder", "Hinged jaws"]
                                              },
                                              {
                                                heading: "Unique Traits",
                                                items: [
                                                  "Living fossil: virtually unchanged for 400 million years",
                                                  "Deep-water marine habitat",
                                                  "Thought extinct until rediscovery in 1938"
                                                ]
                                              }
                                            ]
                                          }
                                        },
                                        {
                                          name: "Lungfish",
                                          isTerminal: true,
                                          hoverContent: {
                                            title: "Lungfish",
                                            sections: [
                                              {
                                                heading: "Accumulated Traits",
                                                items: ["Lobe-fins", "True bone", "Hinged jaws"]
                                              },
                                              {
                                                heading: "Unique Traits",
                                                items: [
                                                  "Possess both gills (for aquatic breathing) and lungs (for air breathing)",
                                                  "Estivation: burrow into mud during droughts; digest tail muscle as energy source until water returns"
                                                ]
                                              }
                                            ]
                                          }
                                        },
                                        {
                                          name: "Tiktaalik (Transitional Form)",
                                          hoverContent: {
                                            title: "Tiktaalik (Transitional Form)",
                                            sections: [
                                              {
                                                heading: "Significance",
                                                items: ["Key transitional fossil linking lobe-finned fish to the first tetrapods (~375 million years ago)"]
                                              },
                                              {
                                                heading: "Fish-like Traits (Retained)",
                                                items: ["Scales", "Fins", "Gills"]
                                              },
                                              {
                                                heading: "Land-like Traits (Derived)",
                                                items: [
                                                  "Flat, crocodilian-like head",
                                                  "Expanded, weight-bearing ribs supporting primitive lungs",
                                                  "Movable neck joint (first vertebrate with a neck)",
                                                  "Fin-limbs with wrist-like bones capable of pushing up"
                                                ]
                                              }
                                            ]
                                          },
                                          children: [
                                            {
                                              name: "Tetrapoda (Four-limbed Vertebrates)",
                                              hoverContent: {
                                                title: "Tetrapoda",
                                                sections: [
                                                  {
                                                    heading: "Key Evolutionary Developments",
                                                    items: [
                                                      "Four limbs with digits (fingers/toes)",
                                                      "Movable neck joint",
                                                      "Weight-bearing skeleton for terrestrial locomotion"
                                                    ]
                                                  },
                                                  {
                                                    heading: "Accumulated Traits",
                                                    items: ["Cranium", "Hinged jaws", "Paired fins → Four limbs with digits", "Neck joint", "Lobe-fin bone structure"]
                                                  }
                                                ]
                                              },
                                              children: [
                                                {
                                                  name: "Class Amphibia",
                                                  hoverContent: {
                                                    title: "Class Amphibia",
                                                    sections: [
                                                      {
                                                        heading: "Accumulated Traits",
                                                        items: ["Four limbs with digits", "Neck joint", "Cranium", "Deuterostome development", "Bilateral symmetry"]
                                                      },
                                                      {
                                                        heading: "Defining Trait",
                                                        items: [
                                                          "Cutaneous respiration: breathe through moist, porous skin (must remain moist)",
                                                          "Anamniotic eggs (must be laid in or near water)",
                                                          "Ectothermic (cold-blooded)"
                                                        ]
                                                      }
                                                    ]
                                                  },
                                                  children: [
                                                    {
                                                      name: "Order Urodela (Salamanders)",
                                                      isTerminal: true,
                                                      hoverContent: {
                                                        title: "Order Urodela",
                                                        sections: [
                                                          {
                                                            heading: "Accumulated Traits",
                                                            items: ["Cutaneous respiration", "Four limbs", "Anamniotic egg", "Ectothermy"]
                                                          },
                                                          {
                                                            heading: "Unique Traits",
                                                            items: ["Retain tail through adulthood", "Some are fully aquatic, some fully terrestrial", "Includes Axolotls (neotenic — retain larval features into adulthood)"]
                                                          }
                                                        ]
                                                      }
                                                    },
                                                    {
                                                      name: "Order Anura (Frogs and Toads)",
                                                      isTerminal: true,
                                                      hoverContent: {
                                                        title: "Order Anura",
                                                        sections: [
                                                          {
                                                            heading: "Accumulated Traits",
                                                            items: ["Cutaneous respiration", "Four limbs", "Anamniotic egg", "Ectothermy"]
                                                          },
                                                          {
                                                            heading: "Unique Traits",
                                                            items: ["No tail as adults", "Metamorphosis from aquatic tadpole to terrestrial adult", "Most diverse amphibian order"]
                                                          }
                                                        ]
                                                      }
                                                    },
                                                    {
                                                      name: "Order Gymnophiona (Caecilians)",
                                                      isTerminal: true,
                                                      hoverContent: {
                                                        title: "Order Gymnophiona",
                                                        sections: [
                                                          {
                                                            heading: "Accumulated Traits",
                                                            items: ["Cutaneous respiration", "Anamniotic egg", "Ectothermy"]
                                                          },
                                                          {
                                                            heading: "Unique Traits",
                                                            items: [
                                                              "'Naked snake' (gymnos = naked, ophis = snake)",
                                                              "Legless amphibians (limbs secondarily lost)",
                                                              "Blind and burrowing",
                                                              "Mostly tropical, soil-dwelling"
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    }
                                                  ]
                                                },
                                                {
                                                  name: "Clade Amniota",
                                                  hoverContent: {
                                                    title: "Clade Amniota",
                                                    sections: [
                                                      {
                                                        heading: "Key Innovation: The Amniotic Egg",
                                                        items: [
                                                          "Yolk sac: stores nutrients for developing embryo",
                                                          "Amnion: fluid-filled membrane that directly encases and protects the embryo",
                                                          "Chorion: outermost membrane; facilitates gas exchange (respiration)",
                                                          "Allantois: stores metabolic waste and assists in gas exchange"
                                                        ]
                                                      },
                                                      {
                                                        heading: "Significance",
                                                        items: ["Freed vertebrates from dependence on water for reproduction", "Enabled full terrestrial colonization"]
                                                      },
                                                      {
                                                        heading: "Accumulated Traits",
                                                        items: ["Four limbs with digits", "Neck joint", "Cranium", "Hinged jaws", "Amniotic egg"]
                                                      }
                                                    ]
                                                  },
                                                  children: [
                                                    {
                                                      name: "Sauropsida (Reptiles and Birds)",
                                                      hoverContent: {
                                                        title: "Sauropsida",
                                                        sections: [
                                                          {
                                                            heading: "Accumulated Traits",
                                                            items: ["Amniotic egg", "Four limbs", "Cranium", "Hinged jaws", "Bilateral symmetry", "Deuterostome development"]
                                                          },
                                                          {
                                                            heading: "Shared Reptile Traits",
                                                            items: [
                                                              "Keratinized scales: waterproof, reduce water loss on land",
                                                              "Ectothermy: body temperature regulated by external environment",
                                                              "Brumation: metabolic slowing (analogous to mammalian hibernation) in response to cold"
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      children: [
                                                        {
                                                          name: "Anapsida",
                                                          hoverContent: {
                                                            title: "Anapsida",
                                                            sections: [
                                                              {
                                                                heading: "Defining Trait",
                                                                items: ["Skull with no temporal fenestrae (openings behind the eye socket)"]
                                                              }
                                                            ]
                                                          },
                                                          children: [
                                                            {
                                                              name: "Order Testudines (Turtles and Tortoises)",
                                                              hoverContent: {
                                                                title: "Order Testudines",
                                                                sections: [
                                                                  {
                                                                    heading: "Accumulated Traits",
                                                                    items: ["Amniotic egg", "Keratinized scales", "Ectothermy", "Brumation", "Cranium"]
                                                                  },
                                                                  {
                                                                    heading: "Unique Traits",
                                                                    items: [
                                                                      "Shell fused to spine and ribs (cannot be removed)",
                                                                      "Shell made of scutes (keratinized plates)"
                                                                    ]
                                                                  }
                                                                ]
                                                              },
                                                              children: [
                                                                {
                                                                  name: "Suborder Pleurodira (Side-necked Turtles)",
                                                                  isTerminal: true,
                                                                  hoverContent: {
                                                                    title: "Suborder Pleurodira",
                                                                    sections: [
                                                                      {
                                                                        heading: "Accumulated Traits",
                                                                        items: ["Shell", "Amniotic egg", "Keratinized scales", "Ectothermy"]
                                                                      },
                                                                      {
                                                                        heading: "Unique Traits",
                                                                        items: ["Retract neck sideways (horizontally) into shell", "Primarily freshwater, found in Southern Hemisphere"]
                                                                      }
                                                                    ]
                                                                  }
                                                                },
                                                                {
                                                                  name: "Suborder Cryptodira (Hidden-necked Turtles)",
                                                                  isTerminal: true,
                                                                  hoverContent: {
                                                                    title: "Suborder Cryptodira",
                                                                    sections: [
                                                                      {
                                                                        heading: "Accumulated Traits",
                                                                        items: ["Shell", "Amniotic egg", "Keratinized scales", "Ectothermy"]
                                                                      },
                                                                      {
                                                                        heading: "Unique Traits",
                                                                        items: ["Retract neck vertically (straight back) into shell", "Includes sea turtles, tortoises, snapping turtles", "Most diverse turtle group"]
                                                                      }
                                                                    ]
                                                                  }
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        },
                                                        {
                                                          name: "Diapsida",
                                                          hoverContent: {
                                                            title: "Diapsida",
                                                            sections: [
                                                              {
                                                                heading: "Defining Trait",
                                                                items: ["Skull with two temporal fenestrae (openings) behind the eye socket — lighter skull with stronger jaw muscles"]
                                                              },
                                                              {
                                                                heading: "Includes",
                                                                items: ["Dinosaurs (extinct and living as birds)", "Crocodilians", "Squamates (lizards and snakes)"]
                                                              }
                                                            ]
                                                          },
                                                          children: [
                                                            {
                                                              name: "Superorder Dinosauria (Dinosaurs)",
                                                              hoverContent: {
                                                                title: "Superorder Dinosauria",
                                                                sections: [
                                                                  {
                                                                    heading: "Accumulated Traits",
                                                                    items: ["Amniotic egg", "Keratinized scales", "Ectothermy (or Endothermy in some)", "Diapsid skull", "Cranium"]
                                                                  },
                                                                  {
                                                                    heading: "Classification by Hip Structure",
                                                                    items: [
                                                                      "Saurischia (Lizard-hipped): pubis bone points forward; includes Theropods (e.g., T. rex, Velociraptor) and Sauropods; ancestral lineage that led to birds",
                                                                      "Ornithischia (Bird-hipped): pubis bone points backward; includes Triceratops, Stegosaurus, Ankylosaurs, Hadrosaurs"
                                                                    ]
                                                                  }
                                                                ]
                                                              },
                                                              children: [
                                                                {
                                                                  name: "Order Saurischia (Lizard-hipped)",
                                                                  hoverContent: {
                                                                    title: "Order Saurischia",
                                                                    sections: [
                                                                      {
                                                                        heading: "Unique Traits",
                                                                        items: [
                                                                          "Pubis bone points forward (lizard-like hip)",
                                                                          "Includes carnivorous Theropods (T. rex, Velociraptor, Spinosaurus) and giant Sauropods (Brachiosaurus, Apatosaurus)",
                                                                          "Theropod lineage directly ancestral to modern birds"
                                                                        ]
                                                                      }
                                                                    ]
                                                                  },
                                                                  children: [
                                                                    {
                                                                      name: "Class Aves (Birds)",
                                                                      isTerminal: true,
                                                                      hoverContent: {
                                                                        title: "Class Aves (Birds)",
                                                                        sections: [
                                                                          {
                                                                            heading: "Accumulated Traits",
                                                                            items: ["Amniotic egg", "Diapsid skull", "Saurischian hip", "Cranium", "Hinged jaws (modified as beak)"]
                                                                          },
                                                                          {
                                                                            heading: "Unique Derived Traits",
                                                                            items: [
                                                                              "Feathers (modified scales)",
                                                                              "Endothermy (warm-blooded)",
                                                                              "Hollow bones for reduced weight",
                                                                              "Keeled sternum for flight muscle attachment",
                                                                              "Toothless beak"
                                                                            ]
                                                                          }
                                                                        ]
                                                                      }
                                                                    },
                                                                    {
                                                                      name: "Order Ornithischia (Bird-hipped Dinosaurs)",
                                                                      isTerminal: true,
                                                                      hoverContent: {
                                                                        title: "Order Ornithischia",
                                                                        sections: [
                                                                          {
                                                                            heading: "Unique Traits",
                                                                            items: [
                                                                              "Pubis bone points backward (bird-like hip) — did NOT give rise to birds despite the name",
                                                                              "All herbivorous",
                                                                              "Includes: Triceratops, Stegosaurus, Ankylosaurus, Iguanodon, Hadrosaurs (duck-billed)"
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
                                                              name: "Order Crocodilia (Crocodilians)",
                                                              isTerminal: true,
                                                              hoverContent: {
                                                                title: "Order Crocodilia",
                                                                sections: [
                                                                  {
                                                                    heading: "Accumulated Traits",
                                                                    items: ["Amniotic egg", "Keratinized scales", "Ectothermy", "Diapsid skull", "Cranium"]
                                                                  },
                                                                  {
                                                                    heading: "Unique Traits",
                                                                    items: [
                                                                      "Most closely related to birds among living reptiles",
                                                                      "Four-chambered heart (convergent with birds and mammals)",
                                                                      "Includes crocodiles, alligators, gharials, caimans"
                                                                    ]
                                                                  }
                                                                ]
                                                              }
                                                            },
                                                            {
                                                              name: "Order Squamata (Lizards and Snakes)",
                                                              isTerminal: true,
                                                              hoverContent: {
                                                                title: "Order Squamata",
                                                                sections: [
                                                                  {
                                                                    heading: "Accumulated Traits",
                                                                    items: ["Amniotic egg", "Keratinized scales", "Ectothermy", "Diapsid skull", "Cranium"]
                                                                  },
                                                                  {
                                                                    heading: "Unique Traits",
                                                                    items: [
                                                                      "Largest reptile order",
                                                                      "Kinetic skull (loosely connected bones for wide gape)",
                                                                      "Includes lizards, snakes, and worm lizards (amphisbaenians)"
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
                                                      name: "Synapsida (Mammal-line Amniotes)",
                                                      hoverContent: {
                                                        title: "Synapsida",
                                                        sections: [
                                                          {
                                                            heading: "Defining Trait",
                                                            items: [
                                                              "Skull with one temporal fenestra behind the eye socket",
                                                              "Diverged from Sauropsids approximately 300 million years ago"
                                                            ]
                                                          },
                                                          {
                                                            heading: "Accumulated Traits",
                                                            items: ["Amniotic egg", "Four limbs with digits", "Cranium", "Hinged jaws", "Bilateral symmetry"]
                                                          }
                                                        ]
                                                      },
                                                      children: [
                                                        {
                                                          name: "Class Mammalia",
                                                          hoverContent: {
                                                            title: "Class Mammalia",
                                                            sections: [
                                                              {
                                                                heading: "Accumulated Traits",
                                                                items: ["Amniotic egg (modified in most)", "Four limbs with digits", "Cranium", "Hinged jaws", "Bilateral symmetry", "Deuterostome development"]
                                                              },
                                                              {
                                                                heading: "Defining Mammalian Traits",
                                                                items: [
                                                                  "Mammary glands: produce milk for offspring nourishment",
                                                                  "Endothermy: internally regulated body temperature",
                                                                  "Hair: insulation, whiskers for mechanoreception, parasite deterrence"
                                                                ]
                                                              },
                                                              {
                                                                heading: "Secretory Glands",
                                                                items: [
                                                                  "Sebaceous glands: produce sebum for skin/fur water resistance",
                                                                  "Sweat glands: evaporative cooling for thermoregulation",
                                                                  "Apocrine glands: produce pheromones (intraspecific signals) and kairomones (interspecific signals)"
                                                                ]
                                                              }
                                                            ]
                                                          },
                                                          children: [
                                                            {
                                                              name: "Subclass Monotremata (Monotremes)",
                                                              isTerminal: true,
                                                              hoverContent: {
                                                                title: "Subclass Monotremata",
                                                                sections: [
                                                                  {
                                                                    heading: "Accumulated Traits",
                                                                    items: ["Mammary glands", "Endothermy", "Hair", "Four limbs", "Cranium"]
                                                                  },
                                                                  {
                                                                    heading: "Unique Traits",
                                                                    items: [
                                                                      "Only egg-laying mammals (retain amniotic egg)",
                                                                      "No nipples — milk secreted through skin patches",
                                                                      "Includes Platypus and Echidnas",
                                                                      "Platypus has electroreceptors in bill for detecting prey"
                                                                    ]
                                                                  }
                                                                ]
                                                              }
                                                            },
                                                            {
                                                              name: "Subclass Marsupialia (Marsupials)",
                                                              isTerminal: true,
                                                              hoverContent: {
                                                                title: "Subclass Marsupialia",
                                                                sections: [
                                                                  {
                                                                    heading: "Accumulated Traits",
                                                                    items: ["Mammary glands", "Endothermy", "Hair", "Four limbs", "Cranium"]
                                                                  },
                                                                  {
                                                                    heading: "Unique Traits",
                                                                    items: [
                                                                      "Brief gestation; young born highly altricial (undeveloped)",
                                                                      "Continued development in external pouch (marsupium)",
                                                                      "Includes kangaroos, opossums, koalas, wombats",
                                                                      "Dominant mammal group in Australia and South America"
                                                                    ]
                                                                  }
                                                                ]
                                                              }
                                                            },
                                                            {
                                                              name: "Infraclass Eutheria (Placental Mammals)",
                                                              hoverContent: {
                                                                title: "Infraclass Eutheria (Placental Mammals)",
                                                                sections: [
                                                                  {
                                                                    heading: "Accumulated Traits",
                                                                    items: ["Mammary glands", "Endothermy", "Hair", "Four limbs", "Cranium"]
                                                                  },
                                                                  {
                                                                    heading: "Defining Trait",
                                                                    items: [
                                                                      "Chorioallantoic placenta: sustains embryo via maternal blood supply for extended gestation",
                                                                      "Young born at more advanced developmental stage than marsupials"
                                                                    ]
                                                                  }
                                                                ]
                                                              },
                                                              children: [
                                                                {
                                                                  name: "Magnorder Afrotheria",
                                                                  hoverContent: {
                                                                    title: "Magnorder Afrotheria",
                                                                    sections: [
                                                                      {
                                                                        heading: "Overview",
                                                                        items: [
                                                                          "Originated in Africa; oldest eutherian lineage",
                                                                          "Includes elephants, hyraxes, manatees, aardvarks, tenrecs, golden moles, elephant shrews"
                                                                        ]
                                                                      },
                                                                      {
                                                                        heading: "Case Study: Golden Moles",
                                                                        items: [
                                                                          "Blind and nocturnal",
                                                                          "Amplify and detect seismic vibrations through sand to locate prey and navigate"
                                                                        ]
                                                                      }
                                                                    ]
                                                                  },
                                                                  children: [
                                                                    {
                                                                      name: "Order Proboscidea (Elephants)",
                                                                      isTerminal: true,
                                                                      hoverContent: {
                                                                        title: "Order Proboscidea",
                                                                        sections: [
                                                                          { heading: "Unique Traits", items: ["Prehensile trunk (elongated nose and upper lip)", "Largest living land animals", "African and Asian species"] }
                                                                        ]
                                                                      }
                                                                    },
                                                                    {
                                                                      name: "Order Sirenia (Manatees and Dugongs)",
                                                                      isTerminal: true,
                                                                      hoverContent: {
                                                                        title: "Order Sirenia",
                                                                        sections: [
                                                                          { heading: "Unique Traits", items: ["Fully aquatic herbivores", "Paddle-like forelimbs; no hind limbs", "Closest relatives to elephants"] }
                                                                        ]
                                                                      }
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  name: "Magnorder Xenarthra",
                                                                  hoverContent: {
                                                                    title: "Magnorder Xenarthra",
                                                                    sections: [
                                                                      {
                                                                        heading: "Defining Trait",
                                                                        items: [
                                                                          "'Strange joints' (xenarthra = strange joint): extra articulation points (xenarthrous processes) in lower vertebrae for reinforcement",
                                                                          "Includes sloths, armadillos, and anteaters"
                                                                        ]
                                                                      }
                                                                    ]
                                                                  },
                                                                  children: [
                                                                    {
                                                                      name: "Order Pilosa (Sloths and Anteaters)",
                                                                      isTerminal: true,
                                                                      hoverContent: {
                                                                        title: "Order Pilosa",
                                                                        sections: [
                                                                          { heading: "Unique Traits", items: ["Sloths: extremely low metabolic rate; algae grows in fur for camouflage", "Anteaters: elongated snout, no teeth, sticky tongue for capturing insects"] }
                                                                        ]
                                                                      }
                                                                    },
                                                                    {
                                                                      name: "Order Cingulata (Armadillos)",
                                                                      isTerminal: true,
                                                                      hoverContent: {
                                                                        title: "Order Cingulata",
                                                                        sections: [
                                                                          { heading: "Unique Traits", items: ["Bony armor (osteoderms) covered by keratinized scutes", "Only mammals with true bony external armor"] }
                                                                        ]
                                                                      }
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  name: "Magnorder Laurasiatheria",
                                                                  hoverContent: {
                                                                    title: "Magnorder Laurasiatheria",
                                                                    sections: [
                                                                      {
                                                                        heading: "Overview",
                                                                        items: [
                                                                          "Originated on the supercontinent Laurasia",
                                                                          "Massive and diverse group including bats, carnivores, ungulates, and whales"
                                                                        ]
                                                                      },
                                                                      {
                                                                        heading: "USVI Relevance",
                                                                        items: ["Bats are the only native land mammals in the US Virgin Islands"]
                                                                      }
                                                                    ]
                                                                  },
                                                                  children: [
                                                                    {
                                                                      name: "Order Chiroptera (Bats)",
                                                                      isTerminal: true,
                                                                      hoverContent: {
                                                                        title: "Order Chiroptera",
                                                                        sections: [
                                                                          {
                                                                            heading: "Unique Traits",
                                                                            items: [
                                                                              "Only mammals capable of true powered flight",
                                                                              "Wing (patagium) is a membrane stretched between elongated finger bones",
                                                                              "Echolocation: emit high-frequency sound pulses; interpret returning echoes to navigate and hunt",
                                                                              "Only native land mammals in the USVI"
                                                                            ]
                                                                          }
                                                                        ]
                                                                      }
                                                                    },
                                                                    {
                                                                      name: "Order Carnivora",
                                                                      isTerminal: true,
                                                                      hoverContent: {
                                                                        title: "Order Carnivora",
                                                                        sections: [
                                                                          { heading: "Unique Traits", items: ["Specialized carnassial teeth for shearing meat", "Includes cats, dogs, bears, seals, sea lions, otters"] }
                                                                        ]
                                                                      }
                                                                    },
                                                                    {
                                                                      name: "Order Cetacea (Whales and Dolphins)",
                                                                      isTerminal: true,
                                                                      hoverContent: {
                                                                        title: "Order Cetacea",
                                                                        sections: [
                                                                          { heading: "Unique Traits", items: ["Fully aquatic; descended from terrestrial artiodactyls", "Forelimbs modified into flippers; hind limbs vestigial", "Echolocation in toothed whales (Odontoceti)"] }
                                                                        ]
                                                                      }
                                                                    }
                                                                  ]
                                                                },
                                                                {
                                                                  name: "Magnorder Euarchontoglires",
                                                                  hoverContent: {
                                                                    title: "Magnorder Euarchontoglires",
                                                                    sections: [
                                                                      {
                                                                        heading: "Overview",
                                                                        items: ["Includes rodents, rabbits, tree shrews, colugos, and primates"]
                                                                      }
                                                                    ]
                                                                  },
                                                                  children: [
                                                                    {
                                                                      name: "Order Rodentia",
                                                                      isTerminal: true,
                                                                      hoverContent: {
                                                                        title: "Order Rodentia",
                                                                        sections: [
                                                                          { heading: "Unique Traits", items: ["Largest mammalian order by species count", "Ever-growing incisors (must constantly gnaw)", "Includes mice, rats, squirrels, beavers, porcupines"] }
                                                                        ]
                                                                      }
                                                                    },
                                                                    {
                                                                      name: "Order Primates",
                                                                      hoverContent: {
                                                                        title: "Order Primates",
                                                                        sections: [
                                                                          {
                                                                            heading: "Defining Traits",
                                                                            items: [
                                                                              "Grasping hands and feet with opposable thumbs",
                                                                              "Forward-facing eyes for binocular (stereoscopic) depth perception",
                                                                              "Large brain-to-body size ratio",
                                                                              "Nails instead of claws (in most)"
                                                                            ]
                                                                          }
                                                                        ]
                                                                      },
                                                                      children: [
                                                                        {
                                                                          name: "Strepsirrhini (Lemurs, Lorises, and Galagos)",
                                                                          isTerminal: true,
                                                                          hoverContent: {
                                                                            title: "Strepsirrhini",
                                                                            sections: [
                                                                              {
                                                                                heading: "Unique Traits",
                                                                                items: [
                                                                                  "Moist rhinarium (wet nose) for enhanced smell",
                                                                                  "Tooth comb (procumbent incisors) for grooming",
                                                                                  "Includes Lemurs (Madagascar), Lorises (Asia), Galagos (Africa)"
                                                                                ]
                                                                              }
                                                                            ]
                                                                          }
                                                                        },
                                                                        {
                                                                          name: "Tarsiiformes (Tarsiers)",
                                                                          isTerminal: true,
                                                                          hoverContent: {
                                                                            title: "Tarsiiformes",
                                                                            sections: [
                                                                              {
                                                                                heading: "Unique Traits",
                                                                                items: [
                                                                                  "Enormous eyes fixed in skull (cannot rotate); must rotate entire head",
                                                                                  "Elongated tarsal (ankle) bones for leaping",
                                                                                  "Fully carnivorous primates",
                                                                                  "Found in Southeast Asia"
                                                                                ]
                                                                              }
                                                                            ]
                                                                          }
                                                                        },
                                                                        {
                                                                          name: "Platyrrhini (New World Monkeys)",
                                                                          isTerminal: true,
                                                                          hoverContent: {
                                                                            title: "Platyrrhini (New World Monkeys)",
                                                                            sections: [
                                                                              {
                                                                                heading: "Unique Traits",
                                                                                items: [
                                                                                  "Broad, flat nose with sideways-facing nostrils",
                                                                                  "Prehensile tail: fifth limb used for gripping branches",
                                                                                  "Found exclusively in Central and South America",
                                                                                  "Includes howler monkeys, spider monkeys, capuchins, marmosets"
                                                                                ]
                                                                              }
                                                                            ]
                                                                          }
                                                                        },
                                                                        {
                                                                          name: "Catarrhini (Old World Monkeys and Apes)",
                                                                          hoverContent: {
                                                                            title: "Catarrhini",
                                                                            sections: [
                                                                              {
                                                                                heading: "Defining Traits",
                                                                                items: [
                                                                                  "Narrow, downward-facing nostrils",
                                                                                  "No prehensile tail (tails non-grasping or absent)",
                                                                                  "Found in Africa and Asia"
                                                                                ]
                                                                              }
                                                                            ]
                                                                          },
                                                                          children: [
                                                                            {
                                                                              name: "Family Cercopithecidae (Old World Monkeys)",
                                                                              isTerminal: true,
                                                                              hoverContent: {
                                                                                title: "Family Cercopithecidae",
                                                                                sections: [
                                                                                  {
                                                                                    heading: "Unique Traits",
                                                                                    items: [
                                                                                      "Includes baboons, macaques, mandrills, colobus monkeys, langurs",
                                                                                      "Ischial callosities (hardened sitting pads)",
                                                                                      "Some have cheek pouches for food storage"
                                                                                    ]
                                                                                  }
                                                                                ]
                                                                              }
                                                                            },
                                                                            {
                                                                              name: "Superfamily Hominoidea (Apes)",
                                                                              hoverContent: {
                                                                                title: "Superfamily Hominoidea (Apes)",
                                                                                sections: [
                                                                                  {
                                                                                    heading: "Defining Traits",
                                                                                    items: [
                                                                                      "No tail",
                                                                                      "Broader chest and shoulders",
                                                                                      "Enhanced cognitive abilities"
                                                                                    ]
                                                                                  }
                                                                                ]
                                                                              },
                                                                              children: [
                                                                                {
                                                                                  name: "Family Hylobatidae (Gibbons — Lesser Apes)",
                                                                                  isTerminal: true,
                                                                                  hoverContent: {
                                                                                    title: "Family Hylobatidae",
                                                                                    sections: [
                                                                                      {
                                                                                        heading: "Unique Traits",
                                                                                        items: [
                                                                                          "Brachiation specialists: swing arm-over-arm through trees",
                                                                                          "Throat sacs: amplify vocalizations for long-distance communication",
                                                                                          "Monogamous pair bonds",
                                                                                          "Found in Southeast Asian forests"
                                                                                        ]
                                                                                      }
                                                                                    ]
                                                                                  }
                                                                                },
                                                                                {
                                                                                  name: "Family Hominidae (Great Apes)",
                                                                                  hoverContent: {
                                                                                    title: "Family Hominidae (Great Apes)",
                                                                                    sections: [
                                                                                      {
                                                                                        heading: "Shared Traits",
                                                                                        items: ["Largest body size among primates", "Highly developed cognition", "Extended juvenile development period"]
                                                                                      }
                                                                                    ]
                                                                                  },
                                                                                  children: [
                                                                                    {
                                                                                      name: "Genus Pongo (Orangutans)",
                                                                                      isTerminal: true,
                                                                                      hoverContent: {
                                                                                        title: "Genus Pongo (Orangutans)",
                                                                                        sections: [
                                                                                          { heading: "Unique Traits", items: ["Most solitary of the great apes", "Predominantly arboreal", "Found only in Borneo and Sumatra", "Males develop large cheek flanges (flanged males)"] }
                                                                                        ]
                                                                                      }
                                                                                    },
                                                                                    {
                                                                                      name: "Genus Gorilla (Gorillas)",
                                                                                      isTerminal: true,
                                                                                      hoverContent: {
                                                                                        title: "Genus Gorilla",
                                                                                        sections: [
                                                                                          { heading: "Unique Traits", items: ["Largest living primates", "Primarily terrestrial knuckle-walkers", "Herbivorous", "Silverback males lead social groups", "Found in central Africa"] }
                                                                                        ]
                                                                                      }
                                                                                    },
                                                                                    {
                                                                                      name: "Genus Pan (Chimpanzees and Bonobos)",
                                                                                      isTerminal: true,
                                                                                      hoverContent: {
                                                                                        title: "Genus Pan",
                                                                                        sections: [
                                                                                          { heading: "Unique Traits", items: ["Closest living relatives of humans (~98.7% DNA similarity)", "Tool use: modify sticks for termite fishing", "Complex social hierarchies", "Chimpanzees (Pan troglodytes) and Bonobos (Pan paniscus)", "Found in central/west Africa"] }
                                                                                        ]
                                                                                      }
                                                                                    },
                                                                                    {
                                                                                      name: "Tribe Hominini (Humans and Ancestors)",
                                                                                      isTerminal: true,
                                                                                      hoverContent: {
                                                                                        title: "Tribe Hominini (Humans and Ancestors)",
                                                                                        sections: [
                                                                                          {
                                                                                            heading: "Defining Traits",
                                                                                            items: [
                                                                                              "Obligate bipedalism (habitual upright walking on two legs)",
                                                                                              "Dramatically reduced canine teeth",
                                                                                              "Vastly enlarged brain relative to body size",
                                                                                              "Language and symbolic thought"
                                                                                            ]
                                                                                          },
                                                                                          {
                                                                                            heading: "Homo sapiens (Modern Humans)",
                                                                                            items: [
                                                                                              "Only surviving hominin species",
                                                                                              "Fully modern anatomy and cognitive capacity ~300,000 years ago",
                                                                                              "Behaviorally modern ~50,000 years ago"
                                                                                            ]
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