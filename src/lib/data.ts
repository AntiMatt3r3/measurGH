import objects from '@/data/objects.json';
import families from '@/data/families.json';
import constructs from '@/data/constructs.json';
import references from '@/data/references.json';
import referenceLinks from '@/data/reference-links.json';
import findings from '@/data/findings.json';
import applications from '@/data/applications.json';
import resources from '@/data/resources.json';
import programmes from '@/data/programmes.json';
import specs from '@/data/spec-requirements.json';
import refinements from '@/data/v3-refinements.json';
import siteMeta from '@/data/site-meta.json';

export const data = { objects, families, constructs, references, referenceLinks, findings, applications, resources, programmes, specs, refinements, siteMeta };

export const refsById = new Map(references.map((r: any) => [r.reference_id, r]));
export const objectsById = new Map(objects.map((o: any) => [o.id, o]));
export const familiesById = new Map(families.map((f: any) => [f.measuregh_family_id, f]));

export function evidenceForObject(id: string) {
  const links = referenceLinks.filter((l: any) => l.p1ca_canonical_id === id);
  const linkedRefs = links.map((l: any) => ({ link: l, reference: refsById.get(l.reference_id) })).filter((x: any) => x.reference);
  return {
    links,
    references: linkedRefs,
    findings: findings.filter((f: any) => f.p1ca_canonical_id === id),
    applications: applications.filter((a: any) => a.p1ca_canonical_id === id),
    resources: resources.filter((r: any) => r.p1ca_canonical_id === id),
  };
}

export function specForObject(o: any) {
  const lists = [...(specs.methods || []), ...(specs.indicators || []), ...(specs.qualitative || [])];
  const name = String(o.name || '').toLowerCase();
  return lists.find((s: any) => {
    const ex = String(s.calibration_exemplar || '').toLowerCase();
    if (!ex) return false;
    return name.includes(ex) || ex.includes(name) ||
      (name.includes('timeline followback') && ex.includes('timeline followback')) ||
      (name.includes('attributable') && ex.includes('attributable')) ||
      (name.includes('visual analogue') && ex.includes('visual analogue')) ||
      (name.includes('social network') && ex.includes('social network')) ||
      (name.includes('most significant change') && ex.includes('most significant change')) ||
      (name.includes('life-course') && ex.includes('life-course'));
  });
}
