import React from 'react'
import './Homepage.css'

function Homepage() {
  return (
    <div>
                    
                <header>
                    <div class="header-background">
                        <h1>Wald-Boden-Konzept</h1>
                        <p>Ökologische Beratung für Landwirtschaft und Gartenbau</p>
                    </div>
                </header>
            <div className='container-fluid'>
                
                <div className="row section">                 
                    <div className="col"> 
                        <h2 className='mb-5'>Angebote</h2>

                        <h3>Garten-Design</h3>
                        <p>Beratung bei Planung, Anlage und Umsetzung ökologisch gestalteter Gärten, Selbstversorgergärten und Solawis nach den Kriterien der Permakultur nach Sepp Holzer.</p>

                        <h3>Holzer’sche Permakultur</h3>
                        <p class="text-break">Die Holzer’sche Permakultur beinhaltet Landschaftsgestaltung (Terrassenbau, Humusrückhaltebecken), Trocken-und Feuchtbiotope, Tierhaltung, Obst, Heilkräuter-und Gemüseanbau, Pilzzucht, Wasserkreisläufe und Agroforstwirtschaft.</p>

                        <h3>Bodenaufbau durch RCW</h3>
                        <p>Darunter versteht man die Einbringung von Häckseln oder Chips aus frischem Zweigholz (englisch RCW für Ramial Chipped Wood). Diese Methode hat einen außerordentlich positiven Effekt auf die Wasserhaltekapazität und die Gefügestabilität des Bodens.</p>
                    </div>   
                    <div className="col-xs-12 col-md-6">
                                <img src="bodenaufbau.jpg" alt="agroforst" width={"350px"}/>
                    </div>    
                    
                </div>

                        <div className="row section">                
                            <div className="col-xs-12 col-md-6">                
                                 <h2 className='mb-5'>Garten Design & Permakultur</h2>
                                    <p>
                                        Ob Hausgarten zur Selbstversorgung, Pilzzucht-Projekt oder nachhaltig gestaltetes Firmengelände, 
                                        ich helfe Ihnen bei der Umsetzung Ihrer Garten-Träume. Dabei arbeite ich nach den Grundsätzen der  
                                        <strong> Holzer’schen Permakultur.</strong>
                                    </p>
                                    <p>
                                    Ein so gestalteter Garten zeichnet sich durch Kleinklima-Zonen aus, die jeweils unterschiedliche Funktionen erfüllen können und Lebensraum für verschiedene Pflanzen und Tiere bieten.
                                    </p>
                                    <p>
                                    Die vielfältigen Lebewesen bilden mit der Zeit ein vitales, produktives Ökosystem, welches sich immer weiterentwickelt und sich bei äußerlichen Veränderungen selbst wieder ins Gleichgewicht bringen kann.
                                    </p>
                                    <p>Ein Permakultur-Garten ist ein Ort voller Leben und Vielfalt, der Sie mit der Natur verbindet und Ihnen neue Erfahrungen und Perspektiven vermitteln kann.
                                    </p>
                                    </div>
                                    <div className="col-xs-12 col-md-6">                                    
                                        <h2 className='mb-5'>Mein Angebot umfasst</h2>
                                        <ul>
                                            <li>komplette Planung für bestehende oder neu anzulegende Gärten nach Ihren Wünschen</li>
                                            <li>Auswahl standortangepasster und ökologisch sinnvoller Pflanzen</li>
                                            <li>Planung und praktische Anleitung bei der Umsetzung Ihrer Garten-Projekte</li>
                                            <li>auf Wunsch Begleitung bei der Weiterentwicklung und Pflege</li>
                                            <li>Erstellung von Fruchtfolgen und Sortenauswahl</li>
                                            <li>Anleitung zur Bodenverbesserung und bei Pflanzen-Vermehrung und Anzucht</li>
                                            <li>Förderung der Biodiversität durch Schaffung von Habitaten und Nahrungsangeboten</li>
                                            <li>Kurse zu Themen wie Pflanzenvermehrung und Bodenaufbau (Termine siehe Aktuelles)</li>

                                        </ul>
                                    </div>

                                
                            </div>


                        <div className='row section text-center'>  
                            <div className="col">
                                <blockquote>
                                    <h3>„Alles, was gegen die Natur ist, hat auf Dauer keinen Bestand.“ - Charles Darwin</h3>
                                </blockquote>
                            </div>    
                        </div>
            <div className='row section'> 
                    <div className="col-xs-12 col-md-6">
                        <img src="PHOTO-2022-06-08-17-59-56.JPG" alt="agroforst" width={"500px"}/>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <h2>Andrea Pflaum</h2>
                        <p>Qualifikationen:</p>
                        <ul>
                            <li>Studium Umweltwissenschaften (Schwerpunkt Bodenkunde/Ökologie)</li>
                            <li>Mitgliedschaft und ehrenamtliche Arbeit im Deutschen Fachverband für Agroforstwirtschaft</li>
                            <li>Langjährige Erfahrung in Selbstversorgerprojekten</li>
                            <li>Eigenes Forschungsprojekt im Bereich Bodenaufbau durch Ramialholz</li>
                            <li>Praxisausbildung (andauernd) in Holzerscher Permakultur</li>
                        </ul>
                    </div>         
                </div>

                    <div className="row section">
                        <h2>Preise</h2>
                        <ul>
                            <li>Standortbezogene Beratung Agroforst für Landwirtschaft, ca 4 Std.: 200 € zuzüglich Fahrtkosten</li>
                            <li>Agroforst Flächen Beplanung, ca 20 Std.: ab 1400 €</li>
                            <li>Kleine Gartenberatung vor Ort: 70 €/Std.</li>
                            <li>Permakultur Gartenplanung, Projektplanung: ab 250 €</li>
                            <li>Beratung Bodenaufbau mit RCW: 120 €</li>
                        </ul>
                    </div>
        </div>
    </div>
  )
}

export default Homepage