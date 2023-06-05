<p align="center">
    <img src=".github/readme_icon.png" width="161" height="161"/>
    <h1 align="center">Ava</h1>
    <h4 align="center">Open source discord bot with application commands and a user-friendly interface</h4>
</p>

<p align="center">
    <a href="https://github.com/yewshanooi/ava/releases/">
        <img alt="Latest Version" src="https://img.shields.io/github/v/release/yewshanooi/ava?include_prereleases&style=flat-square">
    </a>
  &nbsp;
    <a href="https://github.com/yewshanooi/ava/">
        <img alt="Repository Size" src="https://img.shields.io/github/repo-size/yewshanooi/ava?style=flat-square">
    </a>
  &nbsp;
    <a href="https://github.com/yewshanooi/ava/blob/main/LICENSE">
        <img alt="License" src="https://img.shields.io/github/license/yewshanooi/ava?style=flat-square">
    </a>
  &nbsp;
    <a href="https://www.codefactor.io/repository/github/yewshanooi/ava/">
        <img alt="Code Quality" src="https://img.shields.io/codefactor/grade/github/yewshanooi/ava?style=flat-square">
    </a>
  &nbsp;
    <a href="https://github.com/yewshanooi/ava/commits/">
        <img alt="Last Commit" src="https://img.shields.io/github/last-commit/yewshanooi/ava?style=flat-square">
    </a>
</p>
<br/>

## Features
- **Message Embed** and **Buttons**
- **Application Commands** *(integrated directly within each guild)*
- **Watch Together** *(with YouTube Activity)*
- **AI Chatbot** *(powered by OpenAI GPT-3.5 model)*
- **Third Party API** commands *(such as Giphy, Nasa, Wikipedia and more!)*
<br/>

## Commands
<table>
  <tr>
    <td><b>Fun</b></td>
    <td><b>Moderation</b></td>
    <td><b>Utility</b></td>
  </tr>
  <tr>
    <td>8ball, achievement, beep, catfact, chatbot, coinflip, color, compliment, crypto, diceroll, dictionary, dogfact, fact, fortnite, giphy, github, lyrics, meme, minecraft, nasa, npm, roast, rps, say, spotify, urban, uselessfact, waifu, weather, wikipedia, word, youtube</td>
    <td>ban, channellock, channelunlock, deafen, kick, slowmode, timeout, unban, undeafen, untimeout, warn</td>
    <td>afk, announce, botinfo, botpresence, botsetnick, calculator, channeldelete, channelinfo, channelrename, guildinfo, guildrename, help, invite, leave, message, news, ping, purge, roleadd, roleinfo, roleremove, setnick, thread, threadarchive, userinfo</td>
  </tr>
</table>
<br/>

## Dependencies
###### Node.js
Node.js version **≥16.9.0** is required

###### Packages
<table>
  <tr>
    <td><a href="https://www.npmjs.com/package/chalk">chalk@4.1.2</a></td>
    <td><a href="https://www.npmjs.com/package/mathjs">mathjs@11.8.0</a></td>
  </tr>
  <tr>
    <td><a href="https://www.npmjs.com/package/discord.js">discord.js@14.11.0</a></td>
    <td><a href="https://www.npmjs.com/package/node-fetch">node-fetch@2.6.11</a></td>
  </tr>
  <tr>
    <td><a href="https://www.npmjs.com/package/dotenv">dotenv@16.1.4</a></td>
    <td><a href="https://www.npmjs.com/package/nodemon">nodemon@2.0.22</a></td>
  </tr>
  <tr>
    <td><a href="https://www.npmjs.com/package/eslint">eslint@8.42.0</a></td>
    <td><a href="https://www.npmjs.com/package/openai">openai@3.2.1</a></td>
  </tr>
</table>
<br/>

## Guide
###### Configuration Files
1. **Clone** this repository to your local drive
```sh
git clone https://github.com/yewshanooi/ava.git
cd ava
```
2. Install the required **npm packages**
```
npm install
```
3. Create a new **config.json** file and fill it with your preferred information<br/>
💡 ***embedColor** is required while the rest is optional*
```json
{
  "embedColor": "",
  "debugChannelId": "",
  "errorChannelId": "",
  "warningChannelId": ""
}
```
4. Create a new **.env** file and fill it with your own secret keys
```
TOKEN=
CLIENT_ID=
GUILD_ID=
FORTNITE_API_KEY=
GIPHY_API_KEY=
GENIUS_API_KEY=
NASA_API_KEY=
NEWS_API_KEY=
OPENAI_API_KEY=
OPENWEATHERMAP_API_KEY=
```
5. Run the **deploy-commands.js** file to deploy application commands<br/>
💡 *Commands will only be deployed and deleted for a single guild. To deploy or delete commands globally, check out the guides in the respective files*
```
node deploy-commands.js    |    node delete-commands.js
```
6. Run the **index.js** file to start the bot<br/>
💡 *Don't forget to run **deploy-commands.js** file before **index.js** file, otherwise commands won't appear as they are not updated*
```
node index.js
 -or-
npm start
 -or-
nodemon
```

###### Bot & Application
1. Visit [Discord Developer Portal](https://discord.com/developers/applications) to create a new application

2. Add a **Bot user** to your application

3. Enable `PUBLIC BOT` authorization flow option for the application **(OPTIONAL)**

4. Enable `PRESENCE INTENT` and `SERVER MEMBERS INTENT` privileged gateway intent option for the application **(REQUIRED)**

5. Replace this **OAuth2 URL** template with your **Client ID** and paste it in your browser's address bar to invite the application to your guild
```url
https://discord.com/api/oauth2/authorize?client_id={CLIENT_ID}&permissions=1497295481975&scope=bot%20applications.commands
```

###### OAuth2 URL Scopes & Permissions
<p align="left">
    <img src=".github/generate_oauth2_url.png"/>
</p>
<br/>

## License
This application is licensed under the **MIT License**
```
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR 
THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
<br/>

## Contributors
- [yewshanooi](https://github.com/yewshanooi)
- [Manzanitabot123](https://github.com/Manzanitabot123)
