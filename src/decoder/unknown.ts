import * as D from "io-ts/lib/Decoder";
import * as G from "io-ts/lib/Guard";

export const unknownGuard: G.Guard<unknown> = {
  is: (_: unknown): _ is unknown => true,
};

export const unknown: D.Decoder<unknown> = D.fromGuard(unknownGuard, "unknown");