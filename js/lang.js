var fileindex = ["index.html", "about.html", "download.html"];

//var en_US = [
//  {
//    title: "This is Iris",
//    heading: "Iris Shaders",
//    home: "Home",
//    about: "Learn More",
//    download: "Download Now",
//    dark: " Dark mode",
//    light: "Light mode",
//    subheading: "A lens into a new era of minecraft graphics",
//    or: "or",
//    continue: "Continue Reading",
//    heading1: "Why Iris?",
//    subheading1: "This is what makes iris different",
//    card1: "Great mod Compatibility",
//    carddesc1:
//      "Iris is committed to ensuring mod compatibility as a first priority, and is already compatible with many of your favorite mods!",
//    card2: "Modern Design",
//    carddesc2:
//      "Iris has been built from the ground up to be extensible and easy to update. Say goodbye to weeks of waiting to use shaders on the new Minecraft version!",
//    card3: "Free and Open Source",
//    carddesc3:
//      "Iris is an open source mod that anyone can contribute to. This allows Iris to improve by facilitating collaboration.",
//    heading2: "Features",
//    subheading2: "What Iris has to offer",
//    image1: "OptiFine Parity",
//    imagedesc1:
//      "Iris aims to have full support for all past and present OptiFine shaderpacks, and number of packs supported by Iris is constantly and rapidly growing!<span class='text-span-2'><br>Screenshot by Niko</span>",
//    image2: "Works with Sodium",
//    imagedesc2:
//      "Iris is compatible with CaffeineMC optimization mods such as Sodium and Phosphor, enabling stunning graphics at frames comparable to or even better than vanilla.<br><span class='text-span-2'>Screenshot by Guardian</span>",
//    heading3: "The Iris Advantage",
//    subheading3: "New rendering techniques that put you ahead of the game",
//    shadows: "Shadows",
//    entities: "Entities",
//    screenshottitle1: "Performance-Optimized Shadows",
//    screenshotdesc1:
//      "Iris uses a technique called Shadow Frustum Culling to decrease the overhead of one of the biggest performance hogs of a shader - the shadows. Using Iris&#x27;s shadow frustum culling, you&#x27;ll be able to reach higher frame rates without sacrificing the quality of volumetric lighting or shadows.<br><span class='text-span-2'>Screenshot by FoundationGames</span>",
//    screenshottitle2: "Efficient Entity Rendering",
//    screenshotdesc2:
//      "Iris improves the way that Minecraft renders entities and block entities like chests, pigs, and item frames. This trick even works with shaders disabled, and in worlds with a lot of entities, it can boost vanilla performance by up to 60 percent. Shadow rendering sees an especially large improvement, making areas that were once unplayable with shaders into places where your FPS is surprisingly smooth!<br><span class='text-span-2'>Screenshot by kinzuu_music</span>",
//    footer1: "About the Iris project",
//    footerdesc1:
//      "The Iris Project is a collaborative open-source project created by a team of passionate developers seeking to make the Minecraft shaders experience the best that it can be. Iris is developed by the community, for the community.",
//    footer2: "Useful links",
//    curseforge: "Iris on CurseForge",
//    modrinth: "Iris on Modrinth",
//    github: "GitHub",
//    discord: "Discord",
//    patreon: "Patreon",
//    copyright: "© Copyright 2021 IrisShaders. All Rights Reserved.",
//  },
//  {
//    abouttitle: "About IrisShaders",
//    irisshaders: "Iris Shaders",
//    about: "Learn More",
//    download: "Download Now",
//    dark: " Dark mode",
//    light: "Light mode",
//    heading: "The Iris Project",
//    subheading: "Learn more about the Shader Sensation",
//    aboutproject: "About the Project",
//    messageheading:
//      "A message from the founder and lead developer at Iris Shaders",
//    message:
//      "Iris was created to fill a void that I saw in the Minecraft customization and graphical enhancement community: the lack of an open-source shaders mod that would let me load my favorite shader packs on modern versions of the game, while retaining performance and compatibility with modpacks. OptiFine, the current dominant mod for loading shader packs, has restrictive licensing that firmly stands in the way of any sort of tinkering, and is fairly notorious for having compatibility issues with the mods that I like. It&#x27;s also mutually incompatible with Sodium, the best rendering optimization mod in existence by a large margin. ShadersMod was never updated past 1.12, and it lacks support for many of the many modern popular shaderpacks. So I created Iris, to try and solve these issues, and also address many other longstanding issues with shader packs.<br><br>I first and foremost develop Iris to meet my own needs of a performance-oriented shaders mod with good compatibility and potential for tinkering. Iris when paired with Sodium delivers great performance on my machine, finally making it fully possible for me to actually play with shaders instead of just periodically switching them on to take pretty screenshots, then switching them off once I get tired of frame drops. Of course, as it turns out, I&#x27;m far from the only person who benefits from the development of Iris, which is why I&#x27;ve decided to release it to the public as an open-source mod.<br><br>Iris has a public stable release for 1.16 that works with a custom version of Sodium, and a public beta release for 1.17 that currently does not work with Sodium (currently, there is no official version of Sodium for 1.17). Iris is still in heavy development and gets new improvements every week, and is progressing very rapidly!",
//    performance: "Performance",
//    performanceheading: "See how the frames stack up with Iris",
//    vanilla: "Vanilla Only",
//    vanillamessage:
//      "Vanilla Minecraft has a very old codebase, and many say that it is in sore need of a rewrite, especially when it comes to graphics. Blaze 3D rendering, added in 1.15, was an attempt to alleviate this somewhat, but in many ways only worsened the problem. In 1.17, Minecraft is moving to OpenGL Core 3.2 and Java 16, but so far no significant changes have been implemented that utilize the performance enhancements of these systems. Minecraft before 1.17 also did not natively support shaders, and even since 1.17 released, shader support is very limited. However, Minecraft is known for it&#x27;s low-overhead minimalistic graphics, and provides a strong foundation for high-performance shader-based graphics.",
//    sodium: "Vanilla + <span class='text-span-4'>Sodium</span>",
//    sodiummessage:
//      "Sodium is a fabric mod that rewrites parts of the vanilla rendering system to optimize for performance in a way that no other mod has done before. Sodium is actively maintained and updated, and aims to be compatible with most other Fabric mods for maximum FPS even in the densest modpacks. Its sibling mods, Lithium, Phosphor, and Hydrogen, can all be used in conjunction with sodium to each optimize a different aspect of the game, whether it be ticking, lighting, or memory respectively. These mods together can boost FPS to 150% or more of vanilla performance for any player out there, whether you&#x27;re aiming for maximum frames to give you that PvP edge, or whether Sodium and the like are the only mods that can make the game playable on the hardware you have at hand.",
//    sodiumiris:
//      "Vanilla + <span class='text-span-4'>Sodium</span> + <span class='text-span-3'>Iris</span>",
//    sodiumirismessage:
//      "Iris builds on both Sodium and Vanilla by providing something that no standalone fabric mod has before: support for existing custom shaders. And because Iris stacks with Sodium and Vanilla, you can get shaders at remarkable frame rates, without the need for expensive hardware or experimental game modifications. The extra processes that iris performs only reduce performance by 10-15 percent, and with sodium installed the performance stays well above vanilla performance. In the future, Iris will be fully integrated and streamlined, and will even have rendering optimizations of its own, allowing Sodium and Iris together to be better than either of them alone. And these performance increases transfer directly to shaders, with most popular shaders consistently running at or above 60 fps, even on 5 and 6 year old hardware!",
//    screenshot: "Screenshot Gallery",
//    screenshotsubheading: "See what iris has to offer",
//    screenshot1: "Captured by Guardian using SEUS v11",
//    screenshot2: "Captured by Guardian using Sildurs Extreme VL",
//    screenshot3: "Captured by FoundationGames using Complementary",
//    screenshot4: "Captured by IMS using Sildurs Vibrant Extreme VL",
//    screenshot5: "Captured by IMS using BSL v8",
//    screenshot6: "Captured by IMS using Complementary v4.0",
//    screenshot7: "Captured by IMS using Complementary v4.0",
//    screenshot8: "Captured by IMS using SEUS Renewed",
//    screenshot9: "Captured by IMS using Complementary v4.0",
//    screenshot10: "Captured by IMS using Complementary v4.0",
//    screenshot11: "Captured by kinzuu_music using Complementary v4.0",
//    screenshot12: "Captured by Justsnoopy30 using Complementary v4.0 BE",
//    note: "Note - BE indicates screenshots that feature content from the BetterEnd mod by paulevs",
//    footer1: "About the Iris project",
//    footerdesc1:
//      "The Iris Project is a collaborative open-source project created by a team of passionate developers seeking to make the Minecraft shaders experience the best that it can be. Iris is developed by the community, for the community.",
//    footer2: "Useful links",
//    curseforge: "Iris on CurseForge",
//    modrinth: "Iris on Modrinth",
//    github: "GitHub",
//    discord: "Discord",
//    patreon: "Patreon",
//    copyright: "© Copyright 2021 IrisShaders. All Rights Reserved.",
//  },
//  {
//    downloadiris: "Download Now - IrisShaders",
//    iris: "Iris Shaders",
//    home: "Home",
//    about: "Learn More",
//    download: "Download Now",
//    dark: " Dark mode",
//    light: "Light mode",
//    heading: "The Iris Installer",
//    subheading: "designed to streamline your Iris experience",
//    description:
//      "Iris&#x27;s installer will automatically download and install Iris and Sodium for great graphics at smooth framerates. Simply run the installer, choose your version, and hit install. Don&#x27;t believe us? Try it for yourself.",
//    downloadjar: "Download Universal JAR",
//    alternatedownloads: "Alternate Downloads",
//    alternatedownloadsubheading:
//      "Our handy Installer&#x27;s not your style? Try the standalone version",
//    getmodrinth: "Download From Modrinth",
//    getcurseforge: "Download From CurseForge",
//    getgithub: "Get Source From GitHub",
//    footer1: "About the Iris project",
//    footerdesc1:
//      "The Iris Project is a collaborative open-source project created by a team of passionate developers seeking to make the Minecraft shaders experience the best that it can be. Iris is developed by the community, for the community.",
//    footer2: "Useful links",
//    curseforge: "Iris on CurseForge",
//    modrinth: "Iris on Modrinth",
//    github: "GitHub",
//    discord: "Discord",
//    patreon: "Patreon",
//    copyright: "© Copyright 2021 IrisShaders. All Rights Reserved.",
//  },
//];

var langData;
var lang = navigator.language.replace("-", "_");

//Loading the lang
function initLang(page) {
  fetch("./locales/" + lang + ".json")
    .then((response) => response.json())
    .then((data) => {
      langData = data.data;
      console.log(langData);
      console.log("Loaded " + lang);
      for (const [key, value] of Object.entries(langData[page])) {
        var el = document.querySelector(`[langfield="${key}"]`);
        if (el) {
          document
            .querySelectorAll(`[langfield="${key}"]`)
            .forEach((element) => (element.innerHTML = value));
        }
      }
    })
    .catch((err) => console.log(err));
}
