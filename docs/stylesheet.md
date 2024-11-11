# Look and Feel - Corporate Identity

## Stylesheet

Je hebt in Figma een styleguide gemaakt, nu ga je een gestructureerd CSS file maken met als doel dat jullie één stylesheet kunnen gebruiken in je individuele project voor veelvoorkomende CSS selectoren en properties.

## Aanpak
Op het whiteboard gezamenlijk een breakdown maken van de CSS voor veel voorkomende huisstijl componenten van bestaande websites; kleuren, typografie, links, buttons, headings en formulier elementen.

Bedenk in teams consistente en betekenisvolle namen voor de verschillende huisstijl componenten en gebruik deze namen voor de classes in de gedeelde stylesheet.

Verdeel de huisstijl componenten van de styleguide onder de teamleden en werk ze allemaal uit in de stylesheet van de [gezamenlijke styleguide repo](https://github.com/fdnd-task/look-and-feel-styleguide).

Maak afspraken (code conventions) over het beter structureren van de CSS van de gemeenschappelijke, generieke stylesheet.

Refactor jouw eigen specifieke stylesheet(s). Alle CSS die reeds in de generieke stylesheet staat kan weggehaald worden, en je neemt de code conventies van het team over. 

### Analyse

#### CSS strategie
Naarmate er meer CSS in je project komt, bijvoorbeeld als je gaat samenwerken aan een project, wordt het steeds belangrijker om een CSS strategie (met elkaar) te bepalen.

**Opdracht**  
Bekijk, voor onderstaande websites, in de inspector welke css strategie is gebruikt voor de veel voorkomende huisstijl componenten; kleuren, typografie, links, buttons, headings, formulier elementen.
Wat valt op aan de naamgeving van classes en custom properties?  

- https://css-tricks.com/  
- https://www.smashingmagazine.com/  
- https://fdnd.nl/  

### Ontwerpen/bouwen

#### Custom Properties
Met Custom Properties kun je een css value opslaan en op meerdere plekken gebruiken. Hiermee zorg je voor _DRY code_, wat de code beter leesbaar, makkelijker onderhoudbaar en sneller maakt. Dit is fijn voor de developers én de gebruikers.

**Opdracht**  
Gebruik voor values die in de generieke stylesheet vaker voorkomen _Custom Properties_. Maak in het team afspraken over betekenisvolle namen voor de Custom Properties.

Tip: Zet een Custom Property nooit op de _:root_ selector, maar zo diep mogelijk in de _DOM Tree_!

Bronnen:
- [Custom Properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [A strategy Guide To CSS Custom Properties](https://www.smashingmagazine.com/2018/05/css-custom-properties-strategy-guide/)
- [Breaking CSS Custom Properties out of :root Might Be a Good Idea](https://css-tricks.com/breaking-css-custom-properties-out-of-root-might-be-a-good-idea/)
- Advanced: [Pseudo-Private Custom Properties](https://lea.verou.me/blog/2021/10/custom-properties-with-defaults/ )

**Opdracht**  
Een Light en Dark mode op de website helpt gebruikers om de website beter te kunnen bekijken in verschillende omstandigheden. 
Implementeer een Dark Theme, die in ieder geval werkt op basis van de voorkeuren van de gebruiker. Custom Properties kunnen hierbij helpen om onnodige herhaling van bijvoorbeeld CSS values voor kleuren te voorkomen. 

Bronnen:  
- [prefers-color-scheme (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- Advanced: [Dark Mode in 3 Lines of CSS and Other Adventures](https://dev.to/madsstoumann/dark-mode-in-3-lines-of-css-and-other-adventures-1ljj)

#### CSS Nesting
Met CSS Nesting plaats je child elements ín het parent element. Hiermee zorg je voor _DRY code_, wat de code beter leesbaar, makkelijker onderhoudbaar en sneller maakt. Dit is fijn voor de developers én de gebruikers. 

**Opdracht**  
Maak met je team, aan de hand van de onderstaande bron, afspraken over hoe jullie CSS nesting implementeren in de stylesheet.

Bron:    
- [Native CSS nesting: What you need to know](https://blog.logrocket.com/native-css-nesting/)

#### CSS Cascade Layers
Met CSS Cascade Layers kan je extra specificity levels aanmaken in CSS. Dat kan helpen om de stylesheets overzichtelijker te houden en voorkomt het gebruik van _!important_.

**Opdracht**  
Maak met je team, aan de hand van onderstaande bron, afspraken over welke layers jullie willen definiëren in de generieke stylesheet.

Bronnen:   
- [Cascade layers](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers)
- [Cascade Layers Guide](https://css-tricks.com/css-cascade-layers/)
- Advanced: [Cascade Layers are useless*](https://www.matuzo.at/blog/2023/cascade-layers-are-useless/)

### Integreren

#### Generieke Stylesheet implementeren
Nu je met je team een gemeenschappelijke, generieke stylesheet hebt gemaakt, kan je deze gebruiken in jouw eigen project (leertaak).

**Opdracht**  
Koppel de gemeenschappelijke, generieke stylesheet in de HTML van jouw project (gebruik hiervoor de live link naar de stylesheet op GitHub pages) en refactor jouw reeds bestaande lokale stylesheets. Hieruit kan alle overbodige CSS, die nu in de generieke stylesheet staat, worden verwijderd.
Verwerk vervolgens de code conventions (over naamgeving, custom properties, nesting en layers).
