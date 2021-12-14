'use strict';

// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'attributes... Remove this comment to see the full error message
const attributes = require('./attributes');

// the only possible values for the keyword
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'keyword'.
const keyword = (arr: any) => {
  arr = arr.slice(0);
  arr.type = 'keyword';

  return arr;
};

// some values for the keyword- but can include other 'name's
const keywordName = (arr: any) => {
  arr = arr.slice(0);
  arr.type = 'keyword | name';

  return arr;
};

// a keyword, name, or empty value
const keywordNameNovalue = (arr: any) => {
  arr = arr.slice(0);
  arr.type = 'keyword | name | no-value';

  return arr;
};

// a keyword that groups another keyword's values together
const setofKeyword = (arr: any) => {
  arr = arr.slice(0);
  arr.type = '1setOf keyword';

  return arr;
};

// a keyword that groups [another keyword's values] or [names] together
const setofKeywordName = (arr: any) => {
  arr = arr.slice(0);
  arr.type = '1setOf keyword | name';

  return arr;
};

// media is different from the others because it has sub-groups
const media = {
  'size name': [
    'a',
    'arch-a',
    'arch-b',
    'arch-c',
    'arch-d',
    'arch-e',
    'asme_f_28x40in',
    'b',
    'c',
    'choice_iso_a4_210x297mm_na_letter_8.5x11in',
    'd',
    'e',
    'executive',
    'f',
    'folio',
    'invoice',
    'iso-a0',
    'iso-a1',
    'iso-a2',
    'iso-a3',
    'iso-a4',
    'iso-a5',
    'iso-a6',
    'iso-a7',
    'iso-a8',
    'iso-a9',
    'iso-a10',
    'iso-b0',
    'iso-b1',
    'iso-b2',
    'iso-b3',
    'iso-b4',
    'iso-b5',
    'iso-b6',
    'iso-b7',
    'iso-b8',
    'iso-b9',
    'iso-b10',
    'iso-c3',
    'iso-c4',
    'iso-c5',
    'iso-c6',
    'iso-designated-long',
    'iso_2a0_1189x1682mm',
    'iso_a0_841x1189mm',
    'iso_a1_594x841mm',
    'iso_a1x3_841x1783mm',
    'iso_a1x4_841x2378mm',
    'iso_a2_420x594mm',
    'iso_a2x3_594x1261mm',
    'iso_a2x4_594x1682mm',
    'iso_a2x5_594x2102mm',
    'iso_a3-extra_322x445mm',
    'iso_a3_297x420mm',
    'iso_a0x3_1189x2523mm',
    'iso_a3x3_420x891mm',
    'iso_a3x4_420x1189mm',
    'iso_a3x5_420x1486mm',
    'iso_a3x6_420x1783mm',
    'iso_a3x7_420x2080mm',
    'iso_a4-extra_235.5x322.3mm',
    'iso_a4-tab_225x297mm',
    'iso_a4_210x297mm',
    'iso_a4x3_297x630mm',
    'iso_a4x4_297x841mm',
    'iso_a4x5_297x1051mm',
    'iso_a4x6_297x1261mm',
    'iso_a4x7_297x1471mm',
    'iso_a4x8_297x1682mm',
    'iso_a4x9_297x1892mm',
    'iso_a5-extra_174x235mm',
    'iso_a5_148x210mm',
    'iso_a6_105x148mm',
    'iso_a7_74x105mm',
    'iso_a8_52x74mm',
    'iso_a9_37x52mm',
    'iso_a10_26x37mm',
    'iso_b0_1000x1414mm',
    'iso_b1_707x1000mm',
    'iso_b2_500x707mm',
    'iso_b3_353x500mm',
    'iso_b4_250x353mm',
    'iso_b5-extra_201x276mm',
    'iso_b5_176x250mm',
    'iso_b6_125x176mm',
    'iso_b6c4_125x324mm',
    'iso_b7_88x125mm',
    'iso_b8_62x88mm',
    'iso_b9_44x62mm',
    'iso_b10_31x44mm',
    'iso_c0_917x1297mm',
    'iso_c1_648x917mm',
    'iso_c2_458x648mm',
    'iso_c3_324x458mm',
    'iso_c4_229x324mm',
    'iso_c5_162x229mm',
    'iso_c6_114x162mm',
    'iso_c6c5_114x229mm',
    'iso_c7_81x114mm',
    'iso_c7c6_81x162mm',
    'iso_c8_57x81mm',
    'iso_c9_40x57mm',
    'iso_c10_28x40mm',
    'iso_dl_110x220mm',
    'iso_ra0_860x1220mm',
    'iso_ra1_610x860mm',
    'iso_ra2_430x610mm',
    'iso_sra0_900x1280mm',
    'iso_sra1_640x900mm',
    'iso_sra2_450x640mm',
    'jis-b0',
    'jis-b1',
    'jis-b2',
    'jis-b3',
    'jis-b4',
    'jis-b5',
    'jis-b6',
    'jis-b7',
    'jis-b8',
    'jis-b9',
    'jis-b10',
    'jis_b0_1030x1456mm',
    'jis_b1_728x1030mm',
    'jis_b2_515x728mm',
    'jis_b3_364x515mm',
    'jis_b4_257x364mm',
    'jis_b5_182x257mm',
    'jis_b6_128x182mm',
    'jis_b7_91x128mm',
    'jis_b8_64x91mm',
    'jis_b9_45x64mm',
    'jis_b10_32x45mm',
    'jis_exec_216x330mm',
    'jpn_chou2_111.1x146mm',
    'jpn_chou3_120x235mm',
    'jpn_chou4_90x205mm',
    'jpn_hagaki_100x148mm',
    'jpn_kahu_240x322.1mm',
    'jpn_kaku2_240x332mm',
    'jpn_oufuku_148x200mm',
    'jpn_you4_105x235mm',
    'ledger',
    'monarch',
    'na-5x7',
    'na-6x9',
    'na-7x9',
    'na-8x10',
    'na-9x11',
    'na-9x12',
    'na-10x13',
    'na-10x14',
    'na-10x15',
    'na-legal',
    'na-letter',
    'na-number-9',
    'na-number-10',
    'na_5x7_5x7in',
    'na_6x9_6x9in',
    'na_7x9_7x9in',
    'na_9x11_9x11in',
    'na_10x11_10x11in',
    'na_10x13_10x13in',
    'na_10x14_10x14in',
    'na_10x15_10x15in',
    'na_11x12_11x12in',
    'na_11x15_11x15in',
    'na_12x19_12x19in',
    'na_a2_4.375x5.75in',
    'na_arch-a_9x12in',
    'na_arch-b_12x18in',
    'na_arch-c_18x24in',
    'na_arch-d_24x36in',
    'na_arch-e_36x48in',
    'na_b-plus_12x19.17in',
    'na_c5_6.5x9.5in',
    'na_c_17x22in',
    'na_d_22x34in',
    'na_e_34x44in',
    'na_edp_11x14in',
    'na_eur-edp_12x14in',
    'na_executive_7.25x10.5in',
    'na_f_44x68in',
    'na_fanfold-eur_8.5x12in',
    'na_fanfold-us_11x14.875in',
    'na_foolscap_8.5x13in',
    'na_govt-legal_8x13in',
    'na_govt-letter_8x10in',
    'na_index-3x5_3x5in',
    'na_index-4x6-ext_6x8in',
    'na_index-4x6_4x6in',
    'na_index-5x8_5x8in',
    'na_invoice_5.5x8.5in',
    'na_ledger_11x17in',
    'na_legal-extra_9.5x15in',
    'na_legal_8.5x14in',
    'na_letter-extra_9.5x12in',
    'na_letter-plus_8.5x12.69in',
    'na_letter_8.5x11in',
    'na_monarch_3.875x7.5in',
    'na_number-9_3.875x8.875in',
    'na_number-10_4.125x9.5in',
    'na_number-11_4.5x10.375in',
    'na_number-12_4.75x11in',
    'na_number-14_5x11.5in',
    'na_personal_3.625x6.5in',
    'na_quarto_8.5x10.83in',
    'na_super-a_8.94x14in',
    'na_super-b_13x19in',
    'na_wide-format_30x42in',
    'om_dai-pa-kai_275x395mm',
    'om_folio-sp_215x315mm',
    'om_folio_210x330mm',
    'om_invite_220x220mm',
    'om_italian_110x230mm',
    'om_juuro-ku-kai_198x275mm',
    'om_large-photo_200x300',
    'om_pa-kai_267x389mm',
    'om_postfix_114x229mm',
    'om_small-photo_100x150mm',
    'prc_1_102x165mm',
    'prc_2_102x176mm',
    'prc_3_125x176mm',
    'prc_4_110x208mm',
    'prc_5_110x220mm',
    'prc_6_120x320mm',
    'prc_7_160x230mm',
    'prc_8_120x309mm',
    'prc_10_324x458mm',
    'prc_16k_146x215mm',
    'prc_32k_97x151mm',
    'quarto',
    'roc_8k_10.75x15.5in',
    'roc_16k_7.75x10.75in',
    'super-b',
    'tabloid'
  ],
  'media name': [
    'a-translucent',
    'a-transparent',
    'a-white',
    'arch-a-translucent',
    'arch-a-transparent',
    'arch-a-white',
    'arch-axsynchro-translucent',
    'arch-axsynchro-transparent',
    'arch-axsynchro-white',
    'arch-b-translucent',
    'arch-b-transparent',
    'arch-b-white',
    'arch-bxsynchro-translucent',
    'arch-bxsynchro-transparent',
    'arch-bxsynchro-white',
    'arch-c-translucent',
    'arch-c-transparent',
    'arch-c-white',
    'arch-cxsynchro-translucent',
    'arch-cxsynchro-transparent',
    'arch-cxsynchro-white',
    'arch-d-translucent',
    'arch-d-transparent',
    'arch-d-white',
    'arch-dxsynchro-translucent',
    'arch-dxsynchro-transparent',
    'arch-dxsynchro-white',
    'arch-e-translucent',
    'arch-e-transparent',
    'arch-e-white',
    'arch-exsynchro-translucent',
    'arch-exsynchro-transparent',
    'arch-exsynchro-white',
    'auto-fixed-size-translucent',
    'auto-fixed-size-transparent',
    'auto-fixed-size-white',
    'auto-synchro-translucent',
    'auto-synchro-transparent',
    'auto-synchro-white',
    'auto-translucent',
    'auto-transparent',
    'auto-white',
    'axsynchro-translucent',
    'axsynchro-transparent',
    'axsynchro-white',
    'b-translucent',
    'b-transparent',
    'b-white',
    'bxsynchro-translucent',
    'bxsynchro-transparent',
    'bxsynchro-white',
    'c-translucent',
    'c-transparent',
    'c-white',
    'custom1',
    'custom2',
    'custom3',
    'custom4',
    'custom5',
    'custom6',
    'custom7',
    'custom8',
    'custom9',
    'custom10',
    'cxsynchro-translucent',
    'cxsynchro-transparent',
    'cxsynchro-white',
    'd-translucent',
    'd-transparent',
    'd-white',
    'default',
    'dxsynchro-translucent',
    'dxsynchro-transparent',
    'dxsynchro-white',
    'e-translucent',
    'e-transparent',
    'e-white',
    'executive-white',
    'exsynchro-translucent',
    'exsynchro-transparent',
    'exsynchro-white',
    'folio-white',
    'invoice-white',
    'iso-a0-translucent',
    'iso-a0-transparent',
    'iso-a0-white',
    'iso-a0xsynchro-translucent',
    'iso-a0xsynchro-transparent',
    'iso-a0xsynchro-white',
    'iso-a1-translucent',
    'iso-a1-transparent',
    'iso-a1-white',
    'iso-a1x3-translucent',
    'iso-a1x3-transparent',
    'iso-a1x3-white',
    'iso-a1x4- translucent',
    'iso-a1x4-transparent',
    'iso-a1x4-white',
    'iso-a1xsynchro-translucent',
    'iso-a1xsynchro-transparent',
    'iso-a1xsynchro-white',
    'iso-a2-translucent',
    'iso-a2-transparent',
    'iso-a2-white',
    'iso-a2x3-translucent',
    'iso-a2x3-transparent',
    'iso-a2x3-white',
    'iso-a2x4-translucent',
    'iso-a2x4-transparent',
    'iso-a2x4-white',
    'iso-a2x5-translucent',
    'iso-a2x5-transparent',
    'iso-a2x5-white',
    'iso-a2xsynchro-translucent',
    'iso-a2xsynchro-transparent',
    'iso-a2xsynchro-white',
    'iso-a3-colored',
    'iso-a3-translucent',
    'iso-a3-transparent',
    'iso-a3-white',
    'iso-a3x3-translucent',
    'iso-a3x3-transparent',
    'iso-a3x3-white',
    'iso-a3x4-translucent',
    'iso-a3x4-transparent',
    'iso-a3x4-white',
    'iso-a3x5-translucent',
    'iso-a3x5-transparent',
    'iso-a3x5-white',
    'iso-a3x6-translucent',
    'iso-a3x6-transparent',
    'iso-a3x6-white',
    'iso-a3x7-translucent',
    'iso-a3x7-transparent',
    'iso-a3x7-white',
    'iso-a3xsynchro-translucent',
    'iso-a3xsynchro-transparent',
    'iso-a3xsynchro-white',
    'iso-a4-colored',
    'iso-a4-translucent',
    'iso-a4-transparent',
    'iso-a4-white',
    'iso-a4x3-translucent',
    'iso-a4x3-transparent',
    'iso-a4x3-white',
    'iso-a4x4-translucent',
    'iso-a4x4-transparent',
    'iso-a4x4-white',
    'iso-a4x5-translucent',
    'iso-a4x5-transparent',
    'iso-a4x5-white',
    'iso-a4x6-translucent',
    'iso-a4x6-transparent',
    'iso-a4x6-white',
    'iso-a4x7-translucent',
    'iso-a4x7-transparent',
    'iso-a4x7-white',
    'iso-a4x8-translucent',
    'iso-a4x8-transparent',
    'iso-a4x8-white',
    'iso-a4x9-translucent',
    'iso-a4x9-transparent',
    'iso-a4x9-white',
    'iso-a4xsynchro-translucent',
    'iso-a4xsynchro-transparent',
    'iso-a4xsynchro-white',
    'iso-a5-colored',
    'iso-a5-translucent',
    'iso-a5-transparent',
    'iso-a5-white',
    'iso-a6-white',
    'iso-a7-white',
    'iso-a8-white',
    'iso-a9-white',
    'iso-a10-white',
    'iso-b0-white',
    'iso-b1-white',
    'iso-b2-white',
    'iso-b3-white',
    'iso-b4-colored',
    'iso-b4-white',
    'iso-b5-colored',
    'iso-b5-white',
    'iso-b6-white',
    'iso-b7-white',
    'iso-b8-white',
    'iso-b9-white',
    'iso-b10-white',
    'jis-b0-translucent',
    'jis-b0-transparent',
    'jis-b0-white',
    'jis-b1-translucent',
    'jis-b1-transparent',
    'jis-b1-white',
    'jis-b2-translucent',
    'jis-b2-transparent',
    'jis-b2-white',
    'jis-b3-translucent',
    'jis-b3-transparent',
    'jis-b3-white',
    'jis-b4-colored',
    'jis-b4-translucent',
    'jis-b4-transparent',
    'jis-b4-white',
    'jis-b5-colored',
    'jis-b5-translucent',
    'jis-b5-transparent',
    'jis-b5-white',
    'jis-b6-white',
    'jis-b7-white',
    'jis-b8-white',
    'jis-b9-white',
    'jis-b10-white',
    'ledger-white',
    'na-legal-colored',
    'na-legal-white',
    'na-letter-colored',
    'na-letter-transparent',
    'na-letter-white',
    'quarto-white'
  ],
  'media type': [
    'bond',
    'heavyweight',
    'labels',
    'letterhead',
    'plain',
    'pre-printed',
    'pre-punched',
    'recycled',
    'transparency'
  ],
  'input tray': [
    'bottom',
    'by-pass-tray',
    'envelope',
    'large-capacity',
    'main',
    'manual',
    'middle',
    'side',
    'top',
    'tray-1',
    'tray-2',
    'tray-3',
    'tray-4',
    'tray-5',
    'tray-6',
    'tray-7',
    'tray-8',
    'tray-9',
    'tray-10'
  ],
  'envelope name': [
    'iso-b4-envelope',
    'iso-b5-envelope',
    'iso-c3-envelope',
    'iso-c4-envelope',
    'iso-c5-envelope',
    'iso-c6-envelope',
    'iso-designated-long-envelope',
    'monarch-envelope',
    'na-6x9-envelope',
    'na-7x9-envelope',
    'na-9x11-envelope',
    'na-9x12-envelope',
    'na-10x13-envelope',
    'na-10x14-envelope',
    'na-10x15-envelope',
    'na-number-9-envelope',
    'na-number-10-envelope'
  ]
};

// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
const jobTemplateAttributeNames = Object.keys(attributes['Job Template']);
// @ts-expect-error ts-migrate(2339) FIXME: Property 'Operation' does not exist on type '{}'.
const jobTemplateAndOperationAttributeNames = jobTemplateAttributeNames.concat(Object.keys(attributes.Operation));
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
const printerAttributeNames = Object.keys(attributes['Job Template']).concat(['none']);
const mediaNameOrSize = media['media name'].concat(media['size name']);

// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'keywords'.
const keywords = {};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'compression' does not exist on type '{}'... Remove this comment to see the full error message
keywords.compression = keyword(['compress', 'deflate', 'gzip', 'none']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['compression-supported'] = setofKeyword(keywords.compression);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['cover-back-supported'] = setofKeyword(['cover-type', 'media', 'media-col']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['cover-front-supported'] = setofKeyword(keywords['cover-back-supported']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['cover-type'] = keyword(['no-cover', 'print-back', 'print-both', 'print-front', 'print-none']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['document-digital-signature'] = keyword(['dss', 'none', 'pgp', 'smime', 'xmldsig']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['document-digital-signature-default'] = keyword(keywords['document-digital-signature']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['document-digital-signature-supported'] = setofKeyword(keywords['document-digital-signature']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['document-format-details-supported'] = setofKeyword([
  'document-format',
  'document-format-device-id',
  'document-format-version',
  'document-natural-language',
  'document-source-application-name',
  'document-source-application-version',
  'document-source-os-name',
  'document-source-os-version'
]);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['document-format-varying-attributes'] = setofKeyword(
  // Any Printer attribute keyword name
  printerAttributeNames
);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['document-state-reasons'] = setofKeyword([
  'aborted-by-system',
  'canceled-at-device',
  'canceled-by-operator',
  'canceled-by-user',
  'completed-successfully',
  'completed-with-errors',
  'completed-with-warnings',
  'compression-error',
  'data-insufficient',
  'digital-signature-did-not-verify',
  'digital-signature-type-not-supported',
  'digital-signature-wait',
  'document-access-error',
  'document-format-error',
  'document-password-error',
  'document-permission-error',
  'document-security-error',
  'document-unprintable-error',
  'errors-detected',
  'incoming',
  'interpreting',
  'none',
  'outgoing',
  'printing',
  'processing-to-stop-point',
  'queued',
  'queued-for-marker',
  'queued-in-device',
  'resources-are-not-ready',
  'resources-are-not-supported',
  'submission-interrupted',
  'transforming',
  'unsupported-compression',
  'unsupported-document-format',
  'warnings-detected'
]);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['feed-orientation'] = keyword(['long-edge-first', 'short-edge-first']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['feed-orientation-supported'] = setofKeyword(keywords['feed-orientation']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['finishings-col-supported'] = setofKeyword(['finishing-template', 'stitching']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['identify-actions'] = setofKeyword(['display', 'flash', 'sound', 'speak']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['identify-actions-default'] = setofKeyword(keywords['identify-actions']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['identify-actions-supported'] = setofKeyword(keywords['identify-actions']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['imposition-template'] = keywordName(['none', 'signature']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['ipp-features-supported'] = setofKeyword([
  'document-object',
  'ipp-everywhere',
  'job-save',
  'none',
  'page-overrides',
  'proof-print',
  'subscription-object'
]);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['ipp-versions-supported'] = setofKeyword(['1.0', '1.1', '2.0', '2.1', '2.2']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['job-accounting-sheets-type'] = keywordName(['none', 'standard']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['job-cover-back-supported'] = setofKeyword(keywords['cover-back-supported']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['job-cover-front-supported'] = setofKeyword(keywords['cover-front-supported']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['job-creation-attributes-supported'] = setofKeyword(
  //  Any Job Template attribute
  //  Any job creation Operation attribute keyword name
  jobTemplateAndOperationAttributeNames
);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['job-error-action'] = keyword(['abort-job', 'cancel-job', 'continue-job', 'suspend-job']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['job-error-action-default'] = keyword(keywords['job-error-action']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['job-error-action-supported'] = setofKeyword(keywords['job-error-action']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['job-error-sheet-type'] = keywordName(['none', 'standard']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['job-error-sheet-when'] = keyword(['always', 'on-error']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['job-finishings-col-supported'] = setofKeyword(keywords['finishings-col-supported']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['job-hold-until'] = keywordName([
  'day-time',
  'evening',
  'indefinite',
  'night',
  'no-hold',
  'second-shift',
  'third-shift',
  'weekend'
]);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['job-hold-until-default'] = keywordName(keywords['job-hold-until']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['job-hold-until-supported'] = setofKeywordName(keywords['job-hold-until']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['job-mandatory-attributes'] = setofKeyword(
  //  Any Job Template attribute
  jobTemplateAttributeNames
);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['job-password-encryption'] = keywordName(['md2', 'md4', 'md5', 'none', 'sha']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['job-password-encryption-supported'] = setofKeywordName(keywords['job-password-encryption']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['job-save-disposition-supported'] = setofKeyword(['save-disposition', 'save-info']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['job-settable-attributes-supported'] = setofKeyword(
  //  Any Job Template attribute
  jobTemplateAttributeNames
);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['job-sheets'] = keywordName([
  'first-print-stream-page',
  'job-both-sheet',
  'job-end-sheet',
  'job-start-sheet',
  'none',
  'standard'
]);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['job-sheets-default'] = keywordName(keywords['job-sheets']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['job-sheets-supported'] = setofKeywordName(keywords['job-sheets']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['job-spooling-supported'] = keyword(['automatic', 'spool', 'stream']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['job-state-reasons'] = setofKeyword([
  'aborted-by-system',
  'compression-error',
  'digital-signature-did-not-verify',
  'digital-signature-type-not-supported',
  'document-access-error',
  'document-format-error',
  'document-password-error',
  'document-permission-error',
  'document-security-error',
  'document-unprintable-error',
  'errors-detected',
  'job-canceled-at-device',
  'job-canceled-by-operator',
  'job-canceled-by-user',
  'job-completed-successfully',
  'job-completed-with-errors',
  'job-completed-with-warnings',
  'job-data-insufficient',
  'job-delay-output-until-specified',
  'job-digital-signature-wait',
  'job-hold-until-specified',
  'job-incoming',
  'job-interpreting',
  'job-outgoing',
  'job-password-wait',
  'job-printed-successfully',
  'job-printed-with-errors',
  'job-printed-with-warnings',
  'job-printing',
  'job-queued',
  'job-queued-for-marker',
  'job-restartable',
  'job-resuming',
  'job-saved-successfully',
  'job-saved-with-errors',
  'job-saved-with-warnings',
  'job-saving',
  'job-spooling',
  'job-streaming',
  'job-suspended',
  'job-suspended-by-operator',
  'job-suspended-by-system',
  'job-suspended-by-user',
  'job-suspending',
  'job-transforming',
  'none',
  'printer-stopped',
  'printer-stopped-partly',
  'processing-to-stop-point',
  'queued-in-device',
  'resources-are-not-ready',
  'resources-are-not-supported',
  'service-off-line',
  'submission-interrupted',
  'unsupported-compression',
  'unsupported-document-format',
  'warnings-detected'
]);

// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['marker-types'] = keywordName([
  'toner',
  'waste-toner',
  'ink',
  'ink-cartridge',
  'ink-ribbon',
  'waste-ink',
  'opc',
  'developer',
  'fuser-oil',
  'solid-wax',
  'ribbon-wax',
  'waste-wax',
  'fuser',
  'corona-wire',
  'fuser-oil-wick',
  'cleaner-unit',
  'fuser-cleaning-pad',
  'transfer-unit',
  'toner-cartridge',
  'fuser-oiler',
  'water',
  'waste-water',
  'binding-supply',
  'banding-supply',
  'stiching-wire',
  'shrink-wrap',
  'paper-wrap',
  'staples',
  'inserts',
  'covers'
]);

// @ts-expect-error ts-migrate(2339) FIXME: Property 'media' does not exist on type '{}'.
keywords.media = keywordName(
  // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
  [].concat(media['size name'], media['media name'], media['media type'], media['input tray'], media['envelope name'])
);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['media-back-coating'] = keywordName(['glossy', 'high-gloss', 'matte', 'none', 'satin', 'semi-gloss']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['media-back-coating-supported'] = setofKeywordName(keywords['media-back-coating']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['media-col-supported'] = setofKeyword([
  'media-bottom-margin',
  'media-left-margin',
  'media-right-margin',
  'media-size-name',
  'media-source',
  'media-top-margin'
]);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['media-color'] = keywordName([
  'blue',
  'buff',
  'goldenrod',
  'gray',
  'green',
  'ivory',
  'no-color',
  'orange',
  'pink',
  'red',
  'white',
  'yellow'
]);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['media-color-supported'] = setofKeywordName(keywords['media-color']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['media-default'] = keywordNameNovalue(keywords.media);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['media-front-coating'] = keywordName(keywords['media-back-coating']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['media-front-coating-supported'] = setofKeywordName(keywords['media-back-coating']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['media-grain'] = keywordName(['x-direction', 'y-direction']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['media-grain-supported'] = setofKeywordName(keywords['media-grain']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['media-input-tray-check'] = keywordName([media['input tray']]);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['media-input-tray-check-default'] = keywordName([media['input tray']]);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['media-input-tray-check-supported'] = setofKeywordName(media['input tray']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['media-key'] = keywordName(
  //  Any "media" media or size keyword value
  mediaNameOrSize
);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['media-key-supported'] = setofKeywordName([
  //  Any "media" media or size keyword value
  mediaNameOrSize
]);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['media-pre-printed'] = keywordName(['blank', 'letter-head', 'pre-printed']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['media-pre-printed-supported'] = keywordName(keywords['media-pre-printed']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['media-ready'] = setofKeywordName([
  //  Any "media" media or size keyword value
  mediaNameOrSize
]);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['media-recycled'] = keywordName(['none', 'standard']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['media-recycled-supported'] = keywordName(keywords['media-recycled']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['media-source'] = keywordName([
  'alternate',
  'alternate-roll',
  'auto',
  'bottom',
  'by-pass-tray',
  'center',
  'disc',
  'envelope',
  'hagaki',
  'large-capacity',
  'left',
  'main',
  'main-roll',
  'manual',
  'middle',
  'photo',
  'rear',
  'right',
  'roll-1',
  'roll-2',
  'roll-3',
  'roll-4',
  'roll-5',
  'roll-6',
  'roll-7',
  'roll-8',
  'roll-9',
  'roll-10',
  'side',
  'top',
  'tray-1',
  'tray-2',
  'tray-3',
  'tray-4',
  'tray-5',
  'tray-6',
  'tray-7',
  'tray-8',
  'tray-9',
  'tray-10',
  'tray-11',
  'tray-12',
  'tray-13',
  'tray-14',
  'tray-15',
  'tray-16',
  'tray-17',
  'tray-18',
  'tray-19',
  'tray-20'
]);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['media-source-feed-direction'] = keyword(keywords['feed-orientation']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['media-source-supported'] = setofKeywordName(keywords['media-source']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['media-supported'] = setofKeywordName(keywords.media);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['media-tooth'] = keywordName([
  'antique',
  'calendared',
  'coarse',
  'fine',
  'linen',
  'medium',
  'smooth',
  'stipple',
  'uncalendared',
  'vellum'
]);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['media-tooth-supported'] = setofKeywordName(keywords['media-tooth']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['media-type'] = keywordName([
  'aluminum',
  'back-print-film',
  'cardboard',
  'cardstock',
  'cd',
  'continuous',
  'continuous-long',
  'continuous-short',
  'corrugated-board',
  'disc',
  'double-wall',
  'dry-film',
  'dvd',
  'embossing-foil',
  'end-board',
  'envelope',
  'envelope-plain',
  'envelope-window',
  'film',
  'flexo-base',
  'flexo-photo-polymer',
  'flute',
  'foil',
  'full-cut-tabs',
  'gravure-cylinder',
  'image-setter-paper',
  'imaging-cylinder',
  'labels',
  'laminating-foil',
  'letterhead',
  'mounting-tape',
  'multi-layer',
  'multi-part-form',
  'other',
  'paper',
  'photographic',
  'photographic-film',
  'photographic-glossy',
  'photographic-high-gloss',
  'photographic-matte',
  'photographic-satin',
  'photographic-semi-gloss',
  'plate',
  'polyester',
  'pre-cut-tabs',
  'roll',
  'screen',
  'screen-paged',
  'self-adhesive',
  'shrink-foil',
  'single-face',
  'single-wall',
  'sleeve',
  'stationery',
  'stationery-coated',
  'stationery-fine',
  'stationery-heavyweight',
  'stationery-inkjet',
  'stationery-letterhead',
  'stationery-lightweight',
  'stationery-preprinted',
  'stationery-prepunched',
  'tab-stock',
  'tractor',
  'transparency',
  'triple-wall',
  'wet-film'
]);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['media-type-supported'] = setofKeywordName(keywords['media-type']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['multiple-document-handling'] = keyword([
  'separate-documents-collated-copies',
  'separate-documents-uncollated-copies',
  'single-document',
  'single-document-new-sheet'
]);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['multiple-document-handling-default'] = keyword(keywords['multiple-document-handling']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['multiple-document-handling-supported'] = setofKeyword(keywords['multiple-document-handling']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['multiple-operation-timeout-action'] = keyword(['abort-job', 'hold-job', 'process-job']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['notify-events'] = setofKeyword([
  'job-completed',
  'job-config-changed',
  'job-created',
  'job-progress',
  'job-state-changed',
  'job-stopped',
  'none',
  'printer-config-changed',
  'printer-finishings-changed',
  'printer-media-changed',
  'printer-queue-order-changed',
  'printer-restarted',
  'printer-shutdown',
  'printer-state-changed',
  'printer-stopped'
]);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['notify-events-default'] = setofKeyword(keywords['notify-events']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['notify-events-supported'] = setofKeyword(keywords['notify-events']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['notify-pull-method'] = keyword(['ippget']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['notify-pull-method-supported'] = setofKeyword(keywords['notify-pull-method']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['notify-subscribed-event'] = keyword(keywords['notify-events']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['output-bin'] = keywordName([
  'bottom',
  'center',
  'face-down',
  'face-up',
  'large-capacity',
  'left',
  'mailbox-1',
  'mailbox-2',
  'mailbox-3',
  'mailbox-4',
  'mailbox-5',
  'mailbox-6',
  'mailbox-7',
  'mailbox-8',
  'mailbox-9',
  'mailbox-10',
  'middle',
  'my-mailbox',
  'rear',
  'right',
  'side',
  'stacker-1',
  'stacker-2',
  'stacker-3',
  'stacker-4',
  'stacker-5',
  'stacker-6',
  'stacker-7',
  'stacker-8',
  'stacker-9',
  'stacker-10',
  'top',
  'tray-1',
  'tray-2',
  'tray-3',
  'tray-4',
  'tray-5',
  'tray-6',
  'tray-7',
  'tray-8',
  'tray-9',
  'tray-10'
]);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['job-accounting-output-bin'] = keywordName(keywords['output-bin']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['output-bin-default'] = keywordName(keywords['output-bin']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['output-bin-supported'] = setofKeywordName(keywords['output-bin']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['page-delivery'] = keyword([
  'reverse-order-face-down',
  'reverse-order-face-up',
  'same-order-face-down',
  'same-order-face-up',
  'system-specified'
]);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['page-delivery-default'] = keyword(keywords['page-delivery']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['page-delivery-supported'] = setofKeyword(keywords['page-delivery']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['page-order-received'] = keyword(['1-to-n-order', 'n-to-1-order']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['page-order-received-default'] = keyword(keywords['page-order-received']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['page-order-received-supported'] = setofKeyword(keywords['page-order-received']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['current-page-order'] = keyword(keywords['page-order-received']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['pdl-init-file-supported'] = setofKeyword([
  'pdl-init-file-entry',
  'pdl-init-file-location',
  'pdl-init-file-name'
]);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['pdl-override-supported'] = keyword(['attempted', 'guaranteed', 'not-attempted']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['presentation-direction-number-up'] = keyword([
  'tobottom-toleft',
  'tobottom-toright',
  'toleft-tobottom',
  'toleft-totop',
  'toright-tobottom',
  'toright-totop',
  'totop-toleft',
  'totop-toright'
]);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['presentation-direction-number-up-default'] = keyword(keywords['presentation-direction-number-up']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['presentation-direction-number-up-supported'] = setofKeyword(keywords['presentation-direction-number-up']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['print-color-mode'] = keyword([
  'auto',
  'bi-level',
  'color',
  'highlight',
  'monochrome',
  'process-bi-level',
  'process-monochrome'
]);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['print-color-mode-default'] = keyword(keywords['print-color-mode']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['print-color-mode-supported'] = setofKeyword(keywords['print-color-mode']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['print-content-optimize'] = keyword(['auto', 'graphic', 'photo', 'text', 'text-and-graphic']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['print-content-optimize-default'] = keyword(keywords['print-content-optimize']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['print-content-optimize-supported'] = setofKeyword(keywords['print-content-optimize']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['print-rendering-intent'] = keyword([
  'absolute',
  'auto',
  'perceptual',
  'relative',
  'relative-bpc',
  'saturation'
]);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['print-rendering-intent-default'] = keyword(keywords['print-rendering-intent']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['print-rendering-intent-supported'] = setofKeyword(keywords['print-rendering-intent']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['printer-get-attributes-supported'] = setofKeyword(
  //  Any Job Template attribute
  //  Any job creation Operation attribute keyword name
  jobTemplateAndOperationAttributeNames
);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['printer-mandatory-job-attributes'] = setofKeyword(
  //	Any Job Template attribute
  //	Any Operation attribute at the job level
  // this probably isn't quite right...
  jobTemplateAndOperationAttributeNames
);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['printer-settable-attributes-supported'] = setofKeyword(
  //  Any read-write Printer attribute keyword name
  printerAttributeNames
);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['printer-state-reasons'] = setofKeyword([
  'alert-removal-of-binary-change-entry',
  'bander-added',
  'bander-almost-empty',
  'bander-almost-full',
  'bander-at-limit',
  'bander-closed',
  'bander-configuration-change',
  'bander-cover-closed',
  'bander-cover-open',
  'bander-empty',
  'bander-full',
  'bander-interlock-closed',
  'bander-interlock-open',
  'bander-jam',
  'bander-life-almost-over',
  'bander-life-over',
  'bander-memory-exhausted',
  'bander-missing',
  'bander-motor-failure',
  'bander-near-limit',
  'bander-offline',
  'bander-opened',
  'bander-over-temperature',
  'bander-power-saver',
  'bander-recoverable-failure',
  'bander-recoverable-storage-error',
  'bander-removed',
  'bander-resource-added',
  'bander-resource-removed',
  'bander-thermistor-failure',
  'bander-timing-failure',
  'bander-turned-off',
  'bander-turned-on',
  'bander-under-temperature',
  'bander-unrecoverable-failure',
  'bander-unrecoverable-storage-error',
  'bander-warming-up',
  'binder-added',
  'binder-almost-empty',
  'binder-almost-full',
  'binder-at-limit',
  'binder-closed',
  'binder-configuration-change',
  'binder-cover-closed',
  'binder-cover-open',
  'binder-empty',
  'binder-full',
  'binder-interlock-closed',
  'binder-interlock-open',
  'binder-jam',
  'binder-life-almost-over',
  'binder-life-over',
  'binder-memory-exhausted',
  'binder-missing',
  'binder-motor-failure',
  'binder-near-limit',
  'binder-offline',
  'binder-opened',
  'binder-over-temperature',
  'binder-power-saver',
  'binder-recoverable-failure',
  'binder-recoverable-storage-error',
  'binder-removed',
  'binder-resource-added',
  'binder-resource-removed',
  'binder-thermistor-failure',
  'binder-timing-failure',
  'binder-turned-off',
  'binder-turned-on',
  'binder-under-temperature',
  'binder-unrecoverable-failure',
  'binder-unrecoverable-storage-error',
  'binder-warming-up',
  'cleaner-life-almost-over',
  'cleaner-life-over',
  'configuration-change',
  'connecting-to-device',
  'cover-open',
  'deactivated',
  'developer-empty',
  'developer-low',
  'die-cutter-added',
  'die-cutter-almost-empty',
  'die-cutter-almost-full',
  'die-cutter-at-limit',
  'die-cutter-closed',
  'die-cutter-configuration-change',
  'die-cutter-cover-closed',
  'die-cutter-cover-open',
  'die-cutter-empty',
  'die-cutter-full',
  'die-cutter-interlock-closed',
  'die-cutter-interlock-open',
  'die-cutter-jam',
  'die-cutter-life-almost-over',
  'die-cutter-life-over',
  'die-cutter-memory-exhausted',
  'die-cutter-missing',
  'die-cutter-motor-failure',
  'die-cutter-near-limit',
  'die-cutter-offline',
  'die-cutter-opened',
  'die-cutter-over-temperature',
  'die-cutter-power-saver',
  'die-cutter-recoverable-failure',
  'die-cutter-recoverable-storage-error',
  'die-cutter-removed',
  'die-cutter-resource-added',
  'die-cutter-resource-removed',
  'die-cutter-thermistor-failure',
  'die-cutter-timing-failure',
  'die-cutter-turned-off',
  'die-cutter-turned-on',
  'die-cutter-under-temperature',
  'die-cutter-unrecoverable-failure',
  'die-cutter-unrecoverable-storage-error',
  'die-cutter-warming-up',
  'door-open',
  'folder-added',
  'folder-almost-empty',
  'folder-almost-full',
  'folder-at-limit',
  'folder-closed',
  'folder-configuration-change',
  'folder-cover-closed',
  'folder-cover-open',
  'folder-empty',
  'folder-full',
  'folder-interlock-closed',
  'folder-interlock-open',
  'folder-jam',
  'folder-life-almost-over',
  'folder-life-over',
  'folder-memory-exhausted',
  'folder-missing',
  'folder-motor-failure',
  'folder-near-limit',
  'folder-offline',
  'folder-opened',
  'folder-over-temperature',
  'folder-power-saver',
  'folder-recoverable-failure',
  'folder-recoverable-storage-error',
  'folder-removed',
  'folder-resource-added',
  'folder-resource-removed',
  'folder-thermistor-failure',
  'folder-timing-failure',
  'folder-turned-off',
  'folder-turned-on',
  'folder-under-temperature',
  'folder-unrecoverable-failure',
  'folder-unrecoverable-storage-error',
  'folder-warming-up',
  'fuser-over-temp',
  'fuser-under-temp',
  'imprinter-added',
  'imprinter-almost-empty',
  'imprinter-almost-full',
  'imprinter-at-limit',
  'imprinter-closed',
  'imprinter-configuration-change',
  'imprinter-cover-closed',
  'imprinter-cover-open',
  'imprinter-empty',
  'imprinter-full',
  'imprinter-interlock-closed',
  'imprinter-interlock-open',
  'imprinter-jam',
  'imprinter-life-almost-over',
  'imprinter-life-over',
  'imprinter-memory-exhausted',
  'imprinter-missing',
  'imprinter-motor-failure',
  'imprinter-near-limit',
  'imprinter-offline',
  'imprinter-opened',
  'imprinter-over-temperature',
  'imprinter-power-saver',
  'imprinter-recoverable-failure',
  'imprinter-recoverable-storage-error',
  'imprinter-removed',
  'imprinter-resource-added',
  'imprinter-resource-removed',
  'imprinter-thermistor-failure',
  'imprinter-timing-failure',
  'imprinter-turned-off',
  'imprinter-turned-on',
  'imprinter-under-temperature',
  'imprinter-unrecoverable-failure',
  'imprinter-unrecoverable-storage-error',
  'imprinter-warming-up',
  'input-cannot-feed-size-selected',
  'input-manual-input-request',
  'input-media-color-change',
  'input-media-form-parts-change',
  'input-media-size-change',
  'input-media-type-change',
  'input-media-weight-change',
  'input-tray-elevation-failure',
  'input-tray-missing',
  'input-tray-position-failure',
  'inserter-added',
  'inserter-almost-empty',
  'inserter-almost-full',
  'inserter-at-limit',
  'inserter-closed',
  'inserter-configuration-change',
  'inserter-cover-closed',
  'inserter-cover-open',
  'inserter-empty',
  'inserter-full',
  'inserter-interlock-closed',
  'inserter-interlock-open',
  'inserter-jam',
  'inserter-life-almost-over',
  'inserter-life-over',
  'inserter-memory-exhausted',
  'inserter-missing',
  'inserter-motor-failure',
  'inserter-near-limit',
  'inserter-offline',
  'inserter-opened',
  'inserter-over-temperature',
  'inserter-power-saver',
  'inserter-recoverable-failure',
  'inserter-recoverable-storage-error',
  'inserter-removed',
  'inserter-resource-added',
  'inserter-resource-removed',
  'inserter-thermistor-failure',
  'inserter-timing-failure',
  'inserter-turned-off',
  'inserter-turned-on',
  'inserter-under-temperature',
  'inserter-unrecoverable-failure',
  'inserter-unrecoverable-storage-error',
  'inserter-warming-up',
  'interlock-closed',
  'interlock-open',
  'interpreter-cartridge-added',
  'interpreter-cartridge-deleted',
  'interpreter-complex-page-encountered',
  'interpreter-memory-decrease',
  'interpreter-memory-increase',
  'interpreter-resource-added',
  'interpreter-resource-deleted',
  'interpreter-resource-unavailable',
  'make-envelope-added',
  'make-envelope-almost-empty',
  'make-envelope-almost-full',
  'make-envelope-at-limit',
  'make-envelope-closed',
  'make-envelope-configuration-change',
  'make-envelope-cover-closed',
  'make-envelope-cover-open',
  'make-envelope-empty',
  'make-envelope-full',
  'make-envelope-interlock-closed',
  'make-envelope-interlock-open',
  'make-envelope-jam',
  'make-envelope-life-almost-over',
  'make-envelope-life-over',
  'make-envelope-memory-exhausted',
  'make-envelope-missing',
  'make-envelope-motor-failure',
  'make-envelope-near-limit',
  'make-envelope-offline',
  'make-envelope-opened',
  'make-envelope-over-temperature',
  'make-envelope-power-saver',
  'make-envelope-recoverable-failure',
  'make-envelope-recoverable-storage-error',
  'make-envelope-removed',
  'make-envelope-resource-added',
  'make-envelope-resource-removed',
  'make-envelope-thermistor-failure',
  'make-envelope-timing-failure',
  'make-envelope-turned-off',
  'make-envelope-turned-on',
  'make-envelope-under-temperature',
  'make-envelope-unrecoverable-failure',
  'make-envelope-unrecoverable-storage-error',
  'make-envelope-warming-up',
  'marker-adjusting-print-quality',
  'marker-developer-almost-empty',
  'marker-developer-empty',
  'marker-fuser-thermistor-failure',
  'marker-fuser-timing-failure',
  'marker-ink-almost-empty',
  'marker-ink-empty',
  'marker-print-ribbon-almost-empty',
  'marker-print-ribbon-empty',
  'marker-supply-empty',
  'marker-supply-low',
  'marker-toner-cartridge-missing',
  'marker-waste-almost-full',
  'marker-waste-full',
  'marker-waste-ink-receptacle-almost-full',
  'marker-waste-ink-receptacle-full',
  'marker-waste-toner-receptacle-almost-full',
  'marker-waste-toner-receptacle-full',
  'media-empty',
  'media-jam',
  'media-low',
  'media-needed',
  'media-path-cannot-duplex-media-selected',
  'media-path-media-tray-almost-full',
  'media-path-media-tray-full',
  'media-path-media-tray-missing',
  'moving-to-paused',
  'none',
  'opc-life-over',
  'opc-near-eol',
  'other',
  'output-area-almost-full',
  'output-area-full',
  'output-mailbox-select-failure',
  'output-tray-missing',
  'paused',
  'perforater-added',
  'perforater-almost-empty',
  'perforater-almost-full',
  'perforater-at-limit',
  'perforater-closed',
  'perforater-configuration-change',
  'perforater-cover-closed',
  'perforater-cover-open',
  'perforater-empty',
  'perforater-full',
  'perforater-interlock-closed',
  'perforater-interlock-open',
  'perforater-jam',
  'perforater-life-almost-over',
  'perforater-life-over',
  'perforater-memory-exhausted',
  'perforater-missing',
  'perforater-motor-failure',
  'perforater-near-limit',
  'perforater-offline',
  'perforater-opened',
  'perforater-over-temperature',
  'perforater-power-saver',
  'perforater-recoverable-failure',
  'perforater-recoverable-storage-error',
  'perforater-removed',
  'perforater-resource-added',
  'perforater-resource-removed',
  'perforater-thermistor-failure',
  'perforater-timing-failure',
  'perforater-turned-off',
  'perforater-turned-on',
  'perforater-under-temperature',
  'perforater-unrecoverable-failure',
  'perforater-unrecoverable-storage-error',
  'perforater-warming-up',
  'power-down',
  'power-up',
  'printer-manual-reset',
  'printer-nms-reset',
  'printer-ready-to-print',
  'puncher-added',
  'puncher-almost-empty',
  'puncher-almost-full',
  'puncher-at-limit',
  'puncher-closed',
  'puncher-configuration-change',
  'puncher-cover-closed',
  'puncher-cover-open',
  'puncher-empty',
  'puncher-full',
  'puncher-interlock-closed',
  'puncher-interlock-open',
  'puncher-jam',
  'puncher-life-almost-over',
  'puncher-life-over',
  'puncher-memory-exhausted',
  'puncher-missing',
  'puncher-motor-failure',
  'puncher-near-limit',
  'puncher-offline',
  'puncher-opened',
  'puncher-over-temperature',
  'puncher-power-saver',
  'puncher-recoverable-failure',
  'puncher-recoverable-storage-error',
  'puncher-removed',
  'puncher-resource-added',
  'puncher-resource-removed',
  'puncher-thermistor-failure',
  'puncher-timing-failure',
  'puncher-turned-off',
  'puncher-turned-on',
  'puncher-under-temperature',
  'puncher-unrecoverable-failure',
  'puncher-unrecoverable-storage-error',
  'puncher-warming-up',
  'separation-cutter-added',
  'separation-cutter-almost-empty',
  'separation-cutter-almost-full',
  'separation-cutter-at-limit',
  'separation-cutter-closed',
  'separation-cutter-configuration-change',
  'separation-cutter-cover-closed',
  'separation-cutter-cover-open',
  'separation-cutter-empty',
  'separation-cutter-full',
  'separation-cutter-interlock-closed',
  'separation-cutter-interlock-open',
  'separation-cutter-jam',
  'separation-cutter-life-almost-over',
  'separation-cutter-life-over',
  'separation-cutter-memory-exhausted',
  'separation-cutter-missing',
  'separation-cutter-motor-failure',
  'separation-cutter-near-limit',
  'separation-cutter-offline',
  'separation-cutter-opened',
  'separation-cutter-over-temperature',
  'separation-cutter-power-saver',
  'separation-cutter-recoverable-failure',
  'separation-cutter-recoverable-storage-error',
  'separation-cutter-removed',
  'separation-cutter-resource-added',
  'separation-cutter-resource-removed',
  'separation-cutter-thermistor-failure',
  'separation-cutter-timing-failure',
  'separation-cutter-turned-off',
  'separation-cutter-turned-on',
  'separation-cutter-under-temperature',
  'separation-cutter-unrecoverable-failure',
  'separation-cutter-unrecoverable-storage-error',
  'separation-cutter-warming-up',
  'sheet-rotator-added',
  'sheet-rotator-almost-empty',
  'sheet-rotator-almost-full',
  'sheet-rotator-at-limit',
  'sheet-rotator-closed',
  'sheet-rotator-configuration-change',
  'sheet-rotator-cover-closed',
  'sheet-rotator-cover-open',
  'sheet-rotator-empty',
  'sheet-rotator-full',
  'sheet-rotator-interlock-closed',
  'sheet-rotator-interlock-open',
  'sheet-rotator-jam',
  'sheet-rotator-life-almost-over',
  'sheet-rotator-life-over',
  'sheet-rotator-memory-exhausted',
  'sheet-rotator-missing',
  'sheet-rotator-motor-failure',
  'sheet-rotator-near-limit',
  'sheet-rotator-offline',
  'sheet-rotator-opened',
  'sheet-rotator-over-temperature',
  'sheet-rotator-power-saver',
  'sheet-rotator-recoverable-failure',
  'sheet-rotator-recoverable-storage-error',
  'sheet-rotator-removed',
  'sheet-rotator-resource-added',
  'sheet-rotator-resource-removed',
  'sheet-rotator-thermistor-failure',
  'sheet-rotator-timing-failure',
  'sheet-rotator-turned-off',
  'sheet-rotator-turned-on',
  'sheet-rotator-under-temperature',
  'sheet-rotator-unrecoverable-failure',
  'sheet-rotator-unrecoverable-storage-error',
  'sheet-rotator-warming-up',
  'shutdown',
  'slitter-added',
  'slitter-almost-empty',
  'slitter-almost-full',
  'slitter-at-limit',
  'slitter-closed',
  'slitter-configuration-change',
  'slitter-cover-closed',
  'slitter-cover-open',
  'slitter-empty',
  'slitter-full',
  'slitter-interlock-closed',
  'slitter-interlock-open',
  'slitter-jam',
  'slitter-life-almost-over',
  'slitter-life-over',
  'slitter-memory-exhausted',
  'slitter-missing',
  'slitter-motor-failure',
  'slitter-near-limit',
  'slitter-offline',
  'slitter-opened',
  'slitter-over-temperature',
  'slitter-power-saver',
  'slitter-recoverable-failure',
  'slitter-recoverable-storage-error',
  'slitter-removed',
  'slitter-resource-added',
  'slitter-resource-removed',
  'slitter-thermistor-failure',
  'slitter-timing-failure',
  'slitter-turned-off',
  'slitter-turned-on',
  'slitter-under-temperature',
  'slitter-unrecoverable-failure',
  'slitter-unrecoverable-storage-error',
  'slitter-warming-up',
  'spool-area-full',
  'stacker-added',
  'stacker-almost-empty',
  'stacker-almost-full',
  'stacker-at-limit',
  'stacker-closed',
  'stacker-configuration-change',
  'stacker-cover-closed',
  'stacker-cover-open',
  'stacker-empty',
  'stacker-full',
  'stacker-interlock-closed',
  'stacker-interlock-open',
  'stacker-jam',
  'stacker-life-almost-over',
  'stacker-life-over',
  'stacker-memory-exhausted',
  'stacker-missing',
  'stacker-motor-failure',
  'stacker-near-limit',
  'stacker-offline',
  'stacker-opened',
  'stacker-over-temperature',
  'stacker-power-saver',
  'stacker-recoverable-failure',
  'stacker-recoverable-storage-error',
  'stacker-removed',
  'stacker-resource-added',
  'stacker-resource-removed',
  'stacker-thermistor-failure',
  'stacker-timing-failure',
  'stacker-turned-off',
  'stacker-turned-on',
  'stacker-under-temperature',
  'stacker-unrecoverable-failure',
  'stacker-unrecoverable-storage-error',
  'stacker-warming-up',
  'stapler-added',
  'stapler-almost-empty',
  'stapler-almost-full',
  'stapler-at-limit',
  'stapler-closed',
  'stapler-configuration-change',
  'stapler-cover-closed',
  'stapler-cover-open',
  'stapler-empty',
  'stapler-full',
  'stapler-interlock-closed',
  'stapler-interlock-open',
  'stapler-jam',
  'stapler-life-almost-over',
  'stapler-life-over',
  'stapler-memory-exhausted',
  'stapler-missing',
  'stapler-motor-failure',
  'stapler-near-limit',
  'stapler-offline',
  'stapler-opened',
  'stapler-over-temperature',
  'stapler-power-saver',
  'stapler-recoverable-failure',
  'stapler-recoverable-storage-error',
  'stapler-removed',
  'stapler-resource-added',
  'stapler-resource-removed',
  'stapler-thermistor-failure',
  'stapler-timing-failure',
  'stapler-turned-off',
  'stapler-turned-on',
  'stapler-under-temperature',
  'stapler-unrecoverable-failure',
  'stapler-unrecoverable-storage-error',
  'stapler-warming-up',
  'stitcher-added',
  'stitcher-almost-empty',
  'stitcher-almost-full',
  'stitcher-at-limit',
  'stitcher-closed',
  'stitcher-configuration-change',
  'stitcher-cover-closed',
  'stitcher-cover-open',
  'stitcher-empty',
  'stitcher-full',
  'stitcher-interlock-closed',
  'stitcher-interlock-open',
  'stitcher-jam',
  'stitcher-life-almost-over',
  'stitcher-life-over',
  'stitcher-memory-exhausted',
  'stitcher-missing',
  'stitcher-motor-failure',
  'stitcher-near-limit',
  'stitcher-offline',
  'stitcher-opened',
  'stitcher-over-temperature',
  'stitcher-power-saver',
  'stitcher-recoverable-failure',
  'stitcher-recoverable-storage-error',
  'stitcher-removed',
  'stitcher-resource-added',
  'stitcher-resource-removed',
  'stitcher-thermistor-failure',
  'stitcher-timing-failure',
  'stitcher-turned-off',
  'stitcher-turned-on',
  'stitcher-under-temperature',
  'stitcher-unrecoverable-failure',
  'stitcher-unrecoverable-storage-error',
  'stitcher-warming-up',
  'stopped-partly',
  'stopping',
  'subunit-added',
  'subunit-almost-empty',
  'subunit-almost-full',
  'subunit-at-limit',
  'subunit-closed',
  'subunit-empty',
  'subunit-full',
  'subunit-life-almost-over',
  'subunit-life-over',
  'subunit-memory-exhausted',
  'subunit-missing',
  'subunit-motor-failure',
  'subunit-near-limit',
  'subunit-offline',
  'subunit-opened',
  'subunit-over-temperature',
  'subunit-power-saver',
  'subunit-recoverable-failure',
  'subunit-recoverable-storage-error',
  'subunit-removed',
  'subunit-resource-added',
  'subunit-resource-removed',
  'subunit-thermistor-failure',
  'subunit-timing-Failure',
  'subunit-turned-off',
  'subunit-turned-on',
  'subunit-under-temperature',
  'subunit-unrecoverable-failure',
  'subunit-unrecoverable-storage-error',
  'subunit-warming-up',
  'timed-out',
  'toner-empty',
  'toner-low',
  'trimmer-added',
  'trimmer-added',
  'trimmer-almost-empty',
  'trimmer-almost-empty',
  'trimmer-almost-full',
  'trimmer-almost-full',
  'trimmer-at-limit',
  'trimmer-at-limit',
  'trimmer-closed',
  'trimmer-closed',
  'trimmer-configuration-change',
  'trimmer-configuration-change',
  'trimmer-cover-closed',
  'trimmer-cover-closed',
  'trimmer-cover-open',
  'trimmer-cover-open',
  'trimmer-empty',
  'trimmer-empty',
  'trimmer-full',
  'trimmer-full',
  'trimmer-interlock-closed',
  'trimmer-interlock-closed',
  'trimmer-interlock-open',
  'trimmer-interlock-open',
  'trimmer-jam',
  'trimmer-jam',
  'trimmer-life-almost-over',
  'trimmer-life-almost-over',
  'trimmer-life-over',
  'trimmer-life-over',
  'trimmer-memory-exhausted',
  'trimmer-memory-exhausted',
  'trimmer-missing',
  'trimmer-missing',
  'trimmer-motor-failure',
  'trimmer-motor-failure',
  'trimmer-near-limit',
  'trimmer-near-limit',
  'trimmer-offline',
  'trimmer-offline',
  'trimmer-opened',
  'trimmer-opened',
  'trimmer-over-temperature',
  'trimmer-over-temperature',
  'trimmer-power-saver',
  'trimmer-power-saver',
  'trimmer-recoverable-failure',
  'trimmer-recoverable-failure',
  'trimmer-recoverable-storage-error',
  'trimmer-removed',
  'trimmer-resource-added',
  'trimmer-resource-removed',
  'trimmer-thermistor-failure',
  'trimmer-timing-failure',
  'trimmer-turned-off',
  'trimmer-turned-on',
  'trimmer-under-temperature',
  'trimmer-unrecoverable-failure',
  'trimmer-unrecoverable-storage-error',
  'trimmer-warming-up',
  'unknown',
  'wrapper-added',
  'wrapper-almost-empty',
  'wrapper-almost-full',
  'wrapper-at-limit',
  'wrapper-closed',
  'wrapper-configuration-change',
  'wrapper-cover-closed',
  'wrapper-cover-open',
  'wrapper-empty',
  'wrapper-full',
  'wrapper-interlock-closed',
  'wrapper-interlock-open',
  'wrapper-jam',
  'wrapper-life-almost-over',
  'wrapper-life-over',
  'wrapper-memory-exhausted',
  'wrapper-missing',
  'wrapper-motor-failure',
  'wrapper-near-limit',
  'wrapper-offline',
  'wrapper-opened',
  'wrapper-over-temperature',
  'wrapper-power-saver',
  'wrapper-recoverable-failure',
  'wrapper-recoverable-storage-error',
  'wrapper-removed',
  'wrapper-resource-added',
  'wrapper-resource-removed',
  'wrapper-thermistor-failure',
  'wrapper-timing-failure',
  'wrapper-turned-off',
  'wrapper-turned-on',
  'wrapper-under-temperature',
  'wrapper-unrecoverable-failure',
  'wrapper-unrecoverable-storage-error',
  'wrapper-warming-up'
]);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['proof-print-supported'] = setofKeyword(['media', 'media-col', 'proof-print-copies']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['pwg-raster-document-sheet-back'] = keyword(['flipped', 'manual-tumble', 'normal', 'rotated']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['pwg-raster-document-type-supported'] = setofKeyword([
  'adobe-rgb_8',
  'adobe-rgb_16',
  'black_1',
  'black_8',
  'black_16',
  'cmyk_8',
  'cmyk_16',
  'device1_8',
  'device1_16',
  'device2_8',
  'device2_16',
  'device3_8',
  'device3_16',
  'device4_8',
  'device4_16',
  'device5_8',
  'device5_16',
  'device6_8',
  'device6_16',
  'device7_8',
  'device7_16',
  'device8_8',
  'device8_16',
  'device9_8',
  'device9_16',
  'device10_8',
  'device10_16',
  'device11_8',
  'device11_16',
  'device12_8',
  'device12_16',
  'device13_8',
  'device13_16',
  'device14_8',
  'device14_16',
  'device15_8',
  'device15_16',
  'rgb_8',
  'rgb_16',
  'sgray_1',
  'sgray_8',
  'sgray_16',
  'srgb_8',
  'srgb_16'
]);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['requested-attributes'] = keyword([
  'all',
  'document-description',
  'document-template',
  'job-description',
  'job-template',
  'printer-description',
  'subscription-description',
  'subscription-template'
]);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['save-disposition'] = keyword(['none', 'print-save', 'save-only']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['save-disposition-supported'] = setofKeyword(keywords['save-disposition']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['save-info-supported'] = setofKeyword(['save-document-format', 'save-location', 'save-name']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['separator-sheets-type'] = keywordName(['both-sheets', 'end-sheet', 'none', 'slip-sheets', 'start-sheet']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['separator-sheets-type-supported'] = setofKeywordName(keywords['separator-sheets-type']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['sheet-collate'] = keyword(['collated', 'uncollated']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['sheet-collate-default'] = keyword(keywords['sheet-collate']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['sheet-collate-supported'] = setofKeyword(keywords['sheet-collate']);
// @ts-expect-error ts-migrate(2339) FIXME: Property 'sides' does not exist on type '{}'.
keywords.sides = keyword(['one-sided', 'two-sided-long-edge', 'two-sided-short-edge']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['sides-default'] = keyword(keywords.sides);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['sides-supported'] = setofKeyword(keywords.sides);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['stitching-reference-edge'] = keyword(['bottom', 'left', 'right', 'top']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['stitching-reference-edge-supported'] = setofKeyword(keywords['stitching-reference-edge']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['stitching-supported'] = setofKeyword(['stitching-locations', 'stitching-offset', 'stitching-reference-edge']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['uri-authentication-supported'] = setofKeyword([
  'basic',
  'certificate',
  'digest',
  'negotiate',
  'none',
  'requesting-user-name'
]);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['uri-security-supported'] = setofKeyword(['none', 'ssl3', 'tls']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['which-jobs'] = keyword([
  'aborted',
  'all',
  'canceled',
  'completed',
  'not-completed',
  'pending',
  'pending-held',
  'processing',
  'processing-stopped',
  'proof-print',
  'saved'
]);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['which-jobs-supported'] = setofKeyword(keywords['which-jobs']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['x-image-position'] = keyword(['center', 'left', 'none', 'right']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['x-image-position-default'] = keyword(keywords['x-image-position']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['x-image-position-supported'] = setofKeyword(keywords['x-image-position']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['xri-authentication-supported'] = setofKeyword([
  'basic',
  'certificate',
  'digest',
  'none',
  'requesting-user-name'
]);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['xri-security-supported'] = setofKeyword(['none', 'ssl3', 'tls']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['y-image-position'] = keyword(['bottom', 'center', 'none', 'top']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['y-image-position-default'] = keyword(keywords['y-image-position']);
// @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
keywords['y-image-position-supported'] = setofKeyword(keywords['y-image-position']);

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = keywords;
