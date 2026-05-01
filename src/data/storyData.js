export const allStories = {
  noir: {
    title: "The Midnight Rain",
    description: "A briefcase, a widow, and a web of lies in a rain-slicked city.",
    thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400",
    nodes: {
      start: {
        text: "Rain drums on your window. A woman drops a briefcase on your desk. 'My husband is missing. This holds the reason why.'",
        image: "https://images.unsplash.com/photo-1533167649158-6d508895b680?w=800",
        choices: [
          { text: "Accept the case", nextNode: "investigate" },
          { text: "Check her for a wire", nextNode: "federal_trap" },
          { text: "Ask for payment upfront", nextNode: "negotiate" },
          { text: "Tell her to leave", nextNode: "refuse_bad" }
        ]
      },
      investigate: {
        text: "You track the briefcase to a shipping dock. You see the husband, but he looks like he's in charge, not a victim.",
        image: "https://images.unsplash.com/photo-1501430654243-c934cec2e1c0?w=800",
        choices: [
          { text: "Confront him directly", nextNode: "bad_ending_1" },
          { text: "Call the Police", nextNode: "good_ending_1" },
          { text: "Plant a bug and wait", nextNode: "spy_path" },
          { text: "Steal the briefcase back", nextNode: "good_ending_2" }
        ]
      },
      federal_trap: {
        text: "She's a Fed. The door kicks open. Agents swarm the room with weapons drawn.",
        image: "https://images.unsplash.com/photo-1510511459019-5dee997d7db4?w=800",
        choices: [
          { text: "Surrender", nextNode: "bad_ending_2" },
          { text: "Escape through the fire exit", nextNode: "good_ending_3" },
          { text: "Bribe the lead agent", nextNode: "bad_ending_3" }
        ]
      },
      spy_path: {
        text: "You hear the truth: it's a political coup. You have the recordings safe on your drive.",
        image: "https://images.unsplash.com/photo-1558494949-ef010ccdcc32?w=800",
        choices: [
          { text: "Sell to the media", nextNode: "good_ending_4" },
          { text: "Blackmail the husband", nextNode: "bad_ending_4" }
        ]
      },
      negotiate: {
        text: "She pays, but her eyes go cold. 'Just do the job, Detective.'",
        image: "https://images.unsplash.com/photo-1522295594107-9564c90d049a?w=800",
        choices: [
          { text: "Follow her out", nextNode: "investigate" },
          { text: "Hire an associate to watch her", nextNode: "good_ending_2" }
        ]
      },
      // ENDINGS
      good_ending_1: { text: "GOOD ENDING: Law & Order. You dismantled the syndicate with the law.", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      good_ending_2: { text: "GOOD ENDING: The Clean Getaway. You have the money and your life.", image: "https://images.unsplash.com/photo-1519074063912-ad25b57c9809?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      good_ending_3: { text: "GOOD ENDING: The Ghost. You vanished from their radar forever.", image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      good_ending_4: { text: "GOOD ENDING: The Hero. Your leak saved the city from a coup.", image: "https://images.unsplash.com/photo-1508921234172-b68ed335b3e6?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      bad_ending_1: { text: "BAD ENDING: One Bullet. You weren't as fast as you thought.", image: "https://images.unsplash.com/photo-1533619031041-073832ca3321?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      bad_ending_2: { text: "BAD ENDING: Life Sentence. The system framed you perfectly.", image: "https://images.unsplash.com/photo-1530276371031-2511efff9d5a?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      bad_ending_3: { text: "BAD ENDING: Double Crossed. The bribe was accepted, then they killed you.", image: "https://images.unsplash.com/photo-1454496406107-dc34337da8d6?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      bad_ending_4: { text: "BAD ENDING: Bottom of the River. Blackmailers don't live long here.", image: "https://images.unsplash.com/photo-1464960334032-13203f19e48f?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      refuse_bad: { text: "BAD ENDING: Ignorance is Death. You were killed later to tie up loose ends.", image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800", choices: [{ text: "Restart", nextNode: "start" }] }
    }
  },
  cyber_heist: {
    title: "Ghost in the Vault",
    description: "Infiltrate the Arasaka mainframe. High risk, digital reward.",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400",
    nodes: {
      start: {
        text: "You're in. The Black Dragon firewall is 30 seconds from detecting you. The core is humming in front of your neural link.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
        choices: [
          { text: "Brute force the encryption", nextNode: "power_path" },
          { text: "Use a silent exploit", nextNode: "stealth_path" },
          { text: "Trigger a false alarm", nextNode: "distract_path" },
          { text: "Abort the mission", nextNode: "bad_ending_1" }
        ]
      },
      power_path: {
        text: "The brute force is loud. Security drones are launching from the ceiling ports.",
        image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800",
        choices: [
          { text: "Download and disconnect", nextNode: "good_ending_1" },
          { text: "Try to override the drones", nextNode: "bad_ending_2" }
        ]
      },
      stealth_path: {
        text: "You're a ghost in the machine. You find the CEO's 'Dirty laundry' folder hidden in a sub-sector.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",
        choices: [
          { text: "Expose it to the public", nextNode: "good_ending_2" },
          { text: "Transfer the corp's funds", nextNode: "good_ending_3" },
          { text: "Stay too long to explore", nextNode: "bad_ending_3" }
        ]
      },
      distract_path: {
        text: "The alarm works. The guards leave their posts. You have total access to the primary server core.",
        image: "https://images.unsplash.com/photo-1558494949-ef010ccdcc32?w=800",
        choices: [
          { text: "Install a backdoor for later", nextNode: "good_ending_4" },
          { text: "Overload the server core", nextNode: "bad_ending_4" }
        ]
      },
      good_ending_1: { text: "GOOD ENDING: Fast & Rich. You got out just in time.", image: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      good_ending_2: { text: "GOOD ENDING: Social Justice. The corp collapsed overnight.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      good_ending_3: { text: "GOOD ENDING: Shadow Tycoon. You are now the richest person on the net.", image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      good_ending_4: { text: "GOOD ENDING: Master Controller. The system is yours forever.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      bad_ending_1: { text: "BAD ENDING: Cowardice. Your reputation is ruined. No one hires you.", image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      bad_ending_2: { text: "BAD ENDING: Fried Circuits. The drones' feedback fried your brain.", image: "https://images.unsplash.com/photo-1510511459019-5dee997d7db4?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      bad_ending_3: { text: "BAD ENDING: Trapped in the Net. They locked the port. You are code now.", image: "https://images.unsplash.com/photo-1522295594107-9564c90d049a?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      bad_ending_4: { text: "BAD ENDING: Zero Day. The explosion was bigger than expected. Flatline.", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800", choices: [{ text: "Restart", nextNode: "start" }] }
    }
  },
  deep_sea: {
    title: "Abyssal Echo",
    description: "Navigate a trench that shouldn't exist.",
    thumbnail: "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=400",
    nodes: {
      start: {
        text: "Your sonar detects a structure at 40,000 feet. The hull groans. Something is knocking on the glass.",
        image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800",
        choices: [
          { text: "Turn on floodlights", nextNode: "light_path" },
          { text: "Release a sonar ping", nextNode: "ping_path" },
          { text: "Shut down all systems", nextNode: "dark_path" },
          { text: "Ascend immediately", nextNode: "bad_ending_1" }
        ]
      },
      light_path: {
        text: "The light reveals an ancient city. And a guardian. It's moving.",
        image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800",
        choices: [
          { text: "Try to communicate", nextNode: "good_ending_1" },
          { text: "Fire a torpedo", nextNode: "bad_ending_2" }
        ]
      },
      ping_path: {
        text: "The ping reveals a map of the Earth's core. It's hollow.",
        image: "https://images.unsplash.com/photo-1464960334032-13203f19e48f?w=800",
        choices: [
          { text: "Record the data", nextNode: "good_ending_2" },
          { text: "Follow the signal deeper", nextNode: "good_ending_3" },
          { text: "Predator attack", nextNode: "bad_ending_3" }
        ]
      },
      dark_path: {
        text: "In the dark, you hear voices. They are welcoming you.",
        image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800",
        choices: [
          { text: "Join them", nextNode: "good_ending_4" },
          { text: "Panic and restart engines", nextNode: "bad_ending_4" }
        ]
      },
      good_ending_1: { text: "GOOD ENDING: First Contact. You've met the true owners of Earth.", image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      good_ending_2: { text: "GOOD ENDING: Scientific Legend. Your data changes history.", image: "https://images.unsplash.com/photo-1464960334032-13203f19e48f?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      good_ending_3: { text: "GOOD ENDING: Journey to the Center. A new world awaits.", image: "https://images.unsplash.com/photo-1501430654243-c934cec2e1c0?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      good_ending_4: { text: "GOOD ENDING: Transcendence. You no longer need the surface.", image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      bad_ending_1: { text: "BAD ENDING: Bends. You rose too fast. Your blood boiled.", image: "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      bad_ending_2: { text: "BAD ENDING: Leviathan's Wrath. You shouldn't have fired.", image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      bad_ending_3: { text: "BAD ENDING: Consumed. You were just a snack in the dark.", image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      bad_ending_4: { text: "BAD ENDING: Crushed. The pressure took the ship.", image: "https://images.unsplash.com/photo-1464960334032-13203f19e48f?w=800", choices: [{ text: "Restart", nextNode: "start" }] }
    }
  },
  wasteland: {
    title: "Sundown Trail",
    description: "Post-apocalyptic Wild West survival.",
    thumbnail: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=400",
    nodes: {
      start: {
        text: "The raiders are behind you. Your horse is tired. You see a canyon and a hidden cave.",
        image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=800",
        choices: [
          { text: "Hide in the cave", nextNode: "cave_path" },
          { text: "Stand and fight", nextNode: "fight_path" },
          { text: "Set a trap in the canyon", nextNode: "trap_path" },
          { text: "Surrender", nextNode: "bad_ending_1" }
        ]
      },
      cave_path: {
        text: "The cave contains old-world tech. A functional pre-war tank.",
        image: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?w=800",
        choices: [
          { text: "Blast the raiders", nextNode: "good_ending_1" },
          { text: "Drive it to the city", nextNode: "good_ending_2" }
        ]
      },
      fight_path: {
        text: "You're outnumbered. Your revolver clicks—empty. They are closing in.",
        image: "https://images.unsplash.com/photo-1519074063912-ad25b57c9809?w=800",
        choices: [
          { text: "Use your last grenade", nextNode: "bad_ending_2" },
          { text: "Challenge their leader to a duel", nextNode: "good_ending_3" },
          { text: "Try to run on foot", nextNode: "bad_ending_3" }
        ]
      },
      trap_path: {
        text: "The trap works. Half the raiders are gone in the dust and debris.",
        image: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?w=800",
        choices: [
          { text: "Loot their supplies", nextNode: "good_ending_4" },
          { text: "Follow them to their base", nextNode: "bad_ending_4" }
        ]
      },
      good_ending_1: { text: "GOOD ENDING: Iron Justice. No raider survived.", image: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      good_ending_2: { text: "GOOD ENDING: New Founder. Tech back to the people.", image: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      good_ending_3: { text: "GOOD ENDING: Quickest Draw. New King of the Waste.", image: "https://images.unsplash.com/photo-1519074063912-ad25b57c9809?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      good_ending_4: { text: "GOOD ENDING: Preparedness. Another sunrise.", image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      bad_ending_1: { text: "BAD ENDING: Enslaved. Scrap mines for life.", image: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      bad_ending_2: { text: "BAD ENDING: Mutual Destruction. It's over.", image: "https://images.unsplash.com/photo-1519074063912-ad25b57c9809?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      bad_ending_3: { text: "BAD ENDING: Hunted. Caught within the mile.", image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      bad_ending_4: { text: "BAD ENDING: Ambushed. Base was too guarded.", image: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?w=800", choices: [{ text: "Restart", nextNode: "start" }] }
    }
  },
  stellar: {
    title: "Voyage of Icarus",
    description: "First contact at the edge of a Dyson Sphere.",
    thumbnail: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400",
    nodes: {
      start: {
        text: "The Sphere is opening. A light brighter than the sun is pulling you in.",
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800",
        choices: [
          { text: "Resist with thrusters", nextNode: "resist_path" },
          { text: "Surrender to the pull", nextNode: "pull_path" },
          { text: "Eject escape pod", nextNode: "bad_ending_1" },
          { text: "Send greeting", nextNode: "greet_path" }
        ]
      },
      pull_path: {
        text: "Digital paradise. They offer a mind upload to their collective.",
        image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800",
        choices: [
          { text: "Accept Immortality", nextNode: "good_ending_1" },
          { text: "Request return to Earth", nextNode: "good_ending_2" }
        ]
      },
      greet_path: {
        text: "They respond. Waiting for 'The Architect' for millennia.",
        image: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?w=800",
        choices: [
          { text: "Pretend to be Him", nextNode: "good_ending_3" },
          { text: "Tell the truth", nextNode: "good_ending_4" },
          { text: "Steal tech", nextNode: "bad_ending_2" }
        ]
      },
      resist_path: {
        text: "Engines explode. Drifting into the gravity well of the sun.",
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800",
        choices: [
          { text: "Pray", nextNode: "bad_ending_3" },
          { text: "Self-destruct", nextNode: "bad_ending_4" }
        ]
      },
      good_ending_1: { text: "GOOD ENDING: Ascended. God in the machine.", image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      good_ending_2: { text: "GOOD ENDING: Envoy. Returned with the cure.", image: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      good_ending_3: { text: "GOOD ENDING: Emperor. Sphere is yours.", image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      good_ending_4: { text: "GOOD ENDING: Honest Friend. Welcome to stars.", image: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      bad_ending_1: { text: "BAD ENDING: Lost. Air is running low.", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      bad_ending_2: { text: "BAD ENDING: Dismantled. No thieves allowed.", image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      bad_ending_3: { text: "BAD ENDING: Vaporized. Sun was hungry.", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      bad_ending_4: { text: "BAD ENDING: Stardust. Own terms.", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800", choices: [{ text: "Restart", nextNode: "start" }] }
    }
  },
  espionage: {
    title: "Project Nightingale",
    description: "Infiltrate a Zurich gala to stop a global war.",
    thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400",
    nodes: {
      start: {
        text: "Target talking to a General. 5 minutes before they move to the vault.",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800",
        choices: [
          { text: "Spill drink on General", nextNode: "drink_path" },
          { text: "Ventilation sneak", nextNode: "vent_path" },
          { text: "Seduce target", nextNode: "seduce_path" },
          { text: "Shoot from balcony", nextNode: "bad_ending_1" }
        ]
      },
      vent_path: {
        text: "Find vault. Not a bomb—a list of spies. You're on it.",
        image: "https://images.unsplash.com/photo-1522295594107-9564c90d049a?w=800",
        choices: [
          { text: "Delete name", nextNode: "good_ending_1" },
          { text: "Copy list", nextNode: "good_ending_2" }
        ]
      },
      seduce_path: {
        text: "Private room. He draws a knife.",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800",
        choices: [
          { text: "Disarm", nextNode: "good_ending_3" },
          { text: "Talk way out", nextNode: "bad_ending_2" },
          { text: "Call backup", nextNode: "bad_ending_3" }
        ]
      },
      drink_path: {
        text: "General is furious. Swipe his keycard in the chaos.",
        image: "https://images.unsplash.com/photo-1522295594107-9564c90d049a?w=800",
        choices: [
          { text: "Stop launch", nextNode: "good_ending_4" },
          { text: "Get caught", nextNode: "bad_ending_4" }
        ]
      },
      good_ending_1: { text: "GOOD ENDING: Clean Slate. Free.", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      good_ending_2: { text: "GOOD ENDING: Spymaster. Secrets known.", image: "https://images.unsplash.com/photo-1522295594107-9564c90d049a?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      good_ending_3: { text: "GOOD ENDING: Hand to Hand. Silent.", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      good_ending_4: { text: "GOOD ENDING: Peacekeeper. War stopped.", image: "https://images.unsplash.com/photo-1522295594107-9564c90d049a?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      bad_ending_1: { text: "BAD ENDING: Execution. Missed.", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      bad_ending_2: { text: "BAD ENDING: Heartbroken. Literally.", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      bad_ending_3: { text: "BAD ENDING: Abandoned. No existence.", image: "https://images.unsplash.com/photo-1522295594107-9564c90d049a?w=800", choices: [{ text: "Restart", nextNode: "start" }] },
      bad_ending_4: { text: "BAD ENDING: Torture. Information wanted.", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800", choices: [{ text: "Restart", nextNode: "start" }] }
    }
  }
};