const products = [
  { name:'Paracetol-500 Tablet', cat:'tablet', composition:'Paracetamol IP 500mg', pack:'10×10 Alu-Alu Blister', schedule:'H', icon:'💊', desc:'Analgesic and antipyretic for management of mild to moderate pain and fever in adults and children above 12 years.' },
  { name:'Amoxinol-500 Capsule', cat:'capsule', composition:'Amoxicillin Trihydrate IP 500mg', pack:'10×10 Blister Pack', schedule:'H', icon:'💊', desc:'Broad-spectrum penicillin antibiotic for upper and lower respiratory tract infections, urinary tract infections.' },
  { name:'Tandiplex Syrup', cat:'syrup', composition:'Multivitamin with Minerals', pack:'200 mL PET Bottle', schedule:'OTC', icon:'🧴', desc:'Complete multivitamin and multimineral syrup for nutritional deficiencies, convalescence, and general weakness.' },
  { name:'Metformin-500 SR Tablet', cat:'tablet', composition:'Metformin HCl IP 500mg (SR)', pack:'10×10 Alu-Alu Blister', schedule:'H', icon:'💊', desc:'Biguanide antidiabetic agent for management of Type 2 Diabetes Mellitus. Sustained-release formulation.' },
  { name:'Cefixol-200 Tablet', cat:'tablet', composition:'Cefixime IP 200mg', pack:'10×1 Blister Pack', schedule:'H', icon:'💊', desc:'Third generation cephalosporin antibiotic for uncomplicated UTI, otitis media, pharyngitis, and gonorrhoea.' },
  { name:'Tandikuff Syrup', cat:'syrup', composition:'Ambroxol HCl 15mg + Guaifenesin 50mg per 5mL', pack:'100 mL Amber Glass Bottle', schedule:'OTC', icon:'🧴', desc:'Mucolytic and expectorant combination for productive cough associated with bronchitis, pneumonia, and URTI.' },
  { name:'Omezol-20 Capsule', cat:'capsule', composition:'Omeprazole IP 20mg (Enteric Coated)', pack:'10×10 Alu-Alu Blister', schedule:'H', icon:'💊', desc:'Proton pump inhibitor for treatment of duodenal ulcer, GERD, Zollinger-Ellison syndrome, and H. pylori eradication.' },
  { name:'Pantacid-40 Injection', cat:'injectable', composition:'Pantoprazole Sodium 40mg for Injection', pack:'1 Vial + 1 WFI Ampoule', schedule:'H', icon:'💉', desc:'Intravenous PPI for short-term treatment of conditions requiring rapid acid suppression. Hospital use only.' },
  { name:'Tandi-D3 Soft Gel', cat:'nutra', composition:'Cholecalciferol IP 60,000 IU', pack:'4 Soft Gel Capsules per Strip', schedule:'OTC', icon:'🌿', desc:'Vitamin D3 supplementation for prevention and treatment of Vitamin D deficiency in adults.' },
  { name:'Azithromycin-500 Tablet', cat:'tablet', composition:'Azithromycin IP 500mg', pack:'3 Tablets per Strip', schedule:'H', icon:'💊', desc:'Macrolide antibiotic for community-acquired pneumonia, acute exacerbation of COPD, skin and soft tissue infections.' },
  { name:'Cetirizol-10 Tablet', cat:'tablet', composition:'Cetirizine HCl IP 10mg', pack:'10×10 Blister Pack', schedule:'OTC', icon:'💊', desc:'Second-generation antihistamine for symptomatic relief of allergic rhinitis, urticaria, and pruritus.' },
  { name:'Tandi-Cal Suspension', cat:'syrup', composition:'Calcium Carbonate 625mg + Vitamin D3 125 IU per 5mL', pack:'200 mL PET Bottle', schedule:'OTC', icon:'🧴', desc:'Calcium and Vitamin D3 suspension for prevention and treatment of calcium deficiency, osteoporosis adjuvant therapy.' },
];

export function catLabel(cat) {
  const map = { tablet:'Tablet', capsule:'Capsule', syrup:'Syrup/Suspension', injectable:'Injectable', nutra:'Nutraceutical' };
  return map[cat] || cat;
}

export default products;