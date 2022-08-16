import * as $ from "@manahippo/move-to-ts";
import {AptosDataCache, AptosParserRepo, DummyCache, AptosLocalCache} from "@manahippo/move-to-ts";
import {U8, U64, U128} from "@manahippo/move-to-ts";
import {u8, u64, u128} from "@manahippo/move-to-ts";
import {TypeParamDeclType, FieldDeclType} from "@manahippo/move-to-ts";
import {AtomicTypeTag, StructTag, TypeTag, VectorTag, SimpleStructTag} from "@manahippo/move-to-ts";
import {HexString, AptosClient, AptosAccount} from "aptos";
import * as Aptos_framework from "../aptos_framework";
import * as Std from "../std";
import * as Coin_list from "./coin_list";
export const packageName = "CoinList";
export const moduleAddress = new HexString("0xf70ac33c984f8b7bead655ad239d246f1c0e3ca55fe0b8bfc119aa529c4630e8");
export const moduleName = "devnet_coins";



export class CoinCaps 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "CoinCaps";
  static typeParameters: TypeParamDeclType[] = [
    { name: "T", isPhantom: true }
  ];
  static fields: FieldDeclType[] = [
  { name: "mint", typeTag: new StructTag(new HexString("0x1"), "coin", "MintCapability", [new $.TypeParamIdx(0)]) },
  { name: "burn", typeTag: new StructTag(new HexString("0x1"), "coin", "BurnCapability", [new $.TypeParamIdx(0)]) }];

  mint: Aptos_framework.Coin.MintCapability;
  burn: Aptos_framework.Coin.BurnCapability;

  constructor(proto: any, public typeTag: TypeTag) {
    this.mint = proto['mint'] as Aptos_framework.Coin.MintCapability;
    this.burn = proto['burn'] as Aptos_framework.Coin.BurnCapability;
  }

  static CoinCapsParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : CoinCaps {
    const proto = $.parseStructProto(data, typeTag, repo, CoinCaps);
    return new CoinCaps(proto, typeTag);
  }

  static async load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]) {
    const result = await repo.loadResource(client, address, CoinCaps, typeParams);
    return result as unknown as CoinCaps;
  }
  static async loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]) {
    const result = await app.repo.loadResource(app.client, address, CoinCaps, typeParams);
    await result.loadFullState(app)
    return result as unknown as CoinCaps;
  }
  static makeTag($p: TypeTag[]): StructTag {
    return new StructTag(moduleAddress, moduleName, "CoinCaps", $p);
  }
  async loadFullState(app: $.AppType) {
    await this.mint.loadFullState(app);
    await this.burn.loadFullState(app);
    this.__app = app;
  }

}

export class DevnetBNB 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "DevnetBNB";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  ];

  constructor(proto: any, public typeTag: TypeTag) {

  }

  static DevnetBNBParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : DevnetBNB {
    const proto = $.parseStructProto(data, typeTag, repo, DevnetBNB);
    return new DevnetBNB(proto, typeTag);
  }

  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "DevnetBNB", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}

export class DevnetBTC 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "DevnetBTC";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  ];

  constructor(proto: any, public typeTag: TypeTag) {

  }

  static DevnetBTCParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : DevnetBTC {
    const proto = $.parseStructProto(data, typeTag, repo, DevnetBTC);
    return new DevnetBTC(proto, typeTag);
  }

  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "DevnetBTC", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}

export class DevnetETH 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "DevnetETH";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  ];

  constructor(proto: any, public typeTag: TypeTag) {

  }

  static DevnetETHParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : DevnetETH {
    const proto = $.parseStructProto(data, typeTag, repo, DevnetETH);
    return new DevnetETH(proto, typeTag);
  }

  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "DevnetETH", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}

export class DevnetSOL 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "DevnetSOL";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  ];

  constructor(proto: any, public typeTag: TypeTag) {

  }

  static DevnetSOLParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : DevnetSOL {
    const proto = $.parseStructProto(data, typeTag, repo, DevnetSOL);
    return new DevnetSOL(proto, typeTag);
  }

  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "DevnetSOL", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}

export class DevnetUSDC 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "DevnetUSDC";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  ];

  constructor(proto: any, public typeTag: TypeTag) {

  }

  static DevnetUSDCParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : DevnetUSDC {
    const proto = $.parseStructProto(data, typeTag, repo, DevnetUSDC);
    return new DevnetUSDC(proto, typeTag);
  }

  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "DevnetUSDC", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}

export class DevnetUSDT 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "DevnetUSDT";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  ];

  constructor(proto: any, public typeTag: TypeTag) {

  }

  static DevnetUSDTParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : DevnetUSDT {
    const proto = $.parseStructProto(data, typeTag, repo, DevnetUSDT);
    return new DevnetUSDT(proto, typeTag);
  }

  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "DevnetUSDT", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}
export function deploy_ (
  admin: HexString,
  $c: AptosDataCache,
): void {
  init_coin_(admin, [u8("66"), u8("105"), u8("116"), u8("99"), u8("111"), u8("105"), u8("110")], [u8("66"), u8("84"), u8("67")], $c, [new SimpleStructTag(DevnetBTC)]);
  init_coin_(admin, [u8("66"), u8("78"), u8("66")], [u8("66"), u8("78"), u8("66")], $c, [new SimpleStructTag(DevnetBNB)]);
  init_coin_(admin, [u8("69"), u8("116"), u8("104"), u8("101"), u8("114"), u8("101"), u8("117"), u8("109")], [u8("69"), u8("84"), u8("72")], $c, [new SimpleStructTag(DevnetETH)]);
  init_coin_(admin, [u8("83"), u8("111"), u8("108"), u8("97"), u8("110"), u8("97")], [u8("83"), u8("79"), u8("76")], $c, [new SimpleStructTag(DevnetSOL)]);
  init_coin_(admin, [u8("85"), u8("83"), u8("68"), u8("32"), u8("67"), u8("111"), u8("105"), u8("110")], [u8("85"), u8("83"), u8("68"), u8("67")], $c, [new SimpleStructTag(DevnetUSDC)]);
  init_coin_(admin, [u8("84"), u8("101"), u8("116"), u8("104"), u8("101"), u8("114")], [u8("85"), u8("83"), u8("68"), u8("84")], $c, [new SimpleStructTag(DevnetUSDT)]);
  if (!Coin_list.is_registry_initialized_($c)) {
    Coin_list.initialize_(admin, $c);
  }
  else{
  }
  Coin_list.add_to_registry_by_signer_(admin, Std.String.utf8_([u8("66"), u8("105"), u8("116"), u8("99"), u8("111"), u8("105"), u8("110")], $c), Std.String.utf8_([u8("66"), u8("84"), u8("67")], $c), Std.String.utf8_([u8("98"), u8("105"), u8("116"), u8("99"), u8("111"), u8("105"), u8("110")], $c), Std.String.utf8_([u8("104"), u8("116"), u8("116"), u8("112"), u8("115"), u8("58"), u8("47"), u8("47"), u8("97"), u8("115"), u8("115"), u8("101"), u8("116"), u8("115"), u8("46"), u8("99"), u8("111"), u8("105"), u8("110"), u8("103"), u8("101"), u8("99"), u8("107"), u8("111"), u8("46"), u8("99"), u8("111"), u8("109"), u8("47"), u8("99"), u8("111"), u8("105"), u8("110"), u8("115"), u8("47"), u8("105"), u8("109"), u8("97"), u8("103"), u8("101"), u8("115"), u8("47"), u8("49"), u8("47"), u8("115"), u8("109"), u8("97"), u8("108"), u8("108"), u8("47"), u8("98"), u8("105"), u8("116"), u8("99"), u8("111"), u8("105"), u8("110"), u8("46"), u8("112"), u8("110"), u8("103"), u8("63"), u8("49"), u8("53"), u8("52"), u8("55"), u8("48"), u8("51"), u8("51"), u8("53"), u8("55"), u8("57")], $c), Std.String.utf8_([u8("112"), u8("114"), u8("111"), u8("106"), u8("101"), u8("99"), u8("116"), u8("95"), u8("117"), u8("114"), u8("108")], $c), false, $c, [new SimpleStructTag(DevnetBTC)]);
  Coin_list.add_to_registry_by_signer_(admin, Std.String.utf8_([u8("66"), u8("78"), u8("66")], $c), Std.String.utf8_([u8("66"), u8("78"), u8("66")], $c), Std.String.utf8_([u8("98"), u8("105"), u8("110"), u8("97"), u8("110"), u8("99"), u8("101"), u8("99"), u8("111"), u8("105"), u8("110")], $c), Std.String.utf8_([u8("104"), u8("116"), u8("116"), u8("112"), u8("115"), u8("58"), u8("47"), u8("47"), u8("97"), u8("115"), u8("115"), u8("101"), u8("116"), u8("115"), u8("46"), u8("99"), u8("111"), u8("105"), u8("110"), u8("103"), u8("101"), u8("99"), u8("107"), u8("111"), u8("46"), u8("99"), u8("111"), u8("109"), u8("47"), u8("99"), u8("111"), u8("105"), u8("110"), u8("115"), u8("47"), u8("105"), u8("109"), u8("97"), u8("103"), u8("101"), u8("115"), u8("47"), u8("56"), u8("50"), u8("53"), u8("47"), u8("115"), u8("109"), u8("97"), u8("108"), u8("108"), u8("47"), u8("98"), u8("110"), u8("98"), u8("45"), u8("105"), u8("99"), u8("111"), u8("110"), u8("50"), u8("95"), u8("50"), u8("120"), u8("46"), u8("112"), u8("110"), u8("103"), u8("63"), u8("49"), u8("54"), u8("52"), u8("52"), u8("57"), u8("55"), u8("57"), u8("56"), u8("53"), u8("48")], $c), Std.String.utf8_([u8("112"), u8("114"), u8("111"), u8("106"), u8("101"), u8("99"), u8("116"), u8("95"), u8("117"), u8("114"), u8("108")], $c), false, $c, [new SimpleStructTag(DevnetBNB)]);
  Coin_list.add_to_registry_by_signer_(admin, Std.String.utf8_([u8("69"), u8("116"), u8("104"), u8("101"), u8("114"), u8("101"), u8("117"), u8("109")], $c), Std.String.utf8_([u8("69"), u8("84"), u8("72")], $c), Std.String.utf8_([u8("101"), u8("116"), u8("104"), u8("101"), u8("114"), u8("101"), u8("117"), u8("109")], $c), Std.String.utf8_([u8("104"), u8("116"), u8("116"), u8("112"), u8("115"), u8("58"), u8("47"), u8("47"), u8("97"), u8("115"), u8("115"), u8("101"), u8("116"), u8("115"), u8("46"), u8("99"), u8("111"), u8("105"), u8("110"), u8("103"), u8("101"), u8("99"), u8("107"), u8("111"), u8("46"), u8("99"), u8("111"), u8("109"), u8("47"), u8("99"), u8("111"), u8("105"), u8("110"), u8("115"), u8("47"), u8("105"), u8("109"), u8("97"), u8("103"), u8("101"), u8("115"), u8("47"), u8("50"), u8("55"), u8("57"), u8("47"), u8("115"), u8("109"), u8("97"), u8("108"), u8("108"), u8("47"), u8("101"), u8("116"), u8("104"), u8("101"), u8("114"), u8("101"), u8("117"), u8("109"), u8("46"), u8("112"), u8("110"), u8("103"), u8("63"), u8("49"), u8("53"), u8("57"), u8("53"), u8("51"), u8("52"), u8("56"), u8("56"), u8("56"), u8("48")], $c), Std.String.utf8_([u8("112"), u8("114"), u8("111"), u8("106"), u8("101"), u8("99"), u8("116"), u8("95"), u8("117"), u8("114"), u8("108")], $c), false, $c, [new SimpleStructTag(DevnetETH)]);
  Coin_list.add_to_registry_by_signer_(admin, Std.String.utf8_([u8("83"), u8("111"), u8("108"), u8("97"), u8("110"), u8("97")], $c), Std.String.utf8_([u8("83"), u8("79"), u8("76")], $c), Std.String.utf8_([u8("115"), u8("111"), u8("108"), u8("97"), u8("110"), u8("97")], $c), Std.String.utf8_([u8("104"), u8("116"), u8("116"), u8("112"), u8("115"), u8("58"), u8("47"), u8("47"), u8("97"), u8("115"), u8("115"), u8("101"), u8("116"), u8("115"), u8("46"), u8("99"), u8("111"), u8("105"), u8("110"), u8("103"), u8("101"), u8("99"), u8("107"), u8("111"), u8("46"), u8("99"), u8("111"), u8("109"), u8("47"), u8("99"), u8("111"), u8("105"), u8("110"), u8("115"), u8("47"), u8("105"), u8("109"), u8("97"), u8("103"), u8("101"), u8("115"), u8("47"), u8("52"), u8("49"), u8("50"), u8("56"), u8("47"), u8("115"), u8("109"), u8("97"), u8("108"), u8("108"), u8("47"), u8("115"), u8("111"), u8("108"), u8("97"), u8("110"), u8("97"), u8("46"), u8("112"), u8("110"), u8("103"), u8("63"), u8("49"), u8("54"), u8("52"), u8("48"), u8("49"), u8("51"), u8("51"), u8("52"), u8("50"), u8("50")], $c), Std.String.utf8_([u8("112"), u8("114"), u8("111"), u8("106"), u8("101"), u8("99"), u8("116"), u8("95"), u8("117"), u8("114"), u8("108")], $c), false, $c, [new SimpleStructTag(DevnetSOL)]);
  Coin_list.add_to_registry_by_signer_(admin, Std.String.utf8_([u8("85"), u8("83"), u8("68"), u8("32"), u8("67"), u8("111"), u8("105"), u8("110")], $c), Std.String.utf8_([u8("85"), u8("83"), u8("68"), u8("67")], $c), Std.String.utf8_([u8("117"), u8("115"), u8("100"), u8("45"), u8("99"), u8("111"), u8("105"), u8("110")], $c), Std.String.utf8_([u8("104"), u8("116"), u8("116"), u8("112"), u8("115"), u8("58"), u8("47"), u8("47"), u8("97"), u8("115"), u8("115"), u8("101"), u8("116"), u8("115"), u8("46"), u8("99"), u8("111"), u8("105"), u8("110"), u8("103"), u8("101"), u8("99"), u8("107"), u8("111"), u8("46"), u8("99"), u8("111"), u8("109"), u8("47"), u8("99"), u8("111"), u8("105"), u8("110"), u8("115"), u8("47"), u8("105"), u8("109"), u8("97"), u8("103"), u8("101"), u8("115"), u8("47"), u8("54"), u8("51"), u8("49"), u8("57"), u8("47"), u8("115"), u8("109"), u8("97"), u8("108"), u8("108"), u8("47"), u8("85"), u8("83"), u8("68"), u8("95"), u8("67"), u8("111"), u8("105"), u8("110"), u8("95"), u8("105"), u8("99"), u8("111"), u8("110"), u8("46"), u8("112"), u8("110"), u8("103"), u8("63"), u8("49"), u8("53"), u8("52"), u8("55"), u8("48"), u8("52"), u8("50"), u8("51"), u8("56"), u8("57")], $c), Std.String.utf8_([u8("112"), u8("114"), u8("111"), u8("106"), u8("101"), u8("99"), u8("116"), u8("95"), u8("117"), u8("114"), u8("108")], $c), false, $c, [new SimpleStructTag(DevnetUSDC)]);
  Coin_list.add_to_registry_by_signer_(admin, Std.String.utf8_([u8("84"), u8("101"), u8("116"), u8("104"), u8("101"), u8("114")], $c), Std.String.utf8_([u8("85"), u8("83"), u8("68"), u8("84")], $c), Std.String.utf8_([u8("116"), u8("101"), u8("116"), u8("104"), u8("101"), u8("114")], $c), Std.String.utf8_([u8("104"), u8("116"), u8("116"), u8("112"), u8("115"), u8("58"), u8("47"), u8("47"), u8("97"), u8("115"), u8("115"), u8("101"), u8("116"), u8("115"), u8("46"), u8("99"), u8("111"), u8("105"), u8("110"), u8("103"), u8("101"), u8("99"), u8("107"), u8("111"), u8("46"), u8("99"), u8("111"), u8("109"), u8("47"), u8("99"), u8("111"), u8("105"), u8("110"), u8("115"), u8("47"), u8("105"), u8("109"), u8("97"), u8("103"), u8("101"), u8("115"), u8("47"), u8("51"), u8("50"), u8("53"), u8("47"), u8("115"), u8("109"), u8("97"), u8("108"), u8("108"), u8("47"), u8("84"), u8("101"), u8("116"), u8("104"), u8("101"), u8("114"), u8("45"), u8("108"), u8("111"), u8("103"), u8("111"), u8("46"), u8("112"), u8("110"), u8("103"), u8("63"), u8("49"), u8("53"), u8("57"), u8("56"), u8("48"), u8("48"), u8("51"), u8("55"), u8("48"), u8("55")], $c), Std.String.utf8_([u8("112"), u8("114"), u8("111"), u8("106"), u8("101"), u8("99"), u8("116"), u8("95"), u8("117"), u8("114"), u8("108")], $c), false, $c, [new SimpleStructTag(DevnetUSDT)]);
  return;
}


export function buildPayload_deploy (
) {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    "0xf70ac33c984f8b7bead655ad239d246f1c0e3ca55fe0b8bfc119aa529c4630e8::devnet_coins::deploy",
    typeParamStrings,
    []
  );

}

export function init_coin_ (
  admin: HexString,
  name: U8[],
  symbol: U8[],
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): void {
  let burn, mint;
  [mint, burn] = Aptos_framework.Coin.initialize_(admin, Std.String.utf8_($.copy(name), $c), Std.String.utf8_($.copy(symbol), $c), u64("8"), false, $c, [$p[0]]);
  $c.move_to(new SimpleStructTag(CoinCaps, [$p[0]]), admin, new CoinCaps({ mint: $.copy(mint), burn: $.copy(burn) }, new SimpleStructTag(CoinCaps, [$p[0]])));
  return;
}

export function mint_ (
  amount: U64,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): Aptos_framework.Coin.Coin {
  let caps;
  caps = $c.borrow_global<CoinCaps>(new SimpleStructTag(CoinCaps, [$p[0]]), new HexString("0xf70ac33c984f8b7bead655ad239d246f1c0e3ca55fe0b8bfc119aa529c4630e8"));
  return Aptos_framework.Coin.mint_($.copy(amount), caps.mint, $c, [$p[0]]);
}

export function mint_to_wallet_ (
  user: HexString,
  amount: U64,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): void {
  let coin;
  coin = mint_($.copy(amount), $c, [$p[0]]);
  if (!Aptos_framework.Coin.is_account_registered_(Std.Signer.address_of_(user, $c), $c, [$p[0]])) {
    Aptos_framework.Coins.register_internal_(user, $c, [$p[0]]);
  }
  else{
  }
  Aptos_framework.Coin.deposit_(Std.Signer.address_of_(user, $c), coin, $c, [$p[0]]);
  return;
}


export function buildPayload_mint_to_wallet (
  amount: U64,
  $p: TypeTag[], /* <CoinType>*/
) {
  const typeParamStrings = $p.map(t=>$.getTypeTagFullname(t));
  return $.buildPayload(
    "0xf70ac33c984f8b7bead655ad239d246f1c0e3ca55fe0b8bfc119aa529c4630e8::devnet_coins::mint_to_wallet",
    typeParamStrings,
    [
      $.payloadArg(amount),
    ]
  );

}

export function loadParsers(repo: AptosParserRepo) {
  repo.addParser("0xf70ac33c984f8b7bead655ad239d246f1c0e3ca55fe0b8bfc119aa529c4630e8::devnet_coins::CoinCaps", CoinCaps.CoinCapsParser);
  repo.addParser("0xf70ac33c984f8b7bead655ad239d246f1c0e3ca55fe0b8bfc119aa529c4630e8::devnet_coins::DevnetBNB", DevnetBNB.DevnetBNBParser);
  repo.addParser("0xf70ac33c984f8b7bead655ad239d246f1c0e3ca55fe0b8bfc119aa529c4630e8::devnet_coins::DevnetBTC", DevnetBTC.DevnetBTCParser);
  repo.addParser("0xf70ac33c984f8b7bead655ad239d246f1c0e3ca55fe0b8bfc119aa529c4630e8::devnet_coins::DevnetETH", DevnetETH.DevnetETHParser);
  repo.addParser("0xf70ac33c984f8b7bead655ad239d246f1c0e3ca55fe0b8bfc119aa529c4630e8::devnet_coins::DevnetSOL", DevnetSOL.DevnetSOLParser);
  repo.addParser("0xf70ac33c984f8b7bead655ad239d246f1c0e3ca55fe0b8bfc119aa529c4630e8::devnet_coins::DevnetUSDC", DevnetUSDC.DevnetUSDCParser);
  repo.addParser("0xf70ac33c984f8b7bead655ad239d246f1c0e3ca55fe0b8bfc119aa529c4630e8::devnet_coins::DevnetUSDT", DevnetUSDT.DevnetUSDTParser);
}
export class App {
  constructor(
    public client: AptosClient,
    public repo: AptosParserRepo,
    public cache: AptosLocalCache,
  ) {
  }
  get moduleAddress() {{ return moduleAddress; }}
  get moduleName() {{ return moduleName; }}
  get CoinCaps() { return CoinCaps; }
  async loadCoinCaps(
    owner: HexString,
    $p: TypeTag[], /* <T> */
    loadFull=true,
  ) {
    const val = await CoinCaps.load(this.repo, this.client, owner, $p);
    if (loadFull) {
      await val.loadFullState(this);
    }
    return val;
  }
  get DevnetBNB() { return DevnetBNB; }
  get DevnetBTC() { return DevnetBTC; }
  get DevnetETH() { return DevnetETH; }
  get DevnetSOL() { return DevnetSOL; }
  get DevnetUSDC() { return DevnetUSDC; }
  get DevnetUSDT() { return DevnetUSDT; }
  payload_deploy(
  ) {
    return buildPayload_deploy();
  }
  async deploy(
    _account: AptosAccount,
    _maxGas = 1000,
  ) {
    const payload = buildPayload_deploy();
    return $.sendPayloadTx(this.client, _account, payload, _maxGas);
  }
  payload_mint_to_wallet(
    amount: U64,
    $p: TypeTag[], /* <CoinType>*/
  ) {
    return buildPayload_mint_to_wallet(amount, $p);
  }
  async mint_to_wallet(
    _account: AptosAccount,
    amount: U64,
    $p: TypeTag[], /* <CoinType>*/
    _maxGas = 1000,
  ) {
    const payload = buildPayload_mint_to_wallet(amount, $p);
    return $.sendPayloadTx(this.client, _account, payload, _maxGas);
  }
}
