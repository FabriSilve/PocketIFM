Il Progetto

Pocket IFM<br/>
Lo scopo del progetto svolto durante il tirocinio era lo sviluppo di un applicativo che esemplificasse l’uso delle Web Api messe a disposizione dall’azienda. 
In seguito sono elencate le funzionalità dell’applicativo web sviluppato durante il tirocinio.

Login<br/>
La schermata di login è la prima ad essere visualizzata quando si utilizza l’applicativo. Essa permette di accedere all’area dedicata all’utente in seguito all’inserimento delle credenziali. Eventuali messaggi di errore vengono visualizzati nell’area tra il logo e il primo input segnalando i campi lasciati vuoti o in formati non validi controllati lato client. In seguito al corretto accesso, l’applicativo ottiene dal server un token che permette di autentificare le richieste e di identificare l’utente, questo viene salvato all’interno dell’applicativo e in un cookie permettendo un accesso diretto all’area utente al successivo utilizzo se l’utente non effettua il logout.


Dati giornalieri<br/>
Eseguito l’accesso si visualizza la pagina principale, la quale è suddivisa in varie sezioni. La prima comprende i dati relativi alla giornata corrente e visualizza:
-	Le “performance” dell’impresa, ossia se l’utilizzo del servizio rispecchia il contratto.
-	I giorni previsti prima del consumo completo del credito.
-	Il credito restante espresso in percentuale rispetto alla ricarica definita dal contratto.
-	La scadenza del credito.
-	Il numero di chiamate giornaliere e la loro durata. 
Livelli bassi di performance o credito vengono segnalati da una variazione del colore del grafico.

Traffico<br/>
In questa sezione è presente un grafico a colonne che permette di visualizzare i dati relativi al traffico nell’ultima settimana, nelle ultime due o nell’ultimo mese. Questo visualizza i valori in inbound, outbound e totali relativi al numero delle chiamate o minuti in quel determinato giorno. L’utente può scegliere quale serie di dati visualizzare, durata o numero delle chiamate, cliccando sui valori delle “statistiche di oggi”. La serie selezionata sarà evidenziata dal colore più scuro. Passando il mouse o cliccando su una colonna verrà visualizzata una finestrella adiacente ad essa contenete il valore di questa.

Transazioni<br/>
Nella seconda parte della pagina principale si tiene traccia delle transizioni che l’utente ha effettuato, come spese per servizi e ricariche. Queste sono elencate in una tabella affiancate da un grafico a torta che visualizza le percentuali delle varie tipologie di dati costi, quantità e numero di chiamate. Cliccando su una riga della tabella viene estesa un’area sottostante contenente la descrizione del servizio e la possibilità di accedere ai dettagli in formato pdf in una nuova scheda. Al variare della riga attiva variano di conseguenza anche i dati nel grafico adiacente. Tramite i pulsanti vicini ad esso si può selezionare la serie di dati da visualizzare.

Notifiche<br/>

Notifiche push
Nella schermata principale verranno visualizzate sotto forma di pop up le notifiche che il sistema manderà all’utente variando il colore in base alla tipologia. Queste potranno essere chiuse singolarmente o in gruppo e cliccando sopra al link si visualizzerà il contenuto completo nell’area notifiche.

Area Notifiche<br/>
L’area notifiche permette di visualizzare l’elenco completo delle comunicazioni ricevute dal sistema. Le notifiche ancora da leggere sono indicate con un pallino colorato pieno mentre quelle già lette hanno solamente un cerchio colorato. Premendo sulla notifica interessata, essa verrà visualizzata nella sua forma estesa nell’area dedicata. 
Tramite il pulsante elimina si possono rimuovere definitivamente le notifiche dall’elenco.
In alto è presente una barra di ricerca che permette di filtrare le notifiche in base al titolo e con il pulsante a croce adiacente si può annullare la ricerca.
 

Navigazione<br/>
In qualsiasi area dell’applicazione cliccando sul logo in alto a sinistra o spostando il cursore sul lato sinistro della schermata si aprirà il menu di navigazione. Questo contiene quattro voci:
-	Dashboard: apre la pagina principale.
-	Notifiche: apre l’area notifiche
-	IFM Homepage: apre un collegamento in un'altra scheda al sito ufficiale
-	Logout: pulisce i dati dell’utente e torna alla schermata di login

Librerie esterne<br/>
	Ngx-cookie-service – ng2-google-charts – bootstrap 3 - angular-in-memory-web-api

