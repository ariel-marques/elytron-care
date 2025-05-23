const commentsData = [
    { name: "Regina Lewis", comment: "I can finally enjoy meals with my grandkids without fear.", gender: "female", ageGroup: "older" },
    { name: "Jacqueline Jones", comment: "This has truly brought joy back into my life. Thank you.", gender: "female", ageGroup: "older" },
    { name: "Donald Ware", comment: "Eating with my grandkids is joyful again, without any worries.", gender: "male", ageGroup: "older" },
    { name: "Darius Walker", comment: "I can sit at the table with my grandkids and not stress about a thing.", gender: "male", ageGroup: "older" },
    { name: "Ashley Miller", comment: "Meals with my grandkids are happy again, no more fear.", gender: "female", ageGroup: "older" },
    { name: "Kimberly Duran", comment: "This gave me my mornings back. No more crashing mid-day. I’m shook.", gender: "female", ageGroup: "young" },
    { name: "Jonathan Marsh", comment: "I don’t have to worry anymore when sharing meals with my grandkids.", gender: "male", ageGroup: "older" },
    { name: "Kevin Nguyen", comment: "Waking up refreshed, no more sugar crashes… this is a game-changer.", gender: "male", ageGroup: "young" },
    { name: "Bryan Taylor", comment: "I can’t express how much happiness this has restored to my life.", gender: "male", ageGroup: "young" },
    { name: "Dr. Edward Dodson", comment: "Wasn’t sure at first, but after a month I’m honestly amazed at the results.", gender: "male", ageGroup: "older" },
    { name: "Jonathan Aguirre", comment: "My doctor was shocked at how stable my numbers are now.", gender: "male", ageGroup: "young" },
    { name: "Tina Reyes", comment: "This has genuinely made my life better. Thank you.", gender: "female", ageGroup: "young" },
    { name: "Cynthia Briggs", comment: "It’s been decades since I’ve felt this good. I’m beyond grateful.", gender: "female", ageGroup: "older" },
    { name: "Rodney Richards", comment: "I can’t believe how much better I feel. It’s like I have my life back.", gender: "male", ageGroup: "older" },
    { name: "Jorge Fowler", comment: "I haven’t felt this amazing in over 20 years. I’m so thankful.", gender: "male", ageGroup: "older" },
    { name: "Brandi Long", comment: "Waking up energized and staying strong all day, unbelievable!", gender: "female", ageGroup: "young" },
    { name: "Tina Richardson", comment: "I doubted it at first, but now I’m blown away.", gender: "female", ageGroup: "older" },
    { name: "Lisa Melendez", comment: "Yo… legit feel like a new person. Energy is back, mood is up. Let’s gooo 🔥", gender: "female", ageGroup: "young" },
    { name: "David Ramirez", comment: "Finally able to truly enjoy mealtimes with the little ones.", gender: "male", ageGroup: "young" },
    { name: "Jonathan Flores", comment: "So grateful I found this. I feel like myself again.", gender: "male", ageGroup: "young" },
    { name: "James Knapp", comment: "Even my doctor couldn’t believe how much my numbers improved.", gender: "male", ageGroup: "older" },
    { name: "William Horton DDS", comment: "No more second-guessing meals, just laughter and memories with my grandkids.", gender: "male", ageGroup: "older" },
    { name: "Danielle Walton", comment: "My latest check-up left my doctor speechless, in the best way!", gender: "female", ageGroup: "young" },
    { name: "Lisa Crane", comment: "Never thought I’d see the day where I feel normal again. But here I am.", gender: "female", ageGroup: "older" },
    { name: "Michael Moore", comment: "Legit feel like I got a second chance at life. Energy through the roof! 🔥", gender: "male", ageGroup: "young" },
    { name: "Michelle Martinez", comment: "It’s been so long since I’ve felt this alive. Truly grateful.", gender: "female", ageGroup: "older" },
    { name: "Allison Evans", comment: "Finally something that works and doesn’t make me feel like I’m just managing symptoms.", gender: "female", ageGroup: "young" },
    { name: "Joseph Wilson", comment: "Never felt this energized and positive in years. Let’s gooo 🔥🔥", gender: "male", ageGroup: "young" },
    { name: "Monique Washington", comment: "Eating out or at home with my grandkids is pure joy again.", gender: "female", ageGroup: "older" },
    { name: "Chloe Rice", comment: "I’m smiling again, thanks to this.", gender: "female", ageGroup: "young" },
    { name: "Amy Cabrera DVM", comment: "One month in and the changes are unreal.", gender: "female", ageGroup: "young" },
    { name: "Anthony Chapman", comment: "OMG this actually worked! 🙌🙌🙌 I was NOT expecting such a huge difference.", gender: "male", ageGroup: "young" },
    { name: "Benjamin Johnson", comment: "Finally found something that actually treats the root cause, not just the symptoms.", gender: "male", ageGroup: "young" },
    { name: "Christie Warner", comment: "This turned my life around in the best way.", gender: "female", ageGroup: "older" },
    { name: "Allen Smith", comment: "Skeptical at the start, but the results speak for themselves.", gender: "male", ageGroup: "older" },
    { name: "Barbara Flores", comment: "This is the first time I’m not just masking symptoms, real results!", gender: "female", ageGroup: "older" },
    { name: "Emily Walsh", comment: "OMG, I still can’t believe how much this worked! 🙌", gender: "female", ageGroup: "young" },
    { name: "Nicole Baker", comment: "Feeling joyful again feels incredible. So grateful!", gender: "female", ageGroup: "young" },
    { name: "Connie Lowery", comment: "I truly didn’t believe I could feel normal again, but here we are.", gender: "female", ageGroup: "older" },
    { name: "Ronald Nichols", comment: "Decades went by without feeling this healthy, finally, that’s changed.", gender: "male", ageGroup: "older" },
    { name: "Katie Wilson", comment: "It’s like someone flipped the light back on in my life.", gender: "female", ageGroup: "young" },
    { name: "Joseph Johnson", comment: "Feels amazing to actually heal instead of just “managing” it all.", gender: "male", ageGroup: "young" },
    { name: "Dylan Lyons", comment: "I’m able to savor meals with my grandkids without any anxiety now.", gender: "male", ageGroup: "older" },
    { name: "Shawn Ball", comment: "Finding this changed everything. I finally feel like myself again.", gender: "male", ageGroup: "young" },
    { name: "Jesus Kelly", comment: "Not gonna lie, I was super skeptical. But this has changed everything. 💯💯", gender: "male", ageGroup: "young" },
    { name: "Dawn David", comment: "Been using this for a few weeks and I already feel way more alive!", gender: "female", ageGroup: "young" },
    { name: "Zachary Watkins", comment: "Not just a quick fix, this actually works.", gender: "male", ageGroup: "young" },
    { name: "Sarah Walters", comment: "I owe so much of my happiness now to this.", gender: "female", ageGroup: "young" },
    { name: "Michael Wood", comment: "It’s not just about controlling symptoms anymore, it’s real progress.", gender: "male", ageGroup: "young" },
    { name: "William Ellis", comment: "No more crashes, no more dragging through the afternoon.", gender: "male", ageGroup: "older" },
    { name: "Laura Gonzalez", comment: "The doctor’s reaction said it all, my results are incredible.", gender: "female", ageGroup: "young" },
    { name: "Melinda Barrett", comment: "Life feels lighter and happier because of this. Thank you.", gender: "female", ageGroup: "older" },
    { name: "Laura Webb", comment: "Sharing food with my grandkids feels safe and happy once more.", gender: "female", ageGroup: "older" },
    { name: "Brittany Brown", comment: "For once, it’s not just about temporary relief. This feels permanent.", gender: "female", ageGroup: "young" },
    { name: "Kathleen Wong", comment: "It’s so freeing to enjoy a meal with my grandkids without fear.", gender: "female", ageGroup: "older" },
    { name: "Valerie Knox", comment: "Honestly, I was doubtful at first, but this completely turned my life around. 🙌🙌🙌", gender: "female", ageGroup: "young" },
    { name: "Kelly Taylor", comment: "I’m beyond thankful I came across this. I feel so much better.", gender: "female", ageGroup: "young" },
    { name: "Steven Armstrong", comment: "Thought “normal” was gone forever. Glad I was wrong.", gender: "male", ageGroup: "older" },
    { name: "Bethany Hunter", comment: "Pure gratitude for what this brought back into my life.", gender: "female", ageGroup: "young" },
    { name: "Gregory Moreno", comment: "I wasn’t expecting much, but wow, this really worked.", gender: "male", ageGroup: "older" },
    { name: "Carla Conley", comment: "Never thought I’d get my old self back. But here I am.", gender: "female", ageGroup: "young" },
    { name: "Thomas Brown", comment: "Feeling like myself again is the greatest gift. So grateful.", gender: "male", ageGroup: "young" },
    { name: "John Monroe", comment: "My numbers amazed my doctor, and me too.", gender: "male", ageGroup: "older" },
    { name: "Paula Barnes", comment: "I honestly feel like I got my life back, and I’m loving every second.", gender: "female", ageGroup: "older" },
    { name: "Jessica Mcdonald DVM", comment: "I stay energized all day now, and it feels amazing.", gender: "female", ageGroup: "young" },
    { name: "Madeline Kelly", comment: "I’m beyond blessed to feel this good after all these years.", gender: "female", ageGroup: "young" },
    { name: "Brittney Hall", comment: "It’s hard to describe how incredible it feels after so many years.", gender: "female", ageGroup: "young" },
    { name: "John Williams", comment: "I finally wake up excited for the day again. Thank you!", gender: "male", ageGroup: "older" },
    { name: "Shelby Lewis", comment: "Just 30 days later, I feel like a brand-new person.", gender: "female", ageGroup: "young" },
    { name: "Tracy Herrera", comment: "I’m not stuck managing symptoms anymore. I’m finally moving forward.", gender: "female", ageGroup: "young" },
    { name: "Casey Martinez", comment: "Grateful every single day I found this solution.", gender: "female", ageGroup: "young" },
    { name: "Anthony Schultz", comment: "After all this time, feeling normal feels like a miracle.", gender: "male", ageGroup: "young" },
    { name: "Michelle Woodward", comment: "I almost forgot what feeling this good was like. So grateful.", gender: "female", ageGroup: "older" },
    { name: "John Fernandez", comment: "Normal never felt so good. I’m beyond thankful.", gender: "male", ageGroup: "older" },
    { name: "Audrey Kelly", comment: "I’m not the same person I was a month ago, for real. 🔥", gender: "female", ageGroup: "young" },
    { name: "William Lewis", comment: "Mornings are mine again! No more energy crashes halfway through the day.", gender: "male", ageGroup: "older" },
    { name: "James Olson", comment: "Didn’t think I’d ever say this, but I feel amazing again.", gender: "male", ageGroup: "older" },
    { name: "Peter Hernandez", comment: "Finally feeling strong and stable from morning to night.", gender: "male", ageGroup: "young" },
    { name: "Victoria Wilcox", comment: "Can’t put into words how thankful I am for finding this.", gender: "female", ageGroup: "young" },
    { name: "Thomas Walker", comment: "It’s such a relief to finally feel like me again.", gender: "male", ageGroup: "young" },
    { name: "Victoria Taylor", comment: "Finally, something that made a real impact without just hiding the issues.", gender: "female", ageGroup: "young" },
    { name: "Kevin Best", comment: "My doctor had to double-check because the results were so good.", gender: "male", ageGroup: "young" },
    { name: "Seth Lane", comment: "Best decision I made, even if I hesitated at first.", gender: "male", ageGroup: "young" },
    { name: "Justin Poole", comment: "It’s been decades since I’ve felt this good. I’m beyond ,grateful.", gender: "male", ageGroup: "young" },
    { name: "Edward Phillips", comment: "I’ve been on this for just a few weeks and the difference is incredible!", gender: "male", ageGroup: "young" },
    { name: "Travis Ramirez", comment: "My energy, my smile, my life, I got it all back.", gender: "male", ageGroup: "young" },
    { name: "Joshua Rivera", comment: "No more just “getting by” with symptoms, I’m actually thriving now.", gender: "male", ageGroup: "young" },
    { name: "Hector Wilson", comment: "Every day now feels like a blessing thanks to this.", gender: "male", ageGroup: "young" },
    { name: "Kelly Saunders", comment: "Hearing my doctor’s shock was the best feeling ever.", gender: "female", ageGroup: "young" },
    { name: "Justin Smith", comment: "Every little thing feels joyful again, all thanks to this.", gender: "male", ageGroup: "young" },
    { name: "Kevin Lopez", comment: "My doctor was seriously impressed by how stable everything is now.", gender: "male", ageGroup: "young" },
    { name: "Kirsten Camacho", comment: "This isn’t just symptom control, it’s a full-on life changer.", gender: "female", ageGroup: "young" },
    { name: "Bryan Richardson", comment: "Family dinners are fun again, no stress, just happiness.", gender: "male", ageGroup: "young" },
    { name: "Matthew Carrillo", comment: "I finally get to enjoy every meal with my grandkids like I should.", gender: "male", ageGroup: "yoolderung" },
    { name: "Kimberly Baker", comment: "Never thought I’d hear my doctor so surprised, in a good way!", gender: "female", ageGroup: "young" },
    { name: "Anthony Stewart", comment: "This completely changed my energy levels, I feel unstoppable.", gender: "male", ageGroup: "young" },
    { name: "Jenny Andrews", comment: "OMG this actually worked! 🙌🙌 I was NOT expecting such a huge difference", gender: "female", ageGroup: "young" },
    { name: "Gregory Lee", comment: "Thank you, thank you, thank you for giving me my life back!", gender: "male", ageGroup: "young" },
    { name: "Susan Riley", comment: "Worry-free meals with my grandkids? Finally possible.", gender: "female", ageGroup: "older" },
    { name: "Andrew Francis", comment: "Mealtime with my grandkids used to be stressful, now it’s just pure joy.", gender: "male", ageGroup: "older" },
];