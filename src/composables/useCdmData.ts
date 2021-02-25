import { computed } from 'vue';
import cdmData from '../../static/cdm-data.json';

export default function useCdmData() {
  const data = cdmData;

  // Obviously this should be automated at some point
  const flatData = computed(() => data.map((d) => ({
    _id: d._id,
    originator: d.originator,
    creationDate: d.creationDate,
    creationDateAsUnixTimestamp: new Date(d.creationDate).valueOf() / 1000,
    targetName: d.targetObject.name,
    targetNoradId: d.targetObject.noradId,
    chaserName: d.chaserObject.name,
    chaserNoradId: d.chaserObject.noradId,
    md: d.conjunctionData.md,
    pc: d.conjunctionData.pc.toExponential(),
    tca: d.conjunctionData.tca,
  })));

  return {
    data,
    flatData,
  };
}
