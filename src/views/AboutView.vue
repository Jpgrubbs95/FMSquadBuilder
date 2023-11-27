<template>
    <div class="card">
        <h3>About This App</h3>
        <h4>Purpose</h4>        
        <p>
          FM Squad Builder is a passion project inspired by the python code that squirrel_plays put together to evaluate players for the tactic he was using. The goal of this method is to take a fully scouted player and give them a single number rating for a specific role and duty.
          Put simply, this score is a weighted average of the player's ratings for the key and preferred attributes for the given role. Using this score, you can more easily evaluate different players and compare them to your current squad members for how good they should be in your tactic.
        </p>

        <h4>Help</h4>
        <p>Click the question mark on the top bar while on any page to be given a tutorial for how to use that page.</p>

        <hr/>

        <h4>Evaluating Your Squad</h4>
        <h5>Exporting squad data from FM</h5>
        <p>Begin by downloading the FMSquadBuilder-squad.fmf file and adding it to your Football Manager views folder.</p>
        <p>By default on Windows, this is usually <pre class="app-code"><code>C:\Users\username\Documents\Sports Interactive\Football Manager 2024\views</code></pre> On Mac it's <pre class="app-code"><code>Users/username/Library/Application Support/Sports Interactive/Football Manager 2024/views</code></pre> </p>
        <p>Next, go to the Squad Overview page in FM24, click the view dropdown in the top left, and select Custom -> Import View. Navigate to your views folder and select FMSquadBuilder-squad.</p>
        <p>Finally, use ctrl-a ctrl-p on Windows (command-a command-p on Mac) and select Web Page. Save the file anywhere you want</p>
        
        <h5>Loading and Defining Your Squad</h5>
        <p>Click <span class="text-primary font-medium">Load Squad</span> from the menu. Then click the upload button in the top right corner and load the file that you just exported. You should see the table be populated with your data from FM</p>
        <p>Next, click <span class="text-primary font-medium">Squad Designer</span>. In the right side table, begin by filling out all of the roles in your tactic. Once completed, you can use the role selection dropdown in the left side table to begin evaluating your players for that role. You can also select multiple roles at once. Finally, using the dropdowns, assign starters and backups to each position in your tactic.</p>

        <h5>Squad and Player Analysis</h5>
        <p>The <span class="text-primary font-medium">Squad Analysis</span> page gives you a general overview of your squad, including the average rating of your starters and backups, the largest drop-off between a starter and backup, and a bar-chart visualizer of your squad's ratings for their role. Use this page to evaluate team-needs, identify overpaid players that you may want to move on, and get a general idea of the quality of your squad.</p>
        <p>The <span class="text-primary font-medium">Player Analysis</span> page allows you to select a player from your squad and evaluate them for every role and duty combination in the game. Use this when you are trying to identify the best tactical fit to your current squad.</p>
        <p>The <span class="text-primary font-medium">Squad Finances</span> page  gives you a quick look at your squad finances. Ideally, you will be spending about 10% of your budget on Youth, 30% of your budget on Backups, 30% on Regular Starters, and 30% on Key Players. The table on the right will help give you an idea of about how much you should offer to pay any of your scouting targets, depending on your expected playing time.</p>

        <hr/>

        <h4>Scouting</h4>
        <h5>Exporting squad data from FM</h5>
        <p>Begin by downloading the scouting-views.zip file and unzipping it into your Football Manager views folder.</p>
        <p>By default on Windows, this is usually <pre class="app-code"><code>C:\Users\username\Documents\Sports Interactive\Football Manager 2024\views</code></pre> On Mac it's <pre class="app-code"><code>Users/username/Library/Application Support/Sports Interactive/Football Manager 2024/views</code></pre> </p>
        <p>Next, go to the Scouted Players page or a shortlist page in FM24, click the view dropdown in the top left, and select Custom -> Import View. Navigate to your views folder and select the appropriate FMSquadBuilder view for that page.</p>
        <p><strong>When on the scouted players page,</strong> be sure to manually scroll down to the bottom of the list that you are exporting. Failing to do this may lead to missing name data in the export. </p>
        <p>Finally, use ctrl-a ctrl-p on Windows (command-a command-p on Mac) and select Web Page. Save the file anywhere you want</p>
        
        <h5>Analysis</h5>
        <p>Use the role selection dropdown to begin evaluating the scouted players for that role or roles.</p>
        <p><strong>Notes:</strong></p>
        <p>If the player is not fully scouted, any attributes represented as ranges will use the lowest number of the range when calculating scores. Any required attributes that are unknown will lead to no score being assigned for that role.</p>
        
        <hr/>

        <h4>Special Thanks to squirrel_plays</h4>
        <p>This app was inspired by this video from squirrel_plays. Please give him a like and subscription!</p>

        <div class="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Ull-6K7fP_4?si=VgFlOfKu5kHFNLnU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 991px) {
    .video-container {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;

        iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
}
</style>
