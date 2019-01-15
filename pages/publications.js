import React from "react";
import PageLayout from "./PageLayout";
import "./index.css";

import Sidebar from "../components/sidebar/Sidebar";
import Content from "../components/Content";
import Publication from "../components/publications/Publication";
import PageTitle from "../components/PageTitle";

const tranformNamesToArray = stringOfNames => {
  const allNames = stringOfNames.split(";");
  return allNames;
};

const Publications = props => {
  return (
    <PageLayout>
      <div className="sidebar-wrapper">
        <Sidebar path={props.url.pathname} bg="publications" />
      </div>
      <Content>
        <PageTitle imagePath="../static/pLetter.svg" title="Publicationes" />
        <ul>
          <Publication paperTitle="Exact distribution of genetic risk score at the population level">
            Subirana, I.; Lucas, G.; Esnaola, M.; <b>Lluís-Ganella, C.</b>;
            Elosua, R.; Gonzalez, JR
          </Publication>
          <Publication paperTitle="Genetic profile of the SCN5A gene in Brugada Syndrome">
            Coll, M.; Allegue, C.; Pérez-Serra, A.; Picó, F.; Mademont-Soler,
            I.; <b>Lluís-Ganella, C.</b>; Elosua, R.; Campuzano, O.; Oliva, A.;
            Partemi, S.; Iglesias, A.; Brugada, R.
          </Publication>
          <Publication paperTitle="Evaluation of the role of a genetic risk score for blood pressure on risk of ischemic stroke subtypes">
            Lucas, G.; Subirana, I.; <b>Lluís-Ganella, C</b>.;
            Domingues-Montanari, S.; Roquer, J.; Rabionet, R.; Obach, V.;
            Krupinski, J.; Iniesta, JA.; Martí-Fàbregas, J.; Goyenechea, E.;
            Jimenez, J.; Elosua, E.;
          </Publication>
          <Publication paperTitle="Prevalence of genetically confirmed familial hypercholesterolemia in patients with acute coronary syndromes">
            Amor-Salamanca, A.; Castillo, S.; Gonzalez-Vioque, E.; Dominguez,
            F.; Quintana, L.; <b>Lluís-Ganella, C.</b>; Escudier, J.M.; Ortega,
            J.; Lara-Pezzi, E.; Alonso-Pulpon, L.; Garcia-Pavia, P
          </Publication>
          <Publication
            paperTitle="DNA methylation and obesity traits: An epigenome-wide association study. The REGICOR study. Epigenetics. 2017 Nov"
            paperUrl="http://www.tandfonline.com/doi/citedby/10.1080/15592294.2017.1363951?scroll=top&needAccess=true"
          >
            Sayols-Baixeras, S.; Subirana, I.; Fernández-Sanlés, A.; Sentí, M.;{" "}
            <b>Lluís-Ganella, C.</b>; Marrugat, J.; Elosua, R.
          </Publication>
          <Publication
            paperTitle="Identification and validation of seven new loci showing differential DNA methylation related to serum lipid profile: an epigenome-wide approach."
            paperUrl="http://www.ncbi.nlm.nih.gov/pubmed/28173150"
          >
            Sayols-Baixeras, S.; Subirana, I.; <b>Lluís-Ganella, C.</b>;
            Civeira, F.; Roquer, J.; Do, A.N.; Absher, D.; Cenarro, A.; Muñoz,
            D.; Soriano-Tárraga, C.; Jiménez-Conde, J.; Ordovas, J.M.; Senti,
            M.; Aslibekyan, S.; Marrugat, J.; Arnett, D.K.; Elosua, R.
          </Publication>
          <Publication
            paperTitle="DNA Methylation and High-Density Lipoprotein Functionality-Brief Report: The REGICOR Study. Arterioscler Thromb Vasc Biol. 2017"
            paperUrl="http://www.ncbi.nlm.nih.gov/pubmed/28062490"
          >
            Sayols-Baixeras, S.; Hernaez, A.; Subirana, I.;{" "}
            <b>Lluís-Ganella, C.</b>; Muñoz, D.; Fitó, M.; Marrugat, J.; Elosua,
            R.
          </Publication>
          <Publication
            paperTitle="Clinical Utility of Multi-marker Genetic Risk Scores for Prediction of Incident Coronary Heart Disease. A Cohort Study among over 51 Thousand Individuals of European Ancestry. Circ Cardiovasc Genet. 2016"
            paperUrl="http://www.ncbi.nlm.nih.gov/pubmed/27780846"
          >
            Iribarren, C.; Lu, M.; Jorgenson, E.; Martinez, M.; Lluís-Ganella,
            C.; Subirana, I.; Salas, E.; Elosua, R.
          </Publication>
          <Publication
            paperTitle="Identification and validation of seven new loci showing differential DNA methylation related to serum lipid profile: an epigenome-wide approach. The REGICOR study. Hum Mol Genet. 2016"
            paperUrl="http://www.ncbi.nlm.nih.gov/pubmed/27634649"
          >
            ayols-Baixeras, S.; Subirana, I.; Lluís-Ganella, C. ; Civeira, F.;
            Roquer, J.; Do, A.N.; Absher, D.; Cenarro, A.; Muñoz, D.;
            Soriano-Tárraga, C.; Jiménez-Conde, J.; Ordovas, J.M.; Senti, M.;
            Aslibekyan, S.; Marrugat, J.; Arnett, D.K.; Elosua, R.
          </Publication>
          <Publication
            paperTitle="Identification of a new locus and validation of previously reported loci showing differential methylation associated with smoking. The REGICOR study. Epigenetics. 2015"
            paperUrl="http://www.ncbi.nlm.nih.gov/pubmed/26829059"
          >
            Sayols-Baixeras, S.; <b>Lluís-Ganella, C.</b>; Subirana, I.; Salas,
            L.A.; Vilahur, N.; Corella, D.; Muñoz, D.; Segura, A.;
            Jimenez-Conde, J.; Moran, S.; Soriano-Tárraga, C.; Roquer, J.;
            Lopez-Farré, A.; Marrugat, J.; Fitó M.; Elosua, R.
          </Publication>
          <Publication
            paperTitle="Cardiovascular Risk Factors and Ischemic Heart Disease: Is the Confluence of Risk Factors Greater Than the Parts? A Genetic Approach. Circ Cardiovasc Genet. 2016"
            paperUrl="http://www.ncbi.nlm.nih.gov/pubmed/27103211"
          >
            Elosua, R.; <b>Lluís-Ganella, C.</b>; Subirana, I.; Havulinna, A.;
            Läll, K.; Lucas, G.; Sayols-Baixeras, S.; Pietilä, A.; Alver, M.;
            Cabrera,A.; Sentí, M.; Siscovick, D.; Mellander, O.; Fischer, K.;
            Salomaa, V.; Marrugat, M.
          </Publication>
          <Publication
            paperTitle="Association Between Coronary Artery Disease Genetic Variants and Subclinical Atherosclerosis: An Association Study and Meta-analysis. Rev Esp Cardiol. 2015"
            paperUrl="http://www.ncbi.nlm.nih.gov/pubmed/25804320"
          >
            Zabalza, M.; Subirana, I.; <b>Lluís-Ganella, C.</b>;
            Sayols-Baixeras, S.; de Groot, E.; Arnold, R.; Cenarro, A.; Ramos,
            R.; Marrugat, J.; Elosua, R.
          </Publication>
          <Publication
            paperTitle="Risk Haplotype Predisposes to Acute Coronary Syndrome. Circ Cardiovasc Genet. 2015"
            paperUrl="http://www.ncbi.nlm.nih.gov/pubmed/26679868"
          >
            Sinisalo, J.; Vlachopoulou, E.; Marchesani, M.; Nokelainen, J.;
            Mäyränpää, MI.; Lappalainen, J.; Paakkanen, R.; Wennerström, A.;
            Salli, K.; Niemi, HJ.; Männistö, S.; Salo, P. ; Junttila, J.;
            Eskola, M.; Nikus, K.; Arstila, TP.; Perola, M.; Huikuri, H.;
            Karhunen, PJ.; Kovanen, PT.; Palotie, A.; Havulinna, AS.;
            <b>Lluís-Ganella, C.</b>; Marrugat, J.; Elosua, R.; Salomaa, V.;
            Nieminen, MS.; Lokki, ML.
          </Publication>
          <Publication
            paperTitle="Analysis of gene-gene interactions among common variants in candidate cardiovascular genes in coronary artery disease. PLoS one."
            paperUrl="http://www.ncbi.nlm.nih.gov/pubmed/25658981"
          >
            Musameh, M.; Wang, W.; Nelson, C.; <b>Lluís-Ganella, C.</b>;
            Subirana, I.; Elosua, R.; Hall, A.; Kathiresan, S.; Samani, N.;
            Tomaszewski, M.
          </Publication>
          <Publication
            paperTitle="Gene-Age Interactions in Blood Pressure Regulation: A Large-Scale Investigation with the CHARGE, Global BPgen, and ICBP Consortia. Am J Hum Genet. 2014. "
            paperUrl="http://www.ncbi.nlm.nih.gov/pubmed/24954895"
          >
            Simino, J.; Shi, G.; Bis, JC.; Chasman, DI.; Ehret, GB.; Gu, X.;
            Guo, X.; Hwang, SJ.; Sijbrands, E.; Smith, AV.; Verwoert, GC.;
            Bragg-Gresham, JL.; Cadby, G.; Chen, P.; Cheng, CY.; Corre, T.; de,
            Boer, RA.; Goel, A.; Johnson, T.; Khor, CC.; LifeLines Cohort Study;
            <b>Lluís-Ganella, C.</b>; Luan, J.; Lyytikäinen, LP.; Nolte, IM.;
            Sim, X.; Sõber, S.; van, der, Most, PJ.; Verweij, N.; Zhao, JH.;
            Amin, N.; Boerwinkle, E.; Bouchard, C.; Dehghan, A.; Eiriksdottir,
            G.; Elosua, R.; Franco, OH.; Gieger, C.; Harris, TB.; Hercberg, S.;
            Hofman, A.; James, AL.; Johnson, AD.; Kähönen, M.; Khaw, KT.;
            Kutalik, Z.; Larson, MG.; Launer, LJ.; Li, G.; Liu, J.; Liu, K.;
            Morrison, AC.; Navis, G.; Ong, RT.; Papanicolau, GJ.; Penninx, BW.;
            Psaty, BM.; Raffel, LJ.; Raitakari, OT.; Rice, K.; Rivadeneira, F.;
            Rose, LM.; Sanna, S.; Scott, RA.; Siscovick, DS.; Stolk, RP.;
            Uitterlinden, AG.; Vaidya, D.; van, der, Klauw, MM.; Vasan, RS.;
            Vithana, EN.; Völker, U.; Völzke, H.; Watkins, H.; Young, TL.; Aung,
            T.; Bochud, M.; Farrall, M.; Hartman, CA.; Laan, M.; Lakatta, EG.;
            Lehtimäki, T.; Loos, RJ.; Lucas, G.; Meneton, P.; Palmer, LJ.;
            Rettig, R.; Snieder, H.; Tai, ES.; Teo, YY.; van, der, Harst, P.;
            Wareham, NJ.; Wijmenga, C.; Wong, TY.; Fornage, M.; Gudnason, V.;
            Levy, D.; Palmas, W.; Ridker, PM.; Rotter, JI.; van, Duijn, CM.;
            Witteman, JC.; Chakravarti, A.; Rao, DC.
          </Publication>
          <Publication
            paperTitle="Association Between Genetic Variants and Atrial Fibrillation in the Spanish Population, and Metanalysis of Previous Studies. Rev Esp Cardiol. 2014"
            paperUrl="http://www.ncbi.nlm.nih.gov/pubmed/25262128"
          >
            Ferran, A.; Alegret, JM.; Subirana, I.; Aragonès, G.; Lluís-Ganella,
            C.; Romero-Menor, C.; Planas, F.; Joven, J.; Elosua, R
          </Publication>
          <Publication
            paperTitle="Hypothesis-based Analysis of Gene-Gene Interactions and Risk of Myocardial Infarction. PLoS One. 2012"
            paperUrl="http://www.ncbi.nlm.nih.gov/pubmed/22876292"
          >
            Lucas, G.; <b>Lluís-Ganella, C.</b>; Subirana, I.; Musameh, MD.;
            Gonzalez, JR.; Nelson, CP.; Sentí, M.; The Myocardial Infarction
            Genetics Consortium; The Wellcome Trust Case Control Consortium;
            Schwartz, SM.; Siscovick, D.; O’Donnell, CJ.; Melander, O.; Salomaa,
            V.; Purcell, S.; Altshuler, D.; Samani, NJ.; Kathiresan, S.; Elosua,
            R.
          </Publication>
          <Publication
            paperTitle="Assessment of the value of a genetic risk score in improving the estimation of coronary risk. Atherosclerosis. 2012;"
            paperUrl="http://www.ncbi.nlm.nih.gov/pubmed/22521901"
          >
            <b>Lluís-Ganella, C.</b>; Subirana, I.; Lucas, G.; Tomás, M.; Muñoz,
            D.; Sentí, M.; Salas, E.; Sala, J.; Ramos, R.; Ordovas, JM.;
            Marrugat, J.; Elosua, R
          </Publication>
          <Publication
            paperTitle="Post-Genomic Update on a Classical Candidate Gene for Coronary Artery Disease: ESR1. Circ Cardiovasc Genet. 2011"
            paperUrl="http://www.ncbi.nlm.nih.gov/pubmed/21984528"
          >
            Lucas, G.; <b>Lluís-Ganella, C.</b>; Subirana, I.; Sentí, M.;
            Willenborg, C.; Musameh, MD.; Schwartz, SM.; O’Donnell, CJ.;
            Melander, O.; Salomaa, V.; Elosua, R.
          </Publication>
          <Publication
            paperTitle="Meta-analyses of the association between cytochrome CYP2C19 loss- and gain-of-function polymorphisms and cardiovascular outcomes in patients with coronary artery disease treated with clopidogrel. Heart. 2012"
            paperUrl="http://www.ncbi.nlm.nih.gov/pubmed/21693476"
          >
            Zabalza, M.; Subirana, I.; Sala, J.; <b>Lluís-Ganella, C.</b>;
            Lucas, G.; Tomás, M.; Masiá, R.; Marrugat, J.; Brugada, R.; Elosua,
            R
          </Publication>
          <Publication
            paperTitle="Additive Effect of Multiple Genetic Variants on the Risk of Coronary Artery Disease. Rev Esp Cardiol. 2010"
            paperUrl="http://www.ncbi.nlm.nih.gov/pubmed/20738937"
          >
            Lluis-Ganella, C.; Lucas, G.; Subirana, I.; Senti, M.;
            Jimenez-Conde, J.; Marrugat, J.; Tomas, M.; Elosua, R.
          </Publication>
          <Publication
            paperTitle="Qualitative assessment of previous evidence and an updated meta-analysis confirms lack of association between the ESR1 rs2234693 (PvuII) variant and coronary heart disease in men and women. Atherosclerosis 2009"
            paperUrl="http://www.ncbi.nlm.nih.gov/pubmed/19608186"
          >
            <b>Lluís-Ganella, C.</b>; Lucas, G.; Subirana, I.; Escurriol, V.;
            Tomas, M.; Senti, M.; Sala, J.; Marrugat, J.; Elosua, R.
          </Publication>

          <h1>BOOK CHAPTERS & INVITED REVIEWS</h1>

          <Publication paperTitle="What is a genetic test and which tipe of information can it provide? ">
            <b>Lluís-Ganella, C.</b>; Marrugat, J.; Elosua, R
          </Publication>
          <Publication
            paperTitle="Update in Cardiology: Vascular Risk and Cardiac Rehabilitation. Rev Esp Cardiol. 2014."
            paperUrl="http://www.ncbi.nlm.nih.gov/pubmed/24486082"
          >
            Galve, E.; Alegria, E.; Cordero, A.; Facila, L.; Fernandez de
            Bobadilla, J.; <b>Lluís-Ganella, C.</b>; Mazon, P.; Zarzosa, CP.;
            Gonzalez-Juanatey, JR.
          </Publication>
          <Publication
            paperTitle=" Pathogenesis of coronary artery disease: focus on genetic risk factors and identification of genetic variants. The Application of Clinical Genetics. 2014"
            paperUrl="http://www.ncbi.nlm.nih.gov/pubmed/24520200"
          >
            Sayols-Baixeras, S.; <b>Lluís-Ganella, C.</b>; Lucas, G; Elosua, R
          </Publication>
          <Publication paperTitle="Papel de los factores genéticos y otros biomarcadores en la estimación del riesgo y la prevención cardiovascular. Book chapter of “Retos actuales en el diagnóstico y manejo del SCA en España”. Sociedad Española de Cardiología 2013.">
            Elosua, R.; <b>Lluís-Ganella, C.</b>; Fitó, M
          </Publication>
          <Publication
            paperTitle="Research Into the Genetic Component of Heart Disease: From Linkage Studies to Genome-Wide Genotyping. Rev Esp Cardiol Supl. 9(supl.B) 2009."
            paperUrl="http://www.revespcardiol.org/en/research-into-the-genetic-component/articulo/13146058/"
          >
            Elosua, R.; <b>Lluís-Ganella, C.</b>; Lucas, G.
          </Publication>
        </ul>
      </Content>
    </PageLayout>
  );
};

export default Publications;
