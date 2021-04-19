console.log('usmTensor.js loaded')

usmTensor={
    Date:Date()
}

usmTensor.getCovidGenomeList=async()=>{
    return await usmTensor.getJsonl('https://api.ncbi.nlm.nih.gov/datasets/v1alpha/virus/taxon/2697049/genome/table?refseq_only=false&annotated_only=true&host=9606&complete_only=true&table_fields=nucleotide_accession&table_fields=species_tax_id&table_fields=species_name&table_fields=genus&table_fields=family&table_fields=isolate_name&table_fields=nucleotide_length&table_fields=sequence_type&table_fields=nuc_completeness&table_fields=geo_location&table_fields=us_state&table_fields=host_name&table_fields=host_tax_id&table_fields=collection_date&table_fields=bioproject&table_fields=biosample&format=jsonl')
}

usmTensor.getJsonl=async(url='https://api.ncbi.nlm.nih.gov/datasets/v1alpha/virus/taxon/2697049/genome/table?refseq_only=false&annotated_only=true&host=9606&complete_only=true&table_fields=nucleotide_accession&table_fields=species_tax_id&table_fields=species_name&table_fields=genus&table_fields=family&table_fields=isolate_name&table_fields=nucleotide_length&table_fields=sequence_type&table_fields=nuc_completeness&table_fields=geo_location&table_fields=us_state&table_fields=host_name&table_fields=host_tax_id&table_fields=collection_date&table_fields=bioproject&table_fields=biosample&format=jsonl')=>{
    const txt = await (await fetch(url)).text()
    return JSON.parse(`[${txt.replace(/[\n\r]+/g,',').replace(/,$/,'')}]`)
}