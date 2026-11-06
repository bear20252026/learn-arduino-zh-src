import{h as Ve}from"./styles-C5I125Eq.js";import{s as Gi,n as Hi,c as Pn,i as Dn,r as Vi,o as Oa,a as Fa}from"./app-A_lywvNB.js";import{K as Ti,C as Or,Y as xi,T as Ln,D as Un,I as q,m as Nn,F as dt,P as In,Z as zi,V as tt,a as qt,b as On,h as Fr,c as Fn,R as Bn,q as bi,d as ki,e as ma,f as ri,O as Gn,u as ha,r as Hn,z as Ye,M as et,j as je,L as St,g as Wi,i as Zt,k as Br,$ as Xi,l as Pt,E as it,n as Gr,_ as $t,o as Vn,p as ya,s as Ta,H as Pa,t as Yi,J as zn,v as kn,X as Wn,w as bt,x as Xn,y as Yn,A as ni,B as jn,G as Kn,N as qn,Q as Zn,S as $n,U as ji,W as Qn,a0 as Jn,a1 as eo,a2 as to,a3 as ao,a4 as io,a5 as ro,a6 as no,a7 as oo,a8 as Ba,a9 as Ki,aa as qi,ab as so,ac as lo,ad as oi,ae as Zi,af as co,ag as uo,ah as si,ai as fo,aj as po,ak as It,al as ho,am as mo,an as ua,ao as go,ap as _o,aq as li,ar as ci,as as ba,at as Hr,au as di,av as vo,aw as wa,ax as $i,ay as So,az as Eo,aA as Mo,aB as Ga,aC as Vr,aD as zr,aE as ui,aF as To,aG as xo,aH as bo,aI as wo,aJ as Ao,aK as Ro,aL as Co,aM as yo,aN as yt,aO as Po,aP as Qi,aQ as Do,aR as Lo,aS as Uo,aT as kt,aU as Ji,aV as Ha,aW as kr,aX as No,aY as Io,aZ as Oo,a_ as Wr,a$ as Fo,b0 as Bo,b1 as Go,b2 as Xr,b3 as Ho,b4 as Vo,b5 as Be,b6 as zo,b7 as ko,b8 as Wo,b9 as Xo,ba as Yo,bb as jo,bc as Ko,bd as fi,be as pi,bf as Yr,bg as jr,bh as qo,bi as Kr,bj as Zo,bk as wi,bl as $o,bm as Qo,bn as Jo,bo as es,bp as ts,bq as as,br as is,bs as rs,bt as fa,bu as ns,bv as qr,bw as er,bx as Zr,by as _t,bz as os,bA as ss,bB as ls,bC as cs,bD as ds,bE as us,bF as fs,bG as ps}from"./kit-CxmBhT2i.js";function $r(){let e=null,a=!1,t=null,i=null;function n(r,o){i=e.requestAnimationFrame(n),t(r,o)}return{start:function(){a!==!0&&t!==null&&e!==null&&(i=e.requestAnimationFrame(n),a=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),a=!1},setAnimationLoop:function(r){t=r},setContext:function(r){e=r}}}function hs(e){let a=new WeakMap;function t(s,S){let E=s.array,M=s.usage,N=E.byteLength,h=e.createBuffer();e.bindBuffer(S,h),e.bufferData(S,E,M),s.onUploadCallback();let x;if(E instanceof Float32Array)x=e.FLOAT;else if(typeof Float16Array<"u"&&E instanceof Float16Array)x=e.HALF_FLOAT;else if(E instanceof Uint16Array)x=s.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(E instanceof Int16Array)x=e.SHORT;else if(E instanceof Uint32Array)x=e.UNSIGNED_INT;else if(E instanceof Int32Array)x=e.INT;else if(E instanceof Int8Array)x=e.BYTE;else if(E instanceof Uint8Array)x=e.UNSIGNED_BYTE;else if(E instanceof Uint8ClampedArray)x=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+E);return{buffer:h,type:x,bytesPerElement:E.BYTES_PER_ELEMENT,version:s.version,size:N}}function i(s,S,E){let M=S.array,N=S.updateRanges;if(e.bindBuffer(E,s),N.length===0)e.bufferSubData(E,0,M);else{N.sort((x,T)=>x.start-T.start);let h=0;for(let x=1;x<N.length;x++){let T=N[h],k=N[x];k.start<=T.start+T.count+1?T.count=Math.max(T.count,k.start+k.count-T.start):(++h,N[h]=k)}N.length=h+1;for(let x=0,T=N.length;x<T;x++){let k=N[x];e.bufferSubData(E,k.start*M.BYTES_PER_ELEMENT,M,k.start,k.count)}S.clearUpdateRanges()}S.onUploadCallback()}function n(s){return s.isInterleavedBufferAttribute&&(s=s.data),a.get(s)}function r(s){s.isInterleavedBufferAttribute&&(s=s.data);let S=a.get(s);S&&(e.deleteBuffer(S.buffer),a.delete(s))}function o(s,S){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){let M=a.get(s);(!M||M.version<s.version)&&a.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}let E=a.get(s);if(E===void 0)a.set(s,t(s,S));else if(E.version<s.version){if(E.size!==s.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(E.buffer,s,S),E.version=s.version}}return{get:n,remove:r,update:o}}var Ue={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},ue={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Nt={basic:{uniforms:_t([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:_t([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:_t([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:_t([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:_t([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:_t([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:_t([ue.points,ue.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:_t([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:_t([ue.common,ue.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:_t([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:_t([ue.sprite,ue.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:_t([ue.common,ue.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:_t([ue.lights,ue.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Nt.physical={uniforms:_t([Nt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var Sa={r:0,b:0,g:0},ms=new Zt,Qr=new Be;Qr.set(-1,0,0,0,1,0,0,0,1);function gs(e,a,t,i,n,r){let o=new Ye(0),s=n===!0?0:1,S,E,M=null,N=0,h=null;function x(b){let D=b.isScene===!0?b.background:null;if(D&&D.isTexture){let p=b.backgroundBlurriness>0;D=a.get(D,p)}return D}function T(b){let D=!1,p=x(b);p===null?g(o,s):p&&p.isColor&&(g(p,1),D=!0);let _=e.xr.getEnvironmentBlendMode();_==="additive"?t.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(e.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function k(b,D){let p=x(D);p&&(p.isCubeTexture||p.mapping===306)?(E===void 0&&(E=new tt(new Pa(1,1,1),new bt({name:"BackgroundCubeMaterial",uniforms:fi(Nt.backgroundCube.uniforms),vertexShader:Nt.backgroundCube.vertexShader,fragmentShader:Nt.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),E.geometry.deleteAttribute("normal"),E.geometry.deleteAttribute("uv"),E.onBeforeRender=function(_,v,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(E.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(E)),E.material.uniforms.envMap.value=p,E.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,E.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,E.material.uniforms.backgroundRotation.value.setFromMatrix4(ms.makeRotationFromEuler(D.backgroundRotation)).transpose(),p.isCubeTexture&&p.isRenderTargetTexture===!1&&E.material.uniforms.backgroundRotation.value.premultiply(Qr),E.material.toneMapped=it.getTransfer(p.colorSpace)!==pi,(M!==p||N!==p.version||h!==e.toneMapping)&&(E.material.needsUpdate=!0,M=p,N=p.version,h=e.toneMapping),E.layers.enableAll(),b.unshift(E,E.geometry,E.material,0,0,null)):p&&p.isTexture&&(S===void 0&&(S=new tt(new qt(2,2),new bt({name:"BackgroundMaterial",uniforms:fi(Nt.background.uniforms),vertexShader:Nt.background.vertexShader,fragmentShader:Nt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),S.geometry.deleteAttribute("normal"),Object.defineProperty(S.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(S)),S.material.uniforms.t2D.value=p,S.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,S.material.toneMapped=it.getTransfer(p.colorSpace)!==pi,p.matrixAutoUpdate===!0&&p.updateMatrix(),S.material.uniforms.uvTransform.value.copy(p.matrix),(M!==p||N!==p.version||h!==e.toneMapping)&&(S.material.needsUpdate=!0,M=p,N=p.version,h=e.toneMapping),S.layers.enableAll(),b.unshift(S,S.geometry,S.material,0,0,null))}function g(b,D){b.getRGB(Sa,Yr(e)),t.buffers.color.setClear(Sa.r,Sa.g,Sa.b,D,r)}function l(){E!==void 0&&(E.geometry.dispose(),E.material.dispose(),E=void 0),S!==void 0&&(S.geometry.dispose(),S.material.dispose(),S=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,D=1){o.set(b),s=D,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(b){s=b,g(o,s)},render:T,addToRenderList:k,dispose:l}}function _s(e,a){let t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},n=h(null),r=n,o=!1;function s(y,I,Q,U,G){let X=!1,B=N(y,U,Q,I);r!==B&&(r=B,E(r.object)),X=x(y,U,Q,G),X&&T(y,U,Q,G),G!==null&&a.update(G,e.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,p(y,I,Q,U),G!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,a.get(G).buffer))}function S(){return e.createVertexArray()}function E(y){return e.bindVertexArray(y)}function M(y){return e.deleteVertexArray(y)}function N(y,I,Q,U){let G=U.wireframe===!0,X=i[I.id];X===void 0&&(X={},i[I.id]=X);let B=y.isInstancedMesh===!0?y.id:0,$=X[B];$===void 0&&($={},X[B]=$);let Y=$[Q.id];Y===void 0&&(Y={},$[Q.id]=Y);let K=Y[G];return K===void 0&&(K=h(S()),Y[G]=K),K}function h(y){let I=[],Q=[],U=[];for(let G=0;G<t;G++)I[G]=0,Q[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:Q,attributeDivisors:U,object:y,attributes:{},index:null}}function x(y,I,Q,U){let G=r.attributes,X=I.attributes,B=0,$=Q.getAttributes();for(let Y in $)if($[Y].location>=0){let K=G[Y],J=X[Y];if(J===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(J=y.instanceColor)),K===void 0||K.attribute!==J||J&&K.data!==J.data)return!0;B++}return r.attributesNum!==B||r.index!==U}function T(y,I,Q,U){let G={},X=I.attributes,B=0,$=Q.getAttributes();for(let Y in $)if($[Y].location>=0){let K=X[Y];K===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(K=y.instanceColor));let J={};J.attribute=K,K&&K.data&&(J.data=K.data),G[Y]=J,B++}r.attributes=G,r.attributesNum=B,r.index=U}function k(){let y=r.newAttributes;for(let I=0,Q=y.length;I<Q;I++)y[I]=0}function g(y){l(y,0)}function l(y,I){let Q=r.newAttributes,U=r.enabledAttributes,G=r.attributeDivisors;Q[y]=1,U[y]===0&&(e.enableVertexAttribArray(y),U[y]=1),G[y]!==I&&(e.vertexAttribDivisor(y,I),G[y]=I)}function b(){let y=r.newAttributes,I=r.enabledAttributes;for(let Q=0,U=I.length;Q<U;Q++)I[Q]!==y[Q]&&(e.disableVertexAttribArray(Q),I[Q]=0)}function D(y,I,Q,U,G,X,B){B===!0?e.vertexAttribIPointer(y,I,Q,G,X):e.vertexAttribPointer(y,I,Q,U,G,X)}function p(y,I,Q,U){k();let G=U.attributes,X=Q.getAttributes(),B=I.defaultAttributeValues;for(let $ in X){let Y=X[$];if(Y.location>=0){let K=G[$];if(K===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(K=y.instanceColor)),K!==void 0){let J=K.normalized,Ne=K.itemSize,be=a.get(K);if(be===void 0)continue;let Ge=be.buffer,Ie=be.type,W=be.bytesPerElement,re=Ie===e.INT||Ie===e.UNSIGNED_INT||K.gpuType===1013;if(K.isInterleavedBufferAttribute){let le=K.data,ye=le.stride,De=K.offset;if(le.isInstancedInterleavedBuffer){for(let ve=0;ve<Y.locationSize;ve++)l(Y.location+ve,le.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ve=0;ve<Y.locationSize;ve++)g(Y.location+ve);e.bindBuffer(e.ARRAY_BUFFER,Ge);for(let ve=0;ve<Y.locationSize;ve++)D(Y.location+ve,Ne/Y.locationSize,Ie,J,ye*W,(De+Ne/Y.locationSize*ve)*W,re)}else{if(K.isInstancedBufferAttribute){for(let le=0;le<Y.locationSize;le++)l(Y.location+le,K.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let le=0;le<Y.locationSize;le++)g(Y.location+le);e.bindBuffer(e.ARRAY_BUFFER,Ge);for(let le=0;le<Y.locationSize;le++)D(Y.location+le,Ne/Y.locationSize,Ie,J,Ne*W,Ne/Y.locationSize*le*W,re)}}else if(B!==void 0){let J=B[$];if(J!==void 0)switch(J.length){case 2:e.vertexAttrib2fv(Y.location,J);break;case 3:e.vertexAttrib3fv(Y.location,J);break;case 4:e.vertexAttrib4fv(Y.location,J);break;default:e.vertexAttrib1fv(Y.location,J)}}}}b()}function _(){m();for(let y in i){let I=i[y];for(let Q in I){let U=I[Q];for(let G in U){let X=U[G];for(let B in X)M(X[B].object),delete X[B];delete U[G]}}delete i[y]}}function v(y){if(i[y.id]===void 0)return;let I=i[y.id];for(let Q in I){let U=I[Q];for(let G in U){let X=U[G];for(let B in X)M(X[B].object),delete X[B];delete U[G]}}delete i[y.id]}function w(y){for(let I in i){let Q=i[I];for(let U in Q){let G=Q[U];if(G[y.id]===void 0)continue;let X=G[y.id];for(let B in X)M(X[B].object),delete X[B];delete G[y.id]}}}function d(y){for(let I in i){let Q=i[I],U=y.isInstancedMesh===!0?y.id:0,G=Q[U];if(G!==void 0){for(let X in G){let B=G[X];for(let $ in B)M(B[$].object),delete B[$];delete G[X]}delete Q[U],Object.keys(Q).length===0&&delete i[I]}}}function m(){z(),o=!0,r!==n&&(r=n,E(r.object))}function z(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:s,reset:m,resetDefaultState:z,dispose:_,releaseStatesOfGeometry:v,releaseStatesOfObject:d,releaseStatesOfProgram:w,initAttributes:k,enableAttribute:g,disableUnusedAttributes:b}}function vs(e,a,t){let i;function n(S){i=S}function r(S,E){e.drawArrays(i,S,E),t.update(E,i,1)}function o(S,E,M){M!==0&&(e.drawArraysInstanced(i,S,E,M),t.update(E,i,M))}function s(S,E,M){if(M===0)return;a.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,S,0,E,0,M);let N=0;for(let h=0;h<M;h++)N+=E[h];t.update(N,i,1)}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=s}function Ss(e,a,t,i){let n;function r(){if(n!==void 0)return n;if(a.has("EXT_texture_filter_anisotropic")===!0){let w=a.get("EXT_texture_filter_anisotropic");n=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(w){return w===1023||i.convert(w)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(w){let d=w===1016&&(a.has("EXT_color_buffer_half_float")||a.has("EXT_color_buffer_float"));return!(w!==1009&&w!==1015&&!d&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function S(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let E=t.precision===void 0?"highp":t.precision,M=S(E);M!==E&&(je("WebGLRenderer:",E,"not supported, using",M,"instead."),E=M);let N=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&a.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let x=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),T=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),k=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),l=e.getParameter(e.MAX_VERTEX_ATTRIBS),b=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),D=e.getParameter(e.MAX_VARYING_VECTORS),p=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),_=e.getParameter(e.MAX_SAMPLES),v=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:S,textureFormatReadable:o,textureTypeReadable:s,precision:E,logarithmicDepthBuffer:N,reversedDepthBuffer:h,maxTextures:x,maxVertexTextures:T,maxTextureSize:k,maxCubemapSize:g,maxAttributes:l,maxVertexUniforms:b,maxVaryings:D,maxFragmentUniforms:p,maxSamples:_,samples:v}}function Es(e){let a=this,t=null,i=0,n=!1,r=!1,o=new ri,s=new Be,S={value:null,needsUpdate:!1};this.uniform=S,this.numPlanes=0,this.numIntersection=0,this.init=function(N,h){let x=N.length!==0||h||i!==0||n;return n=h,i=N.length,x},this.beginShadows=function(){r=!0,M(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(N,h){t=M(N,h,0)},this.setState=function(N,h,x){let T=N.clippingPlanes,k=N.clipIntersection,g=N.clipShadows,l=e.get(N);if(!n||T===null||T.length===0||r&&!g)r?M(null):E();else{let b=r?0:i,D=b*4,p=l.clippingState||null;S.value=p,p=M(T,h,D,x);for(let _=0;_!==D;++_)p[_]=t[_];l.clippingState=p,this.numIntersection=k?this.numPlanes:0,this.numPlanes+=b}};function E(){S.value!==t&&(S.value=t,S.needsUpdate=i>0),a.numPlanes=i,a.numIntersection=0}function M(N,h,x,T){let k=N===null?0:N.length,g=null;if(k!==0){if(g=S.value,T!==!0||g===null){let l=x+k*4,b=h.matrixWorldInverse;s.getNormalMatrix(b),(g===null||g.length<l)&&(g=new Float32Array(l));for(let D=0,p=x;D!==k;++D,p+=4)o.copy(N[D]).applyMatrix4(b,s),o.normal.toArray(g,p),g[p+3]=o.constant}S.value=g,S.needsUpdate=!0}return a.numPlanes=k,a.numIntersection=0,g}}var ia=4,Ms=6,Ts=20,xs=256,sa=new xi,tr=new Ye,Va=null,za=0,ka=0,Wa=!1,bs=new q,Wt=new q,hi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,a=0,t=.1,i=100,n={}){let{size:r=256,position:o=bs}=n;Va=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,t,i,s,o),a>0&&this._blur(s,0,0,a),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,a=null){return this._fromTexture(e,a)}fromCubemap(e,a=null){return this._fromTexture(e,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ir(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Va,za,ka),this._renderer.xr.enabled=Wa,e.scissorTest=!1,ea(e,0,0,e.width,e.height)}_fromTexture(e,a){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Va=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let t=a||this._allocateTargets();return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,t={magFilter:It,minFilter:It,generateMipmaps:!1,type:$t,format:ui,colorSpace:bo,depthBuffer:!1},i=ar(e,a,t);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ar(e,a,t);let{_lodMax:n}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ws(n)),this._blurMaterial=Rs(n,e,a),this._ggxMaterial=As(n,e,a)}return i}_compileMaterial(e){let a=new tt(new ya,e);this._renderer.compile(a,sa)}_sceneToCubeUV(e,a,t,i,n){let r=new Ta(90,1,a,t),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],S=this._renderer,E=S.autoClear,M=S.toneMapping;S.getClearColor(tr),S.toneMapping=0,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(i),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new tt(new Pa,new bi({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));let N=this._backgroundBox,h=N.material,x=!1,T=e.background;T?T.isColor&&(h.color.copy(T),e.background=null,x=!0):(h.color.copy(tr),x=!0);for(let k=0;k<6;k++){let g=k%3;g===0?(r.up.set(0,o[k],0),r.position.set(n.x,n.y,n.z),r.lookAt(n.x+s[k],n.y,n.z)):g===1?(r.up.set(0,0,o[k]),r.position.set(n.x,n.y,n.z),r.lookAt(n.x,n.y+s[k],n.z)):(r.up.set(0,o[k],0),r.position.set(n.x,n.y,n.z),r.lookAt(n.x,n.y,n.z+s[k]));let l=this._cubeSize;ea(i,g*l,k>2?l:0,l,l),S.setRenderTarget(i),x&&S.render(N,r),S.render(e,r)}S.toneMapping=M,S.autoClear=E,e.background=T}_textureToCubeUV(e,a){let t=this._renderer,i=e.mapping===301||e.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rr()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ir());let n=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=n;let o=n.uniforms;o.envMap.value=e;let s=this._cubeSize;ea(a,0,0,3*s,2*s),t.setRenderTarget(a),t.render(r,sa)}_applyPMREM(e){let a=this._renderer,t=a.autoClear;a.autoClear=!1;let i=this._lodMeshes.length;for(let n=1;n<i;n++)this._applyGGXFilter(e,n-1,n);a.autoClear=t}_applyGGXFilter(e,a,t){let i=this._renderer,n=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[t];o.material=r;let s=r.uniforms,S=t/(this._lodMeshes.length-1),E=a/(this._lodMeshes.length-1),M=Math.sqrt(S*S-E*E)*(S*1.25),{_lodMax:N}=this,h=this._sizeLods[t],x=3*h*(t>N-ia?t-N+ia:0),T=4*(this._cubeSize-h);s.envMap.value=e.texture,s.roughness.value=M,s.mipInt.value=N-a,ea(n,x,T,3*h,2*h),i.setRenderTarget(n),i.render(o,sa),s.envMap.value=n.texture,s.roughness.value=0,s.mipInt.value=N-t,ea(e,x,T,3*h,2*h),i.setRenderTarget(e),i.render(o,sa)}_blur(e,a,t,i){let n=this._pingPongRenderTarget,r=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,n,a,t,r),this._blurPass(n,e,t,t,r)}_blurPass(e,a,t,i,n){let r=this._renderer,o=this._blurMaterial,s=this._lodMeshes[i];s.material=o;let S=o.uniforms;S.envMap.value=e.texture,S.sigma.value=n,S.mipInt.value=this._lodMax-t;let E=this._sizeLods[i];ea(a,3*E*(i>this._lodMax-ia?i-this._lodMax+ia:0),4*(this._cubeSize-E),3*E,2*E),r.setRenderTarget(a),r.render(s,sa)}};function ws(e){let a=[],t=[],i=e,n=e-ia+1+Ms;for(let r=0;r<n;r++){let o=2**i;a.push(o);let s=1/(o-2),S=-s,E=1+s,M=[S,S,E,S,E,E,S,S,E,E,S,E],N=new Float32Array(108),h=new Float32Array(108);for(let T=0;T<6;T++){let k=T%3*2/3-1,g=T>2?0:-1,l=[k,g,0,k+2/3,g,0,k+2/3,g+1,0,k,g,0,k+2/3,g+1,0,k,g+1,0];N.set(l,18*T);for(let b=0;b<6;b++){let D=M[b*2]*2-1,p=M[b*2+1]*2-1;T===0?Wt.set(1,p,D):T===1?Wt.set(-D,1,-p):T===2?Wt.set(-D,p,1):T===3?Wt.set(-1,p,-D):T===4?Wt.set(-D,-1,p):Wt.set(D,p,-1),Wt.toArray(h,(T*6+b)*3)}}let x=new ya;x.setAttribute("position",new li(N,3)),x.setAttribute("outputDirection",new li(h,3)),t.push(new tt(x,null)),i>ia&&i--}return{lodMeshes:t,sizeLods:a}}function ar(e,a,t){let i=new Pt(e,a,t);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ea(e,a,t,i,n){e.viewport.set(a,t,i,n),e.scissor.set(a,t,i,n)}function As(e,a,t){return new bt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xs,CUBEUV_TEXEL_WIDTH:1/a,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Da(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Rs(e,a,t){return new bt({name:"SphericalGaussianBlur",defines:{SAMPLES:Ts,CUBEUV_TEXEL_WIDTH:1/a,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Da(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ir(){return new bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function rr(){return new bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Da(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Jr=class extends Pt{constructor(e=1,a={}){super(e,e,a),this.isWebGLCubeRenderTarget=!0;let t={width:e,height:e,depth:1},i=[t,t,t,t,t,t];this.texture=new jr(i),this._setTextureOptions(a),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;let t={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Pa(5,5,5),n=new bt({name:"CubemapFromEquirect",uniforms:fi(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:1,blending:0});n.uniforms.tEquirect.value=a;let r=new tt(i,n),o=a.minFilter;return a.minFilter===1008&&(a.minFilter=It),new qo(1,10,this).update(e,r),a.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,a=!0,t=!0,i=!0){let n=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(a,t,i);e.setRenderTarget(n)}};function Cs(e){let a=new WeakMap,t=new WeakMap,i=null;function n(h,x=!1){return h==null?null:x?o(h):r(h)}function r(h){if(h&&h.isTexture){let x=h.mapping;if(x===303||x===304){if(a.has(h)){let T=a.get(h).texture;return s(T,h.mapping)}{let T=h.image;if(T&&T.height>0){let k=new Jr(T.height);return k.fromEquirectangularTexture(e,h),a.set(h,k),h.addEventListener("dispose",E),s(k.texture,h.mapping)}return null}}}return h}function o(h){if(h&&h.isTexture){let x=h.mapping,T=x===303||x===304,k=x===301||x===302;if(T||k){let g=t.get(h),l=g===void 0?0:g.texture.pmremVersion;if(h.isRenderTargetTexture&&h.pmremVersion!==l)return i===null&&(i=new hi(e)),g=T?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{let b=h.image;return T&&b&&b.height>0||k&&b&&S(b)?(i===null&&(i=new hi(e)),g=T?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",M),g.texture):null}}}return h}function s(h,x){return x===303?h.mapping=301:x===304&&(h.mapping=302),h}function S(h){let x=0;for(let T=0;T<6;T++)h[T]!==void 0&&x++;return x===6}function E(h){let x=h.target;x.removeEventListener("dispose",E);let T=a.get(x);T!==void 0&&(a.delete(x),T.dispose())}function M(h){let x=h.target;x.removeEventListener("dispose",M);let T=t.get(x);T!==void 0&&(t.delete(x),T.dispose())}function N(){a=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:N}}function ys(e){let a={};function t(i){if(a[i]!==void 0)return a[i];let n=e.getExtension(i);return a[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&Vo("WebGLRenderer: "+i+" extension not supported."),n}}}function Ps(e,a,t,i){let n={},r=new WeakMap;function o(N){let h=N.target;h.index!==null&&a.remove(h.index);for(let T in h.attributes)a.remove(h.attributes[T]);h.removeEventListener("dispose",o),delete n[h.id];let x=r.get(h);x&&(a.remove(x),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function s(N,h){return n[h.id]===!0||(h.addEventListener("dispose",o),n[h.id]=!0,t.memory.geometries++),h}function S(N){let h=N.attributes;for(let x in h)a.update(h[x],e.ARRAY_BUFFER)}function E(N){let h=[],x=N.index,T=N.attributes.position,k=0;if(T===void 0)return;if(x!==null){let b=x.array;k=x.version;for(let D=0,p=b.length;D<p;D+=3){let _=b[D+0],v=b[D+1],w=b[D+2];h.push(_,v,v,w,w,_)}}else{let b=T.array;k=T.version;for(let D=0,p=b.length/3-1;D<p;D+=3){let _=D+0,v=D+1,w=D+2;h.push(_,v,v,w,w,_)}}let g=new(T.count>=65535?ls:cs)(h,1);g.version=k;let l=r.get(N);l&&a.remove(l),r.set(N,g)}function M(N){let h=r.get(N);if(h){let x=N.index;x!==null&&h.version<x.version&&E(N)}else E(N);return r.get(N)}return{get:s,update:S,getWireframeAttribute:M}}function Ds(e,a,t){let i;function n(N){i=N}let r,o;function s(N){r=N.type,o=N.bytesPerElement}function S(N,h){e.drawElements(i,h,r,N*o),t.update(h,i,1)}function E(N,h,x){x!==0&&(e.drawElementsInstanced(i,h,r,N*o,x),t.update(h,i,x))}function M(N,h,x){if(x===0)return;a.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,N,0,x);let T=0;for(let k=0;k<x;k++)T+=h[k];t.update(T,i,1)}this.setMode=n,this.setIndex=s,this.render=S,this.renderInstances=E,this.renderMultiDraw=M}function Ls(e){let a={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,s){switch(t.calls++,o){case e.TRIANGLES:t.triangles+=r/3*s;break;case e.LINES:t.lines+=r/2*s;break;case e.LINE_STRIP:t.lines+=s*(r-1);break;case e.LINE_LOOP:t.lines+=s*r;break;case e.POINTS:t.points+=s*r;break;default:et("WebGLInfo: Unknown draw mode:",o)}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:a,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Us(e,a,t){let i=new WeakMap,n=new St;function r(o,s,S){let E=o.morphTargetInfluences,M=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,N=M===void 0?0:M.length,h=i.get(s);if(h===void 0||h.count!==N){let m=function(){w.dispose(),i.delete(s),s.removeEventListener("dispose",m)};h!==void 0&&h.texture.dispose();let x=s.morphAttributes.position!==void 0,T=s.morphAttributes.normal!==void 0,k=s.morphAttributes.color!==void 0,g=s.morphAttributes.position||[],l=s.morphAttributes.normal||[],b=s.morphAttributes.color||[],D=0;x===!0&&(D=1),T===!0&&(D=2),k===!0&&(D=3);let p=s.attributes.position.count*D,_=1;p>a.maxTextureSize&&(_=Math.ceil(p/a.maxTextureSize),p=a.maxTextureSize);let v=new Float32Array(p*_*4*N),w=new qr(v,p,_,N);w.type=Hr,w.needsUpdate=!0;let d=D*4;for(let z=0;z<N;z++){let y=g[z],I=l[z],Q=b[z],U=p*_*4*z;for(let G=0;G<y.count;G++){let X=G*d;x===!0&&(n.fromBufferAttribute(y,G),v[U+X+0]=n.x,v[U+X+1]=n.y,v[U+X+2]=n.z,v[U+X+3]=0),T===!0&&(n.fromBufferAttribute(I,G),v[U+X+4]=n.x,v[U+X+5]=n.y,v[U+X+6]=n.z,v[U+X+7]=0),k===!0&&(n.fromBufferAttribute(Q,G),v[U+X+8]=n.x,v[U+X+9]=n.y,v[U+X+10]=n.z,v[U+X+11]=Q.itemSize===4?n.w:1)}}h={count:N,texture:w,size:new dt(p,_)},i.set(s,h),s.addEventListener("dispose",m)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)S.getUniforms().setValue(e,"morphTexture",o.morphTexture,t);else{let x=0;for(let k=0;k<E.length;k++)x+=E[k];let T=s.morphTargetsRelative?1:1-x;S.getUniforms().setValue(e,"morphTargetBaseInfluence",T),S.getUniforms().setValue(e,"morphTargetInfluences",E)}S.getUniforms().setValue(e,"morphTargetsTexture",h.texture,t),S.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:r}}function Ns(e,a,t,i,n){let r=new WeakMap;function o(E){let M=n.render.frame,N=E.geometry,h=a.get(E,N);if(r.get(h)!==M&&(a.update(h),r.set(h,M)),E.isInstancedMesh&&(E.hasEventListener("dispose",S)===!1&&E.addEventListener("dispose",S),r.get(E)!==M&&(t.update(E.instanceMatrix,e.ARRAY_BUFFER),E.instanceColor!==null&&t.update(E.instanceColor,e.ARRAY_BUFFER),r.set(E,M))),E.isSkinnedMesh){let x=E.skeleton;r.get(x)!==M&&(x.update(),r.set(x,M))}return h}function s(){r=new WeakMap}function S(E){let M=E.target;M.removeEventListener("dispose",S),i.releaseStatesOfObject(M),t.remove(M.instanceMatrix),M.instanceColor!==null&&t.remove(M.instanceColor)}return{update:o,dispose:s}}var Is={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function Os(e,a,t,i,n,r){let o=new Pt(a,t,{type:e,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,S=null,E=new ya;E.setAttribute("position",new $i([-1,3,0,-1,-1,0,3,-1,0],3)),E.setAttribute("uv",new $i([0,2,0,0,2,0],2));let M=new So({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),N=new tt(E,M),h=new xi(-1,1,1,-1,0,1),x=null,T=null,k=!1,g,l=null,b=[],D=!1;this.setSize=function(p,_){o.setSize(p,_),s!==null&&s.setSize(p,_),S!==null&&S.setSize(p,_);for(let v=0;v<b.length;v++){let w=b[v];w.setSize&&w.setSize(p,_)}},this.setEffects=function(p){b=p,D=b.length>0&&b[0].isRenderPass===!0;let _=o.width,v=o.height;b.length>0&&s===null&&(s=new Pt(_,v,{type:$t,depthBuffer:!1,stencilBuffer:!1}),S=new Pt(_,v,{type:$t,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<b.length;w++){let d=b[w];d.setSize&&d.setSize(_,v)}},this.begin=function(p,_){if(k||p.toneMapping===0&&b.length===0)return!1;if(l=_,_!==null){let v=_.width,w=_.height;(o.width!==v||o.height!==w)&&this.setSize(v,w)}return D===!1&&p.setRenderTarget(o),g=p.toneMapping,p.toneMapping=0,!0},this.hasRenderPass=function(){return D},this.end=function(p,_){p.toneMapping=g,k=!0;let v=o,w=s;for(let d=0;d<b.length;d++){let m=b[d];m.enabled!==!1&&(m.render(p,w,v,_),m.needsSwap!==!1&&(v=w,w=w===s?S:s))}if(x!==p.outputColorSpace||T!==p.toneMapping){x=p.outputColorSpace,T=p.toneMapping,M.defines={},it.getTransfer(x)==="srgb"&&(M.defines.SRGB_TRANSFER="");let d=Is[T];d&&(M.defines[d]=""),M.needsUpdate=!0}M.uniforms.tDiffuse.value=v.texture,p.setRenderTarget(l),p.render(N,h),l=null,k=!1},this.isCompositing=function(){return k},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),S!==null&&S.dispose(),E.dispose(),M.dispose()}}var en=new us,mi=new ba(1,1),tn=new qr,an=new ds,rn=new jr,nr=[],or=[],sr=new Float32Array(16),lr=new Float32Array(9),cr=new Float32Array(4);function na(e,a,t){let i=e[0];if(i<=0||i>0)return e;let n=a*t,r=nr[n];if(r===void 0&&(r=new Float32Array(n),nr[n]=r),a!==0){i.toArray(r,0);for(let o=1,s=0;o!==a;++o)s+=t,e[o].toArray(r,s)}return r}function ut(e,a){if(e.length!==a.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==a[t])return!1;return!0}function ft(e,a){for(let t=0,i=a.length;t<i;t++)e[t]=a[t]}function La(e,a){let t=or[a];t===void 0&&(t=new Int32Array(a),or[a]=t);for(let i=0;i!==a;++i)t[i]=e.allocateTextureUnit();return t}function Fs(e,a){let t=this.cache;t[0]!==a&&(e.uniform1f(this.addr,a),t[0]=a)}function Bs(e,a){let t=this.cache;if(a.x!==void 0)(t[0]!==a.x||t[1]!==a.y)&&(e.uniform2f(this.addr,a.x,a.y),t[0]=a.x,t[1]=a.y);else{if(ut(t,a))return;e.uniform2fv(this.addr,a),ft(t,a)}}function Gs(e,a){let t=this.cache;if(a.x!==void 0)(t[0]!==a.x||t[1]!==a.y||t[2]!==a.z)&&(e.uniform3f(this.addr,a.x,a.y,a.z),t[0]=a.x,t[1]=a.y,t[2]=a.z);else if(a.r!==void 0)(t[0]!==a.r||t[1]!==a.g||t[2]!==a.b)&&(e.uniform3f(this.addr,a.r,a.g,a.b),t[0]=a.r,t[1]=a.g,t[2]=a.b);else{if(ut(t,a))return;e.uniform3fv(this.addr,a),ft(t,a)}}function Hs(e,a){let t=this.cache;if(a.x!==void 0)(t[0]!==a.x||t[1]!==a.y||t[2]!==a.z||t[3]!==a.w)&&(e.uniform4f(this.addr,a.x,a.y,a.z,a.w),t[0]=a.x,t[1]=a.y,t[2]=a.z,t[3]=a.w);else{if(ut(t,a))return;e.uniform4fv(this.addr,a),ft(t,a)}}function Vs(e,a){let t=this.cache,i=a.elements;if(i===void 0){if(ut(t,a))return;e.uniformMatrix2fv(this.addr,!1,a),ft(t,a)}else{if(ut(t,i))return;cr.set(i),e.uniformMatrix2fv(this.addr,!1,cr),ft(t,i)}}function zs(e,a){let t=this.cache,i=a.elements;if(i===void 0){if(ut(t,a))return;e.uniformMatrix3fv(this.addr,!1,a),ft(t,a)}else{if(ut(t,i))return;lr.set(i),e.uniformMatrix3fv(this.addr,!1,lr),ft(t,i)}}function ks(e,a){let t=this.cache,i=a.elements;if(i===void 0){if(ut(t,a))return;e.uniformMatrix4fv(this.addr,!1,a),ft(t,a)}else{if(ut(t,i))return;sr.set(i),e.uniformMatrix4fv(this.addr,!1,sr),ft(t,i)}}function Ws(e,a){let t=this.cache;t[0]!==a&&(e.uniform1i(this.addr,a),t[0]=a)}function Xs(e,a){let t=this.cache;if(a.x!==void 0)(t[0]!==a.x||t[1]!==a.y)&&(e.uniform2i(this.addr,a.x,a.y),t[0]=a.x,t[1]=a.y);else{if(ut(t,a))return;e.uniform2iv(this.addr,a),ft(t,a)}}function Ys(e,a){let t=this.cache;if(a.x!==void 0)(t[0]!==a.x||t[1]!==a.y||t[2]!==a.z)&&(e.uniform3i(this.addr,a.x,a.y,a.z),t[0]=a.x,t[1]=a.y,t[2]=a.z);else{if(ut(t,a))return;e.uniform3iv(this.addr,a),ft(t,a)}}function js(e,a){let t=this.cache;if(a.x!==void 0)(t[0]!==a.x||t[1]!==a.y||t[2]!==a.z||t[3]!==a.w)&&(e.uniform4i(this.addr,a.x,a.y,a.z,a.w),t[0]=a.x,t[1]=a.y,t[2]=a.z,t[3]=a.w);else{if(ut(t,a))return;e.uniform4iv(this.addr,a),ft(t,a)}}function Ks(e,a){let t=this.cache;t[0]!==a&&(e.uniform1ui(this.addr,a),t[0]=a)}function qs(e,a){let t=this.cache;if(a.x!==void 0)(t[0]!==a.x||t[1]!==a.y)&&(e.uniform2ui(this.addr,a.x,a.y),t[0]=a.x,t[1]=a.y);else{if(ut(t,a))return;e.uniform2uiv(this.addr,a),ft(t,a)}}function Zs(e,a){let t=this.cache;if(a.x!==void 0)(t[0]!==a.x||t[1]!==a.y||t[2]!==a.z)&&(e.uniform3ui(this.addr,a.x,a.y,a.z),t[0]=a.x,t[1]=a.y,t[2]=a.z);else{if(ut(t,a))return;e.uniform3uiv(this.addr,a),ft(t,a)}}function $s(e,a){let t=this.cache;if(a.x!==void 0)(t[0]!==a.x||t[1]!==a.y||t[2]!==a.z||t[3]!==a.w)&&(e.uniform4ui(this.addr,a.x,a.y,a.z,a.w),t[0]=a.x,t[1]=a.y,t[2]=a.z,t[3]=a.w);else{if(ut(t,a))return;e.uniform4uiv(this.addr,a),ft(t,a)}}function Qs(e,a,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(e.uniform1i(this.addr,n),i[0]=n);let r;this.type===e.SAMPLER_2D_SHADOW?(mi.compareFunction=t.isReversedDepthBuffer()?518:515,r=mi):r=en,t.setTexture2D(a||r,n)}function Js(e,a,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(e.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(a||an,n)}function el(e,a,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(e.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(a||rn,n)}function tl(e,a,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(e.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(a||tn,n)}function al(e){switch(e){case 5126:return Fs;case 35664:return Bs;case 35665:return Gs;case 35666:return Hs;case 35674:return Vs;case 35675:return zs;case 35676:return ks;case 5124:case 35670:return Ws;case 35667:case 35671:return Xs;case 35668:case 35672:return Ys;case 35669:case 35673:return js;case 5125:return Ks;case 36294:return qs;case 36295:return Zs;case 36296:return $s;case 35678:case 36198:case 36298:case 36306:case 35682:return Qs;case 35679:case 36299:case 36307:return Js;case 35680:case 36300:case 36308:case 36293:return el;case 36289:case 36303:case 36311:case 36292:return tl}}function il(e,a){e.uniform1fv(this.addr,a)}function rl(e,a){let t=na(a,this.size,2);e.uniform2fv(this.addr,t)}function nl(e,a){let t=na(a,this.size,3);e.uniform3fv(this.addr,t)}function ol(e,a){let t=na(a,this.size,4);e.uniform4fv(this.addr,t)}function sl(e,a){let t=na(a,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function ll(e,a){let t=na(a,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function cl(e,a){let t=na(a,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function dl(e,a){e.uniform1iv(this.addr,a)}function ul(e,a){e.uniform2iv(this.addr,a)}function fl(e,a){e.uniform3iv(this.addr,a)}function pl(e,a){e.uniform4iv(this.addr,a)}function hl(e,a){e.uniform1uiv(this.addr,a)}function ml(e,a){e.uniform2uiv(this.addr,a)}function gl(e,a){e.uniform3uiv(this.addr,a)}function _l(e,a){e.uniform4uiv(this.addr,a)}function vl(e,a,t){let i=this.cache,n=a.length,r=La(t,n);ut(i,r)||(e.uniform1iv(this.addr,r),ft(i,r));let o;o=this.type===e.SAMPLER_2D_SHADOW?mi:en;for(let s=0;s!==n;++s)t.setTexture2D(a[s]||o,r[s])}function Sl(e,a,t){let i=this.cache,n=a.length,r=La(t,n);ut(i,r)||(e.uniform1iv(this.addr,r),ft(i,r));for(let o=0;o!==n;++o)t.setTexture3D(a[o]||an,r[o])}function El(e,a,t){let i=this.cache,n=a.length,r=La(t,n);ut(i,r)||(e.uniform1iv(this.addr,r),ft(i,r));for(let o=0;o!==n;++o)t.setTextureCube(a[o]||rn,r[o])}function Ml(e,a,t){let i=this.cache,n=a.length,r=La(t,n);ut(i,r)||(e.uniform1iv(this.addr,r),ft(i,r));for(let o=0;o!==n;++o)t.setTexture2DArray(a[o]||tn,r[o])}function Tl(e){switch(e){case 5126:return il;case 35664:return rl;case 35665:return nl;case 35666:return ol;case 35674:return sl;case 35675:return ll;case 35676:return cl;case 5124:case 35670:return dl;case 35667:case 35671:return ul;case 35668:case 35672:return fl;case 35669:case 35673:return pl;case 5125:return hl;case 36294:return ml;case 36295:return gl;case 36296:return _l;case 35678:case 36198:case 36298:case 36306:case 35682:return vl;case 35679:case 36299:case 36307:return Sl;case 35680:case 36300:case 36308:case 36293:return El;case 36289:case 36303:case 36311:case 36292:return Ml}}var xl=class{constructor(e,a,t){this.id=e,this.addr=t,this.cache=[],this.type=a.type,this.setValue=al(a.type)}},bl=class{constructor(e,a,t){this.id=e,this.addr=t,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=Tl(a.type)}},wl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,a,t){let i=this.seq;for(let n=0,r=i.length;n!==r;++n){let o=i[n];o.setValue(e,a[o.id],t)}}},Xa=/(\w+)(\])?(\[|\.)?/g;function dr(e,a){e.seq.push(a),e.map[a.id]=a}function Al(e,a,t){let i=e.name,n=i.length;for(Xa.lastIndex=0;;){let r=Xa.exec(i),o=Xa.lastIndex,s=r[1],S=r[2]==="]",E=r[3];if(S&&(s|=0),E===void 0||E==="["&&o+2===n){dr(t,E===void 0?new xl(s,e,a):new bl(s,e,a));break}{let M=t.map[s];M===void 0&&(M=new wl(s),dr(t,M)),t=M}}}var xa=class{constructor(e,a){this.seq=[],this.map={};let t=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let r=0;r<t;++r){let o=e.getActiveUniform(a,r);Al(o,e.getUniformLocation(a,o.name),this)}let i=[],n=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(r):n.push(r);i.length>0&&(this.seq=i.concat(n))}setValue(e,a,t,i){let n=this.map[a];n!==void 0&&n.setValue(e,t,i)}setOptional(e,a,t){let i=a[t];i!==void 0&&this.setValue(e,t,i)}static upload(e,a,t,i){for(let n=0,r=a.length;n!==r;++n){let o=a[n],s=t[o.id];s.needsUpdate!==!1&&o.setValue(e,s.value,i)}}static seqWithValue(e,a){let t=[];for(let i=0,n=e.length;i!==n;++i){let r=e[i];r.id in a&&t.push(r)}return t}};function ur(e,a,t){let i=e.createShader(a);return e.shaderSource(i,t),e.compileShader(i),i}var Rl=37297,Cl=0;function yl(e,a){let t=e.split(`
`),i=[],n=Math.max(a-6,0),r=Math.min(a+6,t.length);for(let o=n;o<r;o++){let s=o+1;i.push(`${s===a?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}var fr=new Be;function Pl(e){it._getMatrix(fr,it.workingColorSpace,e);let a=`mat3( ${fr.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(e)){case Zr:return[a,"LinearTransferOETF"];case pi:return[a,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",e),[a,"LinearTransferOETF"]}}function pr(e,a,t){let i=e.getShaderParameter(a,e.COMPILE_STATUS),n=(e.getShaderInfoLog(a)||"").trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+yl(e.getShaderSource(a),o)}return n}function Dl(e,a){let t=Pl(a);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Ll={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function Ul(e,a){let t=Ll[a];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",a),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ea=new q;function Nl(){return it.getLuminanceCoefficients(Ea),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Ea.x.toFixed(4)}, ${Ea.y.toFixed(4)}, ${Ea.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Il(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function Ol(e){let a=[];for(let t in e){let i=e[t];i!==!1&&a.push("#define "+t+" "+i)}return a.join(`
`)}function Fl(e,a){let t={},i=e.getProgramParameter(a,e.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=e.getActiveAttrib(a,n),o=r.name,s=1;r.type===e.FLOAT_MAT2&&(s=2),r.type===e.FLOAT_MAT3&&(s=3),r.type===e.FLOAT_MAT4&&(s=4),t[o]={type:r.type,location:e.getAttribLocation(a,o),locationSize:s}}return t}function pa(e){return e!==""}function hr(e,a){let t=a.numSpotLightShadows+a.numSpotLightMaps-a.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,a.numSunLights).replace(/NUM_DIR_LIGHTS/g,a.numDirLights).replace(/NUM_SPOT_LIGHTS/g,a.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,a.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,a.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,a.numPointLights).replace(/NUM_HEMI_LIGHTS/g,a.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,a.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,a.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,a.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,a.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,a.numPointLightShadows)}function mr(e,a){return e.replace(/NUM_CLIPPING_PLANES/g,a.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,a.numClippingPlanes-a.numClipIntersection)}var Bl=/^[ \t]*#include +<([\w\d./]+)>/gm;function gi(e){return e.replace(Bl,Hl)}var Gl=new Map;function Hl(e,a){let t=Ue[a];if(t===void 0){let i=Gl.get(a);if(i!==void 0)t=Ue[i],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',a,i);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+a+">")}return gi(t)}var Vl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gr(e){return e.replace(Vl,zl)}function zl(e,a,t,i){let n="";for(let r=parseInt(a);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function _r(e){let a=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?a+=`
#define HIGH_PRECISION`:e.precision==="mediump"?a+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(a+=`
#define LOW_PRECISION`),a}var kl={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function Wl(e){return kl[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Xl={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function Yl(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":Xl[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var jl={302:"ENVMAP_MODE_REFRACTION"};function Kl(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":jl[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ql={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function Zl(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":ql[e.combine]||"ENVMAP_BLENDING_NONE"}function $l(e){let a=e.envMapCubeUVHeight;if(a===null)return null;let t=Math.log2(a)-2,i=1/a;return{texelWidth:1/(3*Math.max(2**t,112)),texelHeight:i,maxMip:t}}function Ql(e,a,t,i){let n=e.getContext(),r=t.defines,o=t.vertexShader,s=t.fragmentShader,S=Wl(t),E=Yl(t),M=Kl(t),N=Zl(t),h=$l(t),x=Il(t),T=Ol(r),k=n.createProgram(),g,l,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(pa).join(`
`),g.length>0&&(g+=`
`),l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(pa).join(`
`),l.length>0&&(l+=`
`)):(g=[_r(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+M:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+S:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),l=[_r(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+E:"",t.envMap?"#define "+M:"",t.envMap?"#define "+N:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+S:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping===0?"":"#define TONE_MAPPING",t.toneMapping===0?"":Ue.tonemapping_pars_fragment,t.toneMapping===0?"":Ul("toneMapping",t.toneMapping),t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Dl("linearToOutputTexel",t.outputColorSpace),Nl(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pa).join(`
`)),o=gi(o),o=hr(o,t),o=mr(o,t),s=gi(s),s=hr(s,t),s=mr(s,t),o=gr(o),s=gr(s),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,l=["#define varying in",t.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);let D=b+g+o,p=b+l+s,_=ur(n,n.VERTEX_SHADER,D),v=ur(n,n.FRAGMENT_SHADER,p);n.attachShader(k,_),n.attachShader(k,v),t.index0AttributeName===void 0?t.hasPositionAttribute===!0&&n.bindAttribLocation(k,0,"position"):n.bindAttribLocation(k,0,t.index0AttributeName),n.linkProgram(k);function w(y){if(e.debug.checkShaderErrors){let I=n.getProgramInfoLog(k)||"",Q=n.getShaderInfoLog(_)||"",U=n.getShaderInfoLog(v)||"",G=I.trim(),X=Q.trim(),B=U.trim(),$=!0,Y=!0;if(n.getProgramParameter(k,n.LINK_STATUS)===!1)if($=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(n,k,_,v);else{let K=pr(n,_,"vertex"),J=pr(n,v,"fragment");et("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(k,n.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+G+`
`+K+`
`+J)}else G===""?(X===""||B==="")&&(Y=!1):je("WebGLProgram: Program Info Log:",G);Y&&(y.diagnostics={runnable:$,programLog:G,vertexShader:{log:X,prefix:g},fragmentShader:{log:B,prefix:l}})}n.deleteShader(_),n.deleteShader(v),d=new xa(n,k),m=Fl(n,k)}let d;this.getUniforms=function(){return d===void 0&&w(this),d};let m;this.getAttributes=function(){return m===void 0&&w(this),m};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=n.getProgramParameter(k,Rl)),z},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(k),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cl++,this.cacheKey=a,this.usedTimes=1,this.program=k,this.vertexShader=_,this.fragmentShader=v,this}var Jl=0,ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,a,t){let i=this._getShaderCacheForMaterial(e);return i.has(a)===!1&&(i.add(a),a.usedTimes++),i.has(t)===!1&&(i.add(t),t.usedTimes++),this}remove(e){let a=this.materialCache.get(e);for(let t of a)t.usedTimes--,t.usedTimes===0&&this.shaderCache.delete(t.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let a=this.materialCache,t=a.get(e);return t===void 0&&(t=new Set,a.set(e,t)),t}_getShaderStage(e){let a=this.shaderCache,t=a.get(e);return t===void 0&&(t=new tc(e),a.set(e,t)),t}},tc=class{constructor(e){this.id=Jl++,this.code=e,this.usedTimes=0}};function ac(e){return e===1030||e===37490||e===36285}function ic(e,a,t,i,n,r){let o=new os,s=new ec,S=new Set,E=[],M=new Map,N=i.logarithmicDepthBuffer,h=i.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(d){return S.add(d),d===0?"uv":`uv${d}`}function k(d,m,z,y,I,Q){let U=y.fog,G=I.geometry,X=d.isMeshStandardMaterial||d.isMeshLambertMaterial||d.isMeshPhongMaterial?y.environment:null,B=d.isMeshStandardMaterial||d.isMeshLambertMaterial&&!d.envMap||d.isMeshPhongMaterial&&!d.envMap,$=a.get(d.envMap||X,B),Y=$&&$.mapping===306?$.image.height:null,K=x[d.type];d.precision!==null&&(h=i.getMaxPrecision(d.precision),h!==d.precision&&je("WebGLProgram.getParameters:",d.precision,"not supported, using",h,"instead."));let J=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ne=J===void 0?0:J.length,be=0;G.morphAttributes.position!==void 0&&(be=1),G.morphAttributes.normal!==void 0&&(be=2),G.morphAttributes.color!==void 0&&(be=3);let Ge,Ie,W,re;if(K){let ct=Nt[K];Ge=ct.vertexShader,Ie=ct.fragmentShader}else{Ge=d.vertexShader,Ie=d.fragmentShader;let ct=s.getVertexShaderStage(d),Xe=s.getFragmentShaderStage(d);s.update(d,ct,Xe),W=ct.id,re=Xe.id}let le=e.getRenderTarget(),ye=e.state.buffers.depth.getReversed(),De=I.isInstancedMesh===!0,ve=I.isBatchedMesh===!0,Ke=!!d.map,ze=!!d.matcap,Le=!!$,rt=!!d.aoMap,ht=!!d.lightMap,Et=!!d.bumpMap&&d.wireframe===!1,Qe=!!d.normalMap,mt=!!d.displacementMap,st=!!d.emissiveMap,lt=!!d.metalnessMap,C=!!d.roughnessMap,gt=d.anisotropy>0,ke=d.clearcoat>0,at=d.dispersion>0,f=d.retroreflectivity>0,c=d.iridescence>0,A=d.sheen>0,H=d.transmission>0,Z=gt&&!!d.anisotropyMap,se=ke&&!!d.clearcoatMap,pe=ke&&!!d.clearcoatNormalMap,L=ke&&!!d.clearcoatRoughnessMap,ne=c&&!!d.iridescenceMap,fe=c&&!!d.iridescenceThicknessMap,Se=A&&!!d.sheenColorMap,te=A&&!!d.sheenRoughnessMap,we=!!d.specularMap,Ae=!!d.specularColorMap,Pe=!!d.specularIntensityMap,We=H&&!!d.transmissionMap,P=H&&!!d.thicknessMap,j=!!d.gradientMap,ee=!!d.alphaMap,ge=d.alphaTest>0,Te=!!d.alphaHash,ae=!!d.extensions,me=0;d.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(me=e.toneMapping);let Ce={shaderID:K,shaderType:d.type,shaderName:d.name,vertexShader:Ge,fragmentShader:Ie,defines:d.defines,customVertexShaderID:W,customFragmentShaderID:re,isRawShaderMaterial:d.isRawShaderMaterial===!0,glslVersion:d.glslVersion,precision:h,batching:ve,batchingColor:ve&&I._colorsTexture!==null,instancing:De,instancingColor:De&&I.instanceColor!==null,instancingMorph:De&&I.morphTexture!==null,outputColorSpace:le===null?e.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!d.alphaToCoverage,map:Ke,matcap:ze,envMap:Le,envMapMode:Le&&$.mapping,envMapCubeUVHeight:Y,aoMap:rt,lightMap:ht,bumpMap:Et,normalMap:Qe,displacementMap:mt,emissiveMap:st,normalMapObjectSpace:Qe&&d.normalMapType===1,normalMapTangentSpace:Qe&&d.normalMapType===0,packedNormalMap:Qe&&d.normalMapType===0&&ac(d.normalMap.format),metalnessMap:lt,roughnessMap:C,anisotropy:gt,anisotropyMap:Z,clearcoat:ke,clearcoatMap:se,clearcoatNormalMap:pe,clearcoatRoughnessMap:L,dispersion:at,retroreflection:f,iridescence:c,iridescenceMap:ne,iridescenceThicknessMap:fe,sheen:A,sheenColorMap:Se,sheenRoughnessMap:te,specularMap:we,specularColorMap:Ae,specularIntensityMap:Pe,transmission:H,transmissionMap:We,thicknessMap:P,gradientMap:j,opaque:d.transparent===!1&&d.blending===1&&d.alphaToCoverage===!1,alphaMap:ee,alphaTest:ge,alphaHash:Te,combine:d.combine,mapUv:Ke&&T(d.map.channel),aoMapUv:rt&&T(d.aoMap.channel),lightMapUv:ht&&T(d.lightMap.channel),bumpMapUv:Et&&T(d.bumpMap.channel),normalMapUv:Qe&&T(d.normalMap.channel),displacementMapUv:mt&&T(d.displacementMap.channel),emissiveMapUv:st&&T(d.emissiveMap.channel),metalnessMapUv:lt&&T(d.metalnessMap.channel),roughnessMapUv:C&&T(d.roughnessMap.channel),anisotropyMapUv:Z&&T(d.anisotropyMap.channel),clearcoatMapUv:se&&T(d.clearcoatMap.channel),clearcoatNormalMapUv:pe&&T(d.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:L&&T(d.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&T(d.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&T(d.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&T(d.sheenColorMap.channel),sheenRoughnessMapUv:te&&T(d.sheenRoughnessMap.channel),specularMapUv:we&&T(d.specularMap.channel),specularColorMapUv:Ae&&T(d.specularColorMap.channel),specularIntensityMapUv:Pe&&T(d.specularIntensityMap.channel),transmissionMapUv:We&&T(d.transmissionMap.channel),thicknessMapUv:P&&T(d.thicknessMap.channel),alphaMapUv:ee&&T(d.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Qe||gt),vertexNormals:!!G.attributes.normal,vertexColors:d.vertexColors,vertexAlphas:d.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!G.attributes.uv&&(Ke||ee),fog:!!U,useFog:d.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:d.wireframe===!1&&(d.flatShading===!0||G.attributes.normal===void 0&&Qe===!1&&(d.isMeshLambertMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isMeshPhysicalMaterial)),sizeAttenuation:d.sizeAttenuation===!0,logarithmicDepthBuffer:N,reversedDepthBuffer:ye,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:be,numSunLights:m.sun.length,numDirLights:m.directional.length,numPointLights:m.point.length,numSpotLights:m.spot.length,numSpotLightMaps:m.spotLightMap.length,numRectAreaLights:m.rectArea.length,numHemiLights:m.hemi.length,numSunLightShadows:m.sunShadowMap.length,numDirLightShadows:m.directionalShadowMap.length,numPointLightShadows:m.pointShadowMap.length,numSpotLightShadows:m.spotShadowMap.length,numSpotLightShadowsWithMaps:m.numSpotLightShadowsWithMaps,numLightProbes:m.numLightProbes,numLightProbeGrids:Q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:d.dithering,shadowMapEnabled:e.shadowMap.enabled&&z.length>0,shadowMapType:e.shadowMap.type,toneMapping:me,decodeVideoTexture:Ke&&d.map.isVideoTexture===!0&&it.getTransfer(d.map.colorSpace)==="srgb",decodeVideoTextureEmissive:st&&d.emissiveMap.isVideoTexture===!0&&it.getTransfer(d.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:d.premultipliedAlpha,doubleSided:d.side===2,flipSided:d.side===1,useDepthPacking:d.depthPacking>=0,depthPacking:d.depthPacking||0,index0AttributeName:d.index0AttributeName,extensionClipCullDistance:ae&&d.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&d.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:d.customProgramCacheKey()};return Ce.vertexUv1s=S.has(1),Ce.vertexUv2s=S.has(2),Ce.vertexUv3s=S.has(3),S.clear(),Ce}function g(d){let m=[];if(d.shaderID?m.push(d.shaderID):(m.push(d.customVertexShaderID),m.push(d.customFragmentShaderID)),d.defines!==void 0)for(let z in d.defines)m.push(z),m.push(d.defines[z]);return d.isRawShaderMaterial===!1&&(l(m,d),b(m,d),m.push(e.outputColorSpace)),m.push(d.customProgramCacheKey),m.join()}function l(d,m){d.push(m.precision),d.push(m.outputColorSpace),d.push(m.envMapMode),d.push(m.envMapCubeUVHeight),d.push(m.mapUv),d.push(m.alphaMapUv),d.push(m.lightMapUv),d.push(m.aoMapUv),d.push(m.bumpMapUv),d.push(m.normalMapUv),d.push(m.displacementMapUv),d.push(m.emissiveMapUv),d.push(m.metalnessMapUv),d.push(m.roughnessMapUv),d.push(m.anisotropyMapUv),d.push(m.clearcoatMapUv),d.push(m.clearcoatNormalMapUv),d.push(m.clearcoatRoughnessMapUv),d.push(m.iridescenceMapUv),d.push(m.iridescenceThicknessMapUv),d.push(m.sheenColorMapUv),d.push(m.sheenRoughnessMapUv),d.push(m.specularMapUv),d.push(m.specularColorMapUv),d.push(m.specularIntensityMapUv),d.push(m.transmissionMapUv),d.push(m.thicknessMapUv),d.push(m.combine),d.push(m.fogExp2),d.push(m.sizeAttenuation),d.push(m.morphTargetsCount),d.push(m.morphAttributeCount),d.push(m.numSunLights),d.push(m.numDirLights),d.push(m.numPointLights),d.push(m.numSpotLights),d.push(m.numSpotLightMaps),d.push(m.numHemiLights),d.push(m.numRectAreaLights),d.push(m.numSunLightShadows),d.push(m.numDirLightShadows),d.push(m.numPointLightShadows),d.push(m.numSpotLightShadows),d.push(m.numSpotLightShadowsWithMaps),d.push(m.numLightProbes),d.push(m.shadowMapType),d.push(m.toneMapping),d.push(m.numClippingPlanes),d.push(m.numClipIntersection),d.push(m.depthPacking)}function b(d,m){o.disableAll(),m.instancing&&o.enable(0),m.instancingColor&&o.enable(1),m.instancingMorph&&o.enable(2),m.matcap&&o.enable(3),m.envMap&&o.enable(4),m.normalMapObjectSpace&&o.enable(5),m.normalMapTangentSpace&&o.enable(6),m.clearcoat&&o.enable(7),m.iridescence&&o.enable(8),m.alphaTest&&o.enable(9),m.vertexColors&&o.enable(10),m.vertexAlphas&&o.enable(11),m.vertexUv1s&&o.enable(12),m.vertexUv2s&&o.enable(13),m.vertexUv3s&&o.enable(14),m.vertexTangents&&o.enable(15),m.anisotropy&&o.enable(16),m.alphaHash&&o.enable(17),m.batching&&o.enable(18),m.dispersion&&o.enable(19),m.retroreflection&&o.enable(24),m.batchingColor&&o.enable(20),m.gradientMap&&o.enable(21),m.packedNormalMap&&o.enable(22),m.vertexNormals&&o.enable(23),d.push(o.mask),o.disableAll(),m.fog&&o.enable(0),m.useFog&&o.enable(1),m.flatShading&&o.enable(2),m.logarithmicDepthBuffer&&o.enable(3),m.reversedDepthBuffer&&o.enable(4),m.skinning&&o.enable(5),m.morphTargets&&o.enable(6),m.morphNormals&&o.enable(7),m.morphColors&&o.enable(8),m.premultipliedAlpha&&o.enable(9),m.shadowMapEnabled&&o.enable(10),m.doubleSided&&o.enable(11),m.flipSided&&o.enable(12),m.useDepthPacking&&o.enable(13),m.dithering&&o.enable(14),m.transmission&&o.enable(15),m.sheen&&o.enable(16),m.opaque&&o.enable(17),m.pointsUvs&&o.enable(18),m.decodeVideoTexture&&o.enable(19),m.decodeVideoTextureEmissive&&o.enable(20),m.alphaToCoverage&&o.enable(21),m.numLightProbeGrids>0&&o.enable(22),m.hasPositionAttribute&&o.enable(23),d.push(o.mask)}function D(d){let m=x[d.type],z;if(m){let y=Nt[m];z=Ko.clone(y.uniforms)}else z=d.uniforms;return z}function p(d,m){let z=M.get(m);return z===void 0?(z=new Ql(e,m,d,n),E.push(z),M.set(m,z)):++z.usedTimes,z}function _(d){if(--d.usedTimes===0){let m=E.indexOf(d);E[m]=E[E.length-1],E.pop(),M.delete(d.cacheKey),d.destroy()}}function v(d){s.remove(d)}function w(){s.dispose()}return{getParameters:k,getProgramCacheKey:g,getUniforms:D,acquireProgram:p,releaseProgram:_,releaseShaderCache:v,programs:E,dispose:w}}function rc(){let e=new WeakMap;function a(o){return e.has(o)}function t(o){let s=e.get(o);return s===void 0&&(s={},e.set(o,s)),s}function i(o){e.delete(o)}function n(o,s,S){e.get(o)[s]=S}function r(){e=new WeakMap}return{has:a,get:t,remove:i,update:n,dispose:r}}function nc(e,a){return e.groupOrder===a.groupOrder?e.renderOrder===a.renderOrder?e.material.id===a.material.id?e.materialVariant===a.materialVariant?e.z===a.z?e.id-a.id:e.z-a.z:e.materialVariant-a.materialVariant:e.material.id-a.material.id:e.renderOrder-a.renderOrder:e.groupOrder-a.groupOrder}function vr(e,a){return e.groupOrder===a.groupOrder?e.renderOrder===a.renderOrder?e.z===a.z?e.id-a.id:a.z-e.z:e.renderOrder-a.renderOrder:e.groupOrder-a.groupOrder}function Sr(){let e=[],a=0,t=[],i=[],n=[];function r(){a=0,t.length=0,i.length=0,n.length=0}function o(h){let x=0;return h.isInstancedMesh&&(x+=2),h.isSkinnedMesh&&(x+=1),x}function s(h,x,T,k,g,l){let b=e[a];return b===void 0?(b={id:h.id,object:h,geometry:x,material:T,materialVariant:o(h),groupOrder:k,renderOrder:h.renderOrder,z:g,group:l},e[a]=b):(b.id=h.id,b.object=h,b.geometry=x,b.material=T,b.materialVariant=o(h),b.groupOrder=k,b.renderOrder=h.renderOrder,b.z=g,b.group=l),a++,b}function S(h,x,T,k,g,l,b){b.reversedDepth===!0&&(g=-g);let D=s(h,x,T,k,g,l);T.transmission>0?i.push(D):T.transparent===!0?n.push(D):t.push(D)}function E(h,x,T,k,g,l){let b=s(h,x,T,k,g,l);T.transmission>0?i.unshift(b):T.transparent===!0?n.unshift(b):t.unshift(b)}function M(h,x){t.length>1&&t.sort(h||nc),i.length>1&&i.sort(x||vr),n.length>1&&n.sort(x||vr)}function N(){for(let h=a,x=e.length;h<x;h++){let T=e[h];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:S,unshift:E,finish:N,sort:M}}function oc(){let e=new WeakMap;function a(i,n){let r=e.get(i),o;return r===void 0?(o=new Sr,e.set(i,[o])):n>=r.length?(o=new Sr,r.push(o)):o=r[n],o}function t(){e=new WeakMap}return{get:a,dispose:t}}function sc(){let e={};return{get:function(a){if(e[a.id]!==void 0)return e[a.id];let t;switch(a.type){case"SunLight":case"DirectionalLight":t={direction:new q,color:new Ye};break;case"SpotLight":t={position:new q,direction:new q,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new q,halfWidth:new q,halfHeight:new q}}return e[a.id]=t,t}}}function lc(){let e={};return{get:function(a){if(e[a.id]!==void 0)return e[a.id];let t;switch(a.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3}}return e[a.id]=t,t}}}var cc=0;function dc(e,a){return(a.castShadow?2:0)-(e.castShadow?2:0)+ +!!a.map-!!e.map}function uc(e){let a=new sc,t=lc(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let E=0;E<9;E++)i.probe.push(new q);let n=new q,r=new Zt,o=new Zt;function s(E){let M=0,N=0,h=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let x=0,T=0,k=0,g=0,l=0,b=0,D=0,p=0,_=0,v=0,w=0,d=0,m=0,z=0;E.sort(dc);for(let I=0,Q=E.length;I<Q;I++){let U=E[I],G=U.color,X=U.intensity,B=U.distance,$=null;if(U.shadow&&U.shadow.map&&($=U.shadow.map.texture.format===1030?U.shadow.map.texture:U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)M+=G.r*X,N+=G.g*X,h+=G.b*X;else if(U.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(U.sh.coefficients[Y],X);z++}else if(U.isSunLight){let Y=a.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let K=U.shadow,J=t.get(U);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),i.sunShadow[T]=J,i.sunShadowMap[T]=$;let Ne=K.getViewportCount();for(let be=0;be<Ne;be++)i.sunShadowMatrix[k+be]=K.getMatrix(be),i.sunShadowCascade[k+be]=K._cascadeData[be];k+=Ne,T++}i.sun[x]=Y,x++}else if(U.isDirectionalLight){let Y=a.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let K=U.shadow,J=t.get(U);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,i.directionalShadow[g]=J,i.directionalShadowMap[g]=$,i.directionalShadowMatrix[g]=U.shadow.matrix,_++}i.directional[g]=Y,g++}else if(U.isSpotLight){let Y=a.get(U);Y.position.setFromMatrixPosition(U.matrixWorld),Y.color.copy(G).multiplyScalar(X),Y.distance=B,Y.coneCos=Math.cos(U.angle),Y.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Y.decay=U.decay,i.spot[b]=Y;let K=U.shadow;if(U.map&&(i.spotLightMap[d]=U.map,d++,K.updateMatrices(U),U.castShadow&&m++),i.spotLightMatrix[b]=K.matrix,U.castShadow){let J=t.get(U);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,i.spotShadow[b]=J,i.spotShadowMap[b]=$,w++}b++}else if(U.isRectAreaLight){let Y=a.get(U);Y.color.copy(G).multiplyScalar(X),Y.halfWidth.set(U.width*.5,0,0),Y.halfHeight.set(0,U.height*.5,0),i.rectArea[D]=Y,D++}else if(U.isPointLight){let Y=a.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),Y.distance=U.distance,Y.decay=U.decay,U.castShadow){let K=U.shadow,J=t.get(U);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,J.shadowCameraNear=K.camera.near,J.shadowCameraFar=K.camera.far,i.pointShadow[l]=J,i.pointShadowMap[l]=$,i.pointShadowMatrix[l]=U.shadow.matrix,v++}i.point[l]=Y,l++}else if(U.isHemisphereLight){let Y=a.get(U);Y.skyColor.copy(U.color).multiplyScalar(X),Y.groundColor.copy(U.groundColor).multiplyScalar(X),i.hemi[p]=Y,p++}}D>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=M,i.ambient[1]=N,i.ambient[2]=h;let y=i.hash;(y.sunLength!==x||y.directionalLength!==g||y.pointLength!==l||y.spotLength!==b||y.rectAreaLength!==D||y.hemiLength!==p||y.numSunShadows!==T||y.numDirectionalShadows!==_||y.numPointShadows!==v||y.numSpotShadows!==w||y.numSpotMaps!==d||y.numLightProbes!==z)&&(i.sun.length=x,i.directional.length=g,i.spot.length=b,i.rectArea.length=D,i.point.length=l,i.hemi.length=p,i.sunShadow.length=T,i.sunShadowMap.length=T,i.sunShadowMatrix.length=k,i.sunShadowCascade.length=k,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.directionalShadowMatrix.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.pointShadowMatrix.length=v,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+d-m,i.spotLightMap.length=d,i.numSpotLightShadowsWithMaps=m,i.numLightProbes=z,y.sunLength=x,y.directionalLength=g,y.pointLength=l,y.spotLength=b,y.rectAreaLength=D,y.hemiLength=p,y.numSunShadows=T,y.numDirectionalShadows=_,y.numPointShadows=v,y.numSpotShadows=w,y.numSpotMaps=d,y.numLightProbes=z,i.version=cc++)}function S(E,M){let N=0,h=0,x=0,T=0,k=0,g=0,l=M.matrixWorldInverse;for(let b=0,D=E.length;b<D;b++){let p=E[b];if(p.isSunLight){let _=i.sun[N];_.direction.setFromMatrixPosition(p.matrixWorld),_.direction.transformDirection(l),N++}else if(p.isDirectionalLight){let _=i.directional[h];_.direction.setFromMatrixPosition(p.matrixWorld),n.setFromMatrixPosition(p.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(l),h++}else if(p.isSpotLight){let _=i.spot[T];_.position.setFromMatrixPosition(p.matrixWorld),_.position.applyMatrix4(l),_.direction.setFromMatrixPosition(p.matrixWorld),n.setFromMatrixPosition(p.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(l),T++}else if(p.isRectAreaLight){let _=i.rectArea[k];_.position.setFromMatrixPosition(p.matrixWorld),_.position.applyMatrix4(l),o.identity(),r.copy(p.matrixWorld),r.premultiply(l),o.extractRotation(r),_.halfWidth.set(p.width*.5,0,0),_.halfHeight.set(0,p.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),k++}else if(p.isPointLight){let _=i.point[x];_.position.setFromMatrixPosition(p.matrixWorld),_.position.applyMatrix4(l),x++}else if(p.isHemisphereLight){let _=i.hemi[g];_.direction.setFromMatrixPosition(p.matrixWorld),_.direction.transformDirection(l),g++}}}return{setup:s,setupView:S,state:i}}function Er(e){let a=new uc(e),t=[],i=[],n=[];function r(h){N.camera=h,t.length=0,i.length=0,n.length=0}function o(h){t.push(h)}function s(h){i.push(h)}function S(h){n.push(h)}function E(){a.setup(t)}function M(h){a.setupView(t,h)}let N={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:a,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:N,setupLights:E,setupLightsView:M,pushLight:o,pushShadow:s,pushLightProbeGrid:S}}function fc(e){let a=new WeakMap;function t(n,r=0){let o=a.get(n),s;return o===void 0?(s=new Er(e),a.set(n,[s])):r>=o.length?(s=new Er(e),o.push(s)):s=o[r],s}function i(){a=new WeakMap}return{get:t,dispose:i}}var pc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hc=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,mc=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],gc=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Mr=new Zt,la=new q,Ya=new q;function _c(e,a,t){let i=new Br,n=new dt,r=new dt,o=new St,s=new go,S=new _o,E={},M=t.maxTextureSize,N={0:1,1:0,2:2},h=new bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:pc,fragmentShader:hc}),x=h.clone();x.defines.HORIZONTAL_PASS=1;let T=new ya;T.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let k=new tt(T,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let l=this.type;this.render=function(v,w,d){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||v.length===0)return;this.type===2&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=1);let m=e.getRenderTarget(),z=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),I=e.state;I.setBlending(0),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let Q=l!==this.type;Q&&w.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(G=>G.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,G=v.length;U<G;U++){let X=v[U],B=X.shadow;if(B===void 0){je("WebGLShadowMap:",X,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;n.copy(B.mapSize);let $=B.getFrameExtents();n.multiply($),r.copy(B.mapSize),(n.x>M||n.y>M)&&(n.x>M&&(r.x=Math.floor(M/$.x),n.x=r.x*$.x,B.mapSize.x=r.x),n.y>M&&(r.y=Math.floor(M/$.y),n.y=r.y*$.y,B.mapSize.y=r.y));let Y=e.state.buffers.depth.getReversed();if(B.camera._reversedDepth=Y,B.map===null||Q===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===3){if(X.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Pt(n.x,n.y,{format:ci,type:$t,minFilter:It,magFilter:It,generateMipmaps:!1}),B.map.texture.name=X.name+".shadowMap",B.map.depthTexture=new ba(n.x,n.y,Hr),B.map.depthTexture.name=X.name+".shadowMapDepth",B.map.depthTexture.format=di,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=ua,B.map.depthTexture.magFilter=ua}else X.isPointLight?(B.map=new Jr(n.x),B.map.depthTexture=new vo(n.x,wa)):(B.map=new Pt(n.x,n.y),B.map.depthTexture=new ba(n.x,n.y,wa)),B.map.depthTexture.name=X.name+".shadowMap",B.map.depthTexture.format=di,this.type===1?(B.map.depthTexture.compareFunction=Y?518:515,B.map.depthTexture.minFilter=It,B.map.depthTexture.magFilter=It):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=ua,B.map.depthTexture.magFilter=ua);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==n.x||B.map.height!==n.y)&&B.map.setSize(n.x,n.y);let K=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();X.isPointLight!==!0&&B.updateMatrices(X,d);for(let J=0;J<K;J++){let Ne=B.getCamera(J);if(X.isPointLight){let be=B.camera,Ge=B.matrix,Ie=X.distance||be.far;Ie!==be.far&&(be.far=Ie,be.updateProjectionMatrix()),la.setFromMatrixPosition(X.matrixWorld),be.position.copy(la),Ya.copy(be.position),Ya.add(mc[J]),be.up.copy(gc[J]),be.lookAt(Ya),be.updateMatrixWorld(),Ge.makeTranslation(-la.x,-la.y,-la.z),Mr.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Mr,be.coordinateSystem,be.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)e.setRenderTarget(B.map,J),e.clear();else{J===0&&(e.setRenderTarget(B.map),e.clear());let be=B.getViewport(J);o.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),I.viewport(o)}i=B.getFrustum(J),p(w,d,Ne,X,this.type)}B.isPointLightShadow!==!0&&this.type===3&&b(B,d),B.needsUpdate=!1}l=this.type,g.needsUpdate=!1,e.setRenderTarget(m,z,y)};function b(v,w){let d=a.update(k);h.defines.VSM_SAMPLES!==v.blurSamples&&(h.defines.VSM_SAMPLES=v.blurSamples,x.defines.VSM_SAMPLES=v.blurSamples,h.needsUpdate=!0,x.needsUpdate=!0),v.mapPass===null?v.mapPass=new Pt(n.x,n.y,{format:ci,type:$t}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),h.uniforms.shadow_pass.value=v.map.depthTexture,h.uniforms.resolution.value.set(v.map.width,v.map.height),h.uniforms.radius.value=v.radius,e.setRenderTarget(v.mapPass),e.clear(),e.renderBufferDirect(w,null,d,h,k,null),x.uniforms.shadow_pass.value=v.mapPass.texture,x.uniforms.resolution.value.set(v.map.width,v.map.height),x.uniforms.radius.value=v.radius,e.setRenderTarget(v.map),e.clear(),e.renderBufferDirect(w,null,d,x,k,null)}function D(v,w,d,m){let z=null,y=d.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(y!==void 0)z=y;else if(z=d.isPointLight===!0?S:s,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let I=z.uuid,Q=w.uuid,U=E[I];U===void 0&&(U={},E[I]=U);let G=U[Q];G===void 0&&(G=z.clone(),U[Q]=G,w.addEventListener("dispose",_)),z=G}if(z.visible=w.visible,z.wireframe=w.wireframe,m===3?z.side=w.shadowSide===null?w.side:w.shadowSide:z.side=w.shadowSide===null?N[w.side]:w.shadowSide,z.alphaMap=w.alphaMap,z.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,z.map=w.map,z.clipShadows=w.clipShadows,z.clippingPlanes=w.clippingPlanes,z.clipIntersection=w.clipIntersection,z.displacementMap=w.displacementMap,z.displacementScale=w.displacementScale,z.displacementBias=w.displacementBias,z.wireframeLinewidth=w.wireframeLinewidth,z.linewidth=w.linewidth,d.isPointLight===!0&&z.isMeshDistanceMaterial===!0){let I=e.properties.get(z);I.light=d}return z}function p(v,w,d,m,z){if(v.visible===!1)return;if(v.layers.test(w.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&z===3)&&(!v.frustumCulled||v.intersectsFrustum(i))){v.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,v.matrixWorld);let I=a.update(v),Q=v.material;if(Array.isArray(Q)){let U=I.groups;for(let G=0,X=U.length;G<X;G++){let B=U[G],$=Q[B.materialIndex];if($&&$.visible){let Y=D(v,$,m,z);v.onBeforeShadow(e,v,w,d,I,Y,B),e.renderBufferDirect(d,null,I,Y,v,B),v.onAfterShadow(e,v,w,d,I,Y,B)}}}else if(Q.visible){let U=D(v,Q,m,z);v.onBeforeShadow(e,v,w,d,I,U,null),e.renderBufferDirect(d,null,I,U,v,null),v.onAfterShadow(e,v,w,d,I,U,null)}}let y=v.children;for(let I=0,Q=y.length;I<Q;I++)p(y[I],w,d,m,z)}function _(v){v.target.removeEventListener("dispose",_);for(let w in E){let d=E[w],m=v.target.uuid;m in d&&(d[m].dispose(),delete d[m])}}}function vc(e,a){function t(){let P=!1,j=new St,ee=null,ge=new St(0,0,0,0);return{setMask:function(Te){ee!==Te&&!P&&(e.colorMask(Te,Te,Te,Te),ee=Te)},setLocked:function(Te){P=Te},setClear:function(Te,ae,me,Ce,ct){ct===!0&&(Te*=Ce,ae*=Ce,me*=Ce),j.set(Te,ae,me,Ce),ge.equals(j)===!1&&(e.clearColor(Te,ae,me,Ce),ge.copy(j))},reset:function(){P=!1,ee=null,ge.set(-1,0,0,0)}}}function i(){let P=!1,j=!1,ee=null,ge=null,Te=null;return{setReversed:function(ae){if(j!==ae){let me=a.get("EXT_clip_control");ae?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),j=ae;let Ce=Te;Te=null,this.setClear(Ce)}},getReversed:function(){return j},setTest:function(ae){ae?le(e.DEPTH_TEST):ye(e.DEPTH_TEST)},setMask:function(ae){ee!==ae&&!P&&(e.depthMask(ae),ee=ae)},setFunc:function(ae){if(j&&(ae=fs[ae]),ge!==ae){switch(ae){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ge=ae}},setLocked:function(ae){P=ae},setClear:function(ae){Te!==ae&&(Te=ae,j&&(ae=1-ae),e.clearDepth(ae))},reset:function(){P=!1,ee=null,ge=null,Te=null,j=!1}}}function n(){let P=!1,j=null,ee=null,ge=null,Te=null,ae=null,me=null,Ce=null,ct=null;return{setTest:function(Xe){P||(Xe?le(e.STENCIL_TEST):ye(e.STENCIL_TEST))},setMask:function(Xe){j!==Xe&&!P&&(e.stencilMask(Xe),j=Xe)},setFunc:function(Xe,Dt,Ot){(ee!==Xe||ge!==Dt||Te!==Ot)&&(e.stencilFunc(Xe,Dt,Ot),ee=Xe,ge=Dt,Te=Ot)},setOp:function(Xe,Dt,Ot){(ae!==Xe||me!==Dt||Ce!==Ot)&&(e.stencilOp(Xe,Dt,Ot),ae=Xe,me=Dt,Ce=Ot)},setLocked:function(Xe){P=Xe},setClear:function(Xe){ct!==Xe&&(e.clearStencil(Xe),ct=Xe)},reset:function(){P=!1,j=null,ee=null,ge=null,Te=null,ae=null,me=null,Ce=null,ct=null}}}let r=new t,o=new i,s=new n,S=new WeakMap,E=new WeakMap,M={},N={},h={},x=new WeakMap,T=[],k=null,g=!1,l=null,b=null,D=null,p=null,_=null,v=null,w=null,d=new Ye(0,0,0),m=0,z=!1,y=null,I=null,Q=null,U=null,G=null,X=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,$=0,Y=e.getParameter(e.VERSION);Y.indexOf("WebGL")===-1?Y.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=$>=2):($=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=$>=1);let K=null,J={},Ne=e.getParameter(e.SCISSOR_BOX),be=e.getParameter(e.VIEWPORT),Ge=new St().fromArray(Ne),Ie=new St().fromArray(be);function W(P,j,ee,ge){let Te=new Uint8Array(4),ae=e.createTexture();e.bindTexture(P,ae),e.texParameteri(P,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(P,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let me=0;me<ee;me++)P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY?e.texImage3D(j,0,e.RGBA,1,1,ge,0,e.RGBA,e.UNSIGNED_BYTE,Te):e.texImage2D(j+me,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Te);return ae}let re={};re[e.TEXTURE_2D]=W(e.TEXTURE_2D,e.TEXTURE_2D,1),re[e.TEXTURE_CUBE_MAP]=W(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[e.TEXTURE_2D_ARRAY]=W(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),re[e.TEXTURE_3D]=W(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),le(e.DEPTH_TEST),o.setFunc(3),Et(!1),Qe(1),le(e.CULL_FACE),rt(0);function le(P){M[P]!==!0&&(e.enable(P),M[P]=!0)}function ye(P){M[P]!==!1&&(e.disable(P),M[P]=!1)}function De(P,j){return h[P]!==j&&(e.bindFramebuffer(P,j),h[P]=j,P===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=j),P===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=j),!0)}function ve(P,j){let ee=T,ge=!1;if(P){ee=x.get(j),ee===void 0&&(ee=[],x.set(j,ee));let Te=P.textures;if(ee.length!==Te.length||ee[0]!==e.COLOR_ATTACHMENT0){for(let ae=0,me=Te.length;ae<me;ae++)ee[ae]=e.COLOR_ATTACHMENT0+ae;ee.length=Te.length,ge=!0}}else ee[0]!==e.BACK&&(ee[0]=e.BACK,ge=!0);ge&&e.drawBuffers(ee)}function Ke(P){return k!==P&&(e.useProgram(P),k=P,!0)}let ze={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ze[103]=e.MIN,ze[104]=e.MAX;let Le={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function rt(P,j,ee,ge,Te,ae,me,Ce,ct,Xe){if(P===0)g===!0&&(ye(e.BLEND),g=!1);else if(g===!1&&(le(e.BLEND),g=!0),P!==5){if(P!==l||Xe!==z){if((b!==100||_!==100)&&(e.blendEquation(e.FUNC_ADD),b=100,_=100),Xe)switch(P){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:et("WebGLState: Invalid blending: ",P)}else switch(P){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",P)}D=null,p=null,v=null,w=null,d.set(0,0,0),m=0,l=P,z=Xe}}else Te||=j,ae||=ee,me||=ge,(j!==b||Te!==_)&&(e.blendEquationSeparate(ze[j],ze[Te]),b=j,_=Te),(ee!==D||ge!==p||ae!==v||me!==w)&&(e.blendFuncSeparate(Le[ee],Le[ge],Le[ae],Le[me]),D=ee,p=ge,v=ae,w=me),(Ce.equals(d)===!1||ct!==m)&&(e.blendColor(Ce.r,Ce.g,Ce.b,ct),d.copy(Ce),m=ct),l=P,z=!1}function ht(P,j){P.side===2?ye(e.CULL_FACE):le(e.CULL_FACE);let ee=P.side===1;j&&(ee=!ee),Et(ee),P.blending===1&&P.transparent===!1?rt(0):rt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);let ge=P.stencilWrite;s.setTest(ge),ge&&(s.setMask(P.stencilWriteMask),s.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),s.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),st(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?le(e.SAMPLE_ALPHA_TO_COVERAGE):ye(e.SAMPLE_ALPHA_TO_COVERAGE)}function Et(P){y!==P&&(P?e.frontFace(e.CW):e.frontFace(e.CCW),y=P)}function Qe(P){P===0?ye(e.CULL_FACE):(le(e.CULL_FACE),P!==I&&(P===1?e.cullFace(e.BACK):P===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),I=P}function mt(P){P!==Q&&(B&&e.lineWidth(P),Q=P)}function st(P,j,ee){P?(le(e.POLYGON_OFFSET_FILL),(U!==j||G!==ee)&&(U=j,G=ee,o.getReversed()&&(j=-j),e.polygonOffset(j,ee))):ye(e.POLYGON_OFFSET_FILL)}function lt(P){P?le(e.SCISSOR_TEST):ye(e.SCISSOR_TEST)}function C(P){P===void 0&&(P=e.TEXTURE0+X-1),K!==P&&(e.activeTexture(P),K=P)}function gt(P,j,ee){ee===void 0&&(ee=K===null?e.TEXTURE0+X-1:K);let ge=J[ee];ge===void 0&&(ge={type:void 0,texture:void 0},J[ee]=ge),(ge.type!==P||ge.texture!==j)&&(K!==ee&&(e.activeTexture(ee),K=ee),e.bindTexture(P,j||re[P]),ge.type=P,ge.texture=j)}function ke(){let P=J[K];P!==void 0&&P.type!==void 0&&(e.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function at(){try{e.compressedTexImage2D(...arguments)}catch(P){et("WebGLState:",P)}}function f(){try{e.compressedTexImage3D(...arguments)}catch(P){et("WebGLState:",P)}}function c(){try{e.texSubImage2D(...arguments)}catch(P){et("WebGLState:",P)}}function A(){try{e.texSubImage3D(...arguments)}catch(P){et("WebGLState:",P)}}function H(){try{e.compressedTexSubImage2D(...arguments)}catch(P){et("WebGLState:",P)}}function Z(){try{e.compressedTexSubImage3D(...arguments)}catch(P){et("WebGLState:",P)}}function se(){try{e.texStorage2D(...arguments)}catch(P){et("WebGLState:",P)}}function pe(){try{e.texStorage3D(...arguments)}catch(P){et("WebGLState:",P)}}function L(){try{e.texImage2D(...arguments)}catch(P){et("WebGLState:",P)}}function ne(){try{e.texImage3D(...arguments)}catch(P){et("WebGLState:",P)}}function fe(P){return N[P]===void 0?e.getParameter(P):N[P]}function Se(P,j){N[P]!==j&&(e.pixelStorei(P,j),N[P]=j)}function te(P){Ge.equals(P)===!1&&(e.scissor(P.x,P.y,P.z,P.w),Ge.copy(P))}function we(P){Ie.equals(P)===!1&&(e.viewport(P.x,P.y,P.z,P.w),Ie.copy(P))}function Ae(P,j){let ee=E.get(j);ee===void 0&&(ee=new WeakMap,E.set(j,ee));let ge=ee.get(P);ge===void 0&&(ge=e.getUniformBlockIndex(j,P.name),ee.set(P,ge))}function Pe(P,j){let ee=E.get(j).get(P);S.get(j)!==ee&&(e.uniformBlockBinding(j,ee,P.__bindingPointIndex),S.set(j,ee))}function We(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),M={},N={},K=null,J={},h={},x=new WeakMap,T=[],k=null,g=!1,l=null,b=null,D=null,p=null,_=null,v=null,w=null,d=new Ye(0,0,0),m=0,z=!1,y=null,I=null,Q=null,U=null,G=null,Ge.set(0,0,e.canvas.width,e.canvas.height),Ie.set(0,0,e.canvas.width,e.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:le,disable:ye,bindFramebuffer:De,drawBuffers:ve,useProgram:Ke,setBlending:rt,setMaterial:ht,setFlipSided:Et,setCullFace:Qe,setLineWidth:mt,setPolygonOffset:st,setScissorTest:lt,activeTexture:C,bindTexture:gt,unbindTexture:ke,compressedTexImage2D:at,compressedTexImage3D:f,texImage2D:L,texImage3D:ne,pixelStorei:Se,getParameter:fe,updateUBOMapping:Ae,uniformBlockBinding:Pe,texStorage2D:se,texStorage3D:pe,texSubImage2D:c,texSubImage3D:A,compressedTexSubImage2D:H,compressedTexSubImage3D:Z,scissor:te,viewport:we,reset:We}}function Sc(e,a,t,i,n,r,o){let s=a.has("WEBGL_multisampled_render_to_texture")?a.get("WEBGL_multisampled_render_to_texture"):null,S=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),E=new dt,M=new WeakMap,N=new Set,h,x=new WeakMap,T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function k(f,c){return T?new OffscreenCanvas(f,c):ps("canvas")}function g(f,c,A){let H=1,Z=at(f);if((Z.width>A||Z.height>A)&&(H=A/Math.max(Z.width,Z.height)),H<1){if(typeof HTMLImageElement<"u"&&f instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&f instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&f instanceof ImageBitmap||typeof VideoFrame<"u"&&f instanceof VideoFrame){let se=Math.floor(H*Z.width),pe=Math.floor(H*Z.height);h===void 0&&(h=k(se,pe));let L=c?k(se,pe):h;return L.width=se,L.height=pe,L.getContext("2d").drawImage(f,0,0,se,pe),je("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+se+"x"+pe+")."),L}return"data"in f&&je("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),f}return f}function l(f){return f.generateMipmaps}function b(f){e.generateMipmap(f)}function D(f){return f.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:f.isWebGL3DRenderTarget?e.TEXTURE_3D:f.isWebGLArrayRenderTarget||f.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function p(f,c,A,H,Z,se=!1){if(f!==null){if(e[f]!==void 0)return e[f];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+f+"'")}let pe;H&&(pe=a.get("EXT_texture_norm16"),pe||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let L=c;if(c===e.RED&&(A===e.FLOAT&&(L=e.R32F),A===e.HALF_FLOAT&&(L=e.R16F),A===e.UNSIGNED_BYTE&&(L=e.R8),A===e.UNSIGNED_SHORT&&pe&&(L=pe.R16_EXT),A===e.SHORT&&pe&&(L=pe.R16_SNORM_EXT)),c===e.RED_INTEGER&&(A===e.UNSIGNED_BYTE&&(L=e.R8UI),A===e.UNSIGNED_SHORT&&(L=e.R16UI),A===e.UNSIGNED_INT&&(L=e.R32UI),A===e.BYTE&&(L=e.R8I),A===e.SHORT&&(L=e.R16I),A===e.INT&&(L=e.R32I)),c===e.RG&&(A===e.FLOAT&&(L=e.RG32F),A===e.HALF_FLOAT&&(L=e.RG16F),A===e.UNSIGNED_BYTE&&(L=e.RG8),A===e.UNSIGNED_SHORT&&pe&&(L=pe.RG16_EXT),A===e.SHORT&&pe&&(L=pe.RG16_SNORM_EXT)),c===e.RG_INTEGER&&(A===e.UNSIGNED_BYTE&&(L=e.RG8UI),A===e.UNSIGNED_SHORT&&(L=e.RG16UI),A===e.UNSIGNED_INT&&(L=e.RG32UI),A===e.BYTE&&(L=e.RG8I),A===e.SHORT&&(L=e.RG16I),A===e.INT&&(L=e.RG32I)),c===e.RGB_INTEGER&&(A===e.UNSIGNED_BYTE&&(L=e.RGB8UI),A===e.UNSIGNED_SHORT&&(L=e.RGB16UI),A===e.UNSIGNED_INT&&(L=e.RGB32UI),A===e.BYTE&&(L=e.RGB8I),A===e.SHORT&&(L=e.RGB16I),A===e.INT&&(L=e.RGB32I)),c===e.RGBA_INTEGER&&(A===e.UNSIGNED_BYTE&&(L=e.RGBA8UI),A===e.UNSIGNED_SHORT&&(L=e.RGBA16UI),A===e.UNSIGNED_INT&&(L=e.RGBA32UI),A===e.BYTE&&(L=e.RGBA8I),A===e.SHORT&&(L=e.RGBA16I),A===e.INT&&(L=e.RGBA32I)),c===e.RGB&&(A===e.UNSIGNED_SHORT&&pe&&(L=pe.RGB16_EXT),A===e.SHORT&&pe&&(L=pe.RGB16_SNORM_EXT),A===e.UNSIGNED_INT_5_9_9_9_REV&&(L=e.RGB9_E5),A===e.UNSIGNED_INT_10F_11F_11F_REV&&(L=e.R11F_G11F_B10F)),c===e.RGBA){let ne=se?Zr:it.getTransfer(Z);A===e.FLOAT&&(L=e.RGBA32F),A===e.HALF_FLOAT&&(L=e.RGBA16F),A===e.UNSIGNED_BYTE&&(L=ne==="srgb"?e.SRGB8_ALPHA8:e.RGBA8),A===e.UNSIGNED_SHORT&&pe&&(L=pe.RGBA16_EXT),A===e.SHORT&&pe&&(L=pe.RGBA16_SNORM_EXT),A===e.UNSIGNED_SHORT_4_4_4_4&&(L=e.RGBA4),A===e.UNSIGNED_SHORT_5_5_5_1&&(L=e.RGB5_A1)}return(L===e.R16F||L===e.R32F||L===e.RG16F||L===e.RG32F||L===e.RGBA16F||L===e.RGBA32F)&&a.get("EXT_color_buffer_float"),L}function _(f,c){let A;return f?c===null||c===1014||c===1020?A=e.DEPTH24_STENCIL8:c===1015?A=e.DEPTH32F_STENCIL8:c===1012&&(A=e.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):c===null||c===1014||c===1020?A=e.DEPTH_COMPONENT24:c===1015?A=e.DEPTH_COMPONENT32F:c===1012&&(A=e.DEPTH_COMPONENT16),A}function v(f,c){return l(f)===!0||f.isFramebufferTexture&&f.minFilter!==1003&&f.minFilter!==1006?Math.log2(Math.max(c.width,c.height))+1:f.mipmaps!==void 0&&f.mipmaps.length>0?f.mipmaps.length:f.isCompressedTexture&&Array.isArray(f.image)?c.mipmaps.length:1}function w(f){let c=f.target;c.removeEventListener("dispose",w),m(c),c.isVideoTexture&&M.delete(c),c.isHTMLTexture&&N.delete(c)}function d(f){let c=f.target;c.removeEventListener("dispose",d),y(c)}function m(f){let c=i.get(f);if(c.__webglInit===void 0)return;let A=f.source,H=x.get(A);if(H){let Z=H[c.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&z(f),Object.keys(H).length===0&&x.delete(A)}i.remove(f)}function z(f){let c=i.get(f);e.deleteTexture(c.__webglTexture);let A=f.source,H=x.get(A);delete H[c.__cacheKey],o.memory.textures--}function y(f){let c=i.get(f);if(f.depthTexture&&(f.depthTexture.dispose(),i.remove(f.depthTexture)),f.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(c.__webglFramebuffer[H]))for(let Z=0;Z<c.__webglFramebuffer[H].length;Z++)e.deleteFramebuffer(c.__webglFramebuffer[H][Z]);else e.deleteFramebuffer(c.__webglFramebuffer[H]);c.__webglDepthbuffer&&e.deleteRenderbuffer(c.__webglDepthbuffer[H])}else{if(Array.isArray(c.__webglFramebuffer))for(let H=0;H<c.__webglFramebuffer.length;H++)e.deleteFramebuffer(c.__webglFramebuffer[H]);else e.deleteFramebuffer(c.__webglFramebuffer);if(c.__webglDepthbuffer&&e.deleteRenderbuffer(c.__webglDepthbuffer),c.__webglMultisampledFramebuffer&&e.deleteFramebuffer(c.__webglMultisampledFramebuffer),c.__webglColorRenderbuffer)for(let H=0;H<c.__webglColorRenderbuffer.length;H++)c.__webglColorRenderbuffer[H]&&e.deleteRenderbuffer(c.__webglColorRenderbuffer[H]);c.__webglDepthRenderbuffer&&e.deleteRenderbuffer(c.__webglDepthRenderbuffer)}let A=f.textures;for(let H=0,Z=A.length;H<Z;H++){let se=i.get(A[H]);se.__webglTexture&&(e.deleteTexture(se.__webglTexture),o.memory.textures--),i.remove(A[H])}i.remove(f)}let I=0;function Q(){I=0}function U(){return I}function G(f){I=f}function X(){let f=I;return f>=n.maxTextures&&je("WebGLTextures: Trying to use "+(f+1)+" texture units while this GPU supports only "+n.maxTextures),I+=1,f}function B(f){let c=[];return c.push(f.wrapS),c.push(f.wrapT),c.push(f.wrapR||0),c.push(f.magFilter),c.push(f.minFilter),c.push(f.anisotropy),c.push(f.internalFormat),c.push(f.format),c.push(f.type),c.push(f.generateMipmaps),c.push(f.premultiplyAlpha),c.push(f.flipY),c.push(f.unpackAlignment),c.push(f.colorSpace),c.join()}function $(f,c){let A=i.get(f);if(f.isVideoTexture&&gt(f),f.isRenderTargetTexture===!1&&f.isExternalTexture!==!0&&f.version>0&&A.__version!==f.version){let H=f.image;if(H===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(A,f,c);return}}else f.isExternalTexture&&(A.__webglTexture=f.sourceTexture?f.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,A.__webglTexture,e.TEXTURE0+c)}function Y(f,c){let A=i.get(f);f.isRenderTargetTexture===!1&&f.version>0&&A.__version!==f.version?ye(A,f,c):(f.isExternalTexture&&(A.__webglTexture=f.sourceTexture?f.sourceTexture:null),t.bindTexture(e.TEXTURE_2D_ARRAY,A.__webglTexture,e.TEXTURE0+c))}function K(f,c){let A=i.get(f);f.isRenderTargetTexture===!1&&f.version>0&&A.__version!==f.version?ye(A,f,c):t.bindTexture(e.TEXTURE_3D,A.__webglTexture,e.TEXTURE0+c)}function J(f,c){let A=i.get(f);f.isCubeDepthTexture!==!0&&f.version>0&&A.__version!==f.version?De(A,f,c):t.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+c)}let Ne={[fo]:e.REPEAT,[si]:e.CLAMP_TO_EDGE,[uo]:e.MIRRORED_REPEAT},be={[ua]:e.NEAREST,[mo]:e.NEAREST_MIPMAP_NEAREST,[ho]:e.NEAREST_MIPMAP_LINEAR,[It]:e.LINEAR,[po]:e.LINEAR_MIPMAP_NEAREST,[Gr]:e.LINEAR_MIPMAP_LINEAR},Ge={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function Ie(f,c){if(c.type===1015&&a.has("OES_texture_float_linear")===!1&&(c.magFilter===1006||c.magFilter===1007||c.magFilter===1005||c.magFilter===1008||c.minFilter===1006||c.minFilter===1007||c.minFilter===1005||c.minFilter===1008)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(f,e.TEXTURE_WRAP_S,Ne[c.wrapS]),e.texParameteri(f,e.TEXTURE_WRAP_T,Ne[c.wrapT]),(f===e.TEXTURE_3D||f===e.TEXTURE_2D_ARRAY)&&e.texParameteri(f,e.TEXTURE_WRAP_R,Ne[c.wrapR]),e.texParameteri(f,e.TEXTURE_MAG_FILTER,be[c.magFilter]),e.texParameteri(f,e.TEXTURE_MIN_FILTER,be[c.minFilter]),c.compareFunction&&(e.texParameteri(f,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(f,e.TEXTURE_COMPARE_FUNC,Ge[c.compareFunction])),a.has("EXT_texture_filter_anisotropic")===!0){if(c.magFilter===1003||c.minFilter!==1005&&c.minFilter!==1008||c.type===1015&&a.has("OES_texture_float_linear")===!1)return;if(c.anisotropy>1||i.get(c).__currentAnisotropy){let A=a.get("EXT_texture_filter_anisotropic");e.texParameterf(f,A.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(c.anisotropy,n.getMaxAnisotropy())),i.get(c).__currentAnisotropy=c.anisotropy}}}function W(f,c){let A=!1;f.__webglInit===void 0&&(f.__webglInit=!0,c.addEventListener("dispose",w));let H=c.source,Z=x.get(H);Z===void 0&&(Z={},x.set(H,Z));let se=B(c);if(se!==f.__cacheKey){Z[se]===void 0&&(Z[se]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,A=!0),Z[se].usedTimes++;let pe=Z[f.__cacheKey];pe!==void 0&&(Z[f.__cacheKey].usedTimes--,pe.usedTimes===0&&z(c)),f.__cacheKey=se,f.__webglTexture=Z[se].texture}return A}function re(f,c,A){return Math.floor(Math.floor(f/A)/c)}function le(f,c,A,H){let Z=f.updateRanges;if(Z.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,c.width,c.height,A,H,c.data);else{Z.sort((fe,Se)=>fe.start-Se.start);let se=0;for(let fe=1;fe<Z.length;fe++){let Se=Z[se],te=Z[fe],we=Se.start+Se.count,Ae=re(te.start,c.width,4),Pe=re(Se.start,c.width,4);te.start<=we+1&&Ae===Pe&&re(te.start+te.count-1,c.width,4)===Ae?Se.count=Math.max(Se.count,te.start+te.count-Se.start):(++se,Z[se]=te)}Z.length=se+1;let pe=t.getParameter(e.UNPACK_ROW_LENGTH),L=t.getParameter(e.UNPACK_SKIP_PIXELS),ne=t.getParameter(e.UNPACK_SKIP_ROWS);t.pixelStorei(e.UNPACK_ROW_LENGTH,c.width);for(let fe=0,Se=Z.length;fe<Se;fe++){let te=Z[fe],we=Math.floor(te.start/4),Ae=Math.ceil(te.count/4),Pe=we%c.width,We=Math.floor(we/c.width),P=Ae;t.pixelStorei(e.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(e.UNPACK_SKIP_ROWS,We),t.texSubImage2D(e.TEXTURE_2D,0,Pe,We,P,1,A,H,c.data)}f.clearUpdateRanges(),t.pixelStorei(e.UNPACK_ROW_LENGTH,pe),t.pixelStorei(e.UNPACK_SKIP_PIXELS,L),t.pixelStorei(e.UNPACK_SKIP_ROWS,ne)}}function ye(f,c,A){let H=e.TEXTURE_2D;(c.isDataArrayTexture||c.isCompressedArrayTexture)&&(H=e.TEXTURE_2D_ARRAY),c.isData3DTexture&&(H=e.TEXTURE_3D);let Z=W(f,c),se=c.source;t.bindTexture(H,f.__webglTexture,e.TEXTURE0+A);let pe=i.get(se);if(se.version!==pe.__version||Z===!0){if(t.activeTexture(e.TEXTURE0+A),!(typeof ImageBitmap<"u"&&c.image instanceof ImageBitmap)){let j=it.getPrimaries(it.workingColorSpace),ee=c.colorSpace===""?null:it.getPrimaries(c.colorSpace),ge=c.colorSpace===""||j===ee?e.NONE:e.BROWSER_DEFAULT_WEBGL;t.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,c.flipY),t.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,c.premultiplyAlpha),t.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(e.UNPACK_ALIGNMENT,c.unpackAlignment);let L=g(c.image,!1,n.maxTextureSize);L=ke(c,L);let ne=r.convert(c.format,c.colorSpace),fe=r.convert(c.type),Se=p(c.internalFormat,ne,fe,c.normalized,c.colorSpace,c.isVideoTexture);Ie(H,c);let te,we=c.mipmaps,Ae=c.isVideoTexture!==!0,Pe=pe.__version===void 0||Z===!0,We=se.dataReady,P=v(c,L);if(c.isDepthTexture)Se=_(c.format===Vr,c.type),Pe&&(Ae?t.texStorage2D(e.TEXTURE_2D,1,Se,L.width,L.height):t.texImage2D(e.TEXTURE_2D,0,Se,L.width,L.height,0,ne,fe,null));else if(c.isDataTexture)if(we.length>0){Ae&&Pe&&t.texStorage2D(e.TEXTURE_2D,P,Se,we[0].width,we[0].height);for(let j=0,ee=we.length;j<ee;j++)te=we[j],Ae?We&&t.texSubImage2D(e.TEXTURE_2D,j,0,0,te.width,te.height,ne,fe,te.data):t.texImage2D(e.TEXTURE_2D,j,Se,te.width,te.height,0,ne,fe,te.data);c.generateMipmaps=!1}else Ae?(Pe&&t.texStorage2D(e.TEXTURE_2D,P,Se,L.width,L.height),We&&le(c,L,ne,fe)):t.texImage2D(e.TEXTURE_2D,0,Se,L.width,L.height,0,ne,fe,L.data);else if(c.isCompressedTexture)if(c.isCompressedArrayTexture){Ae&&Pe&&t.texStorage3D(e.TEXTURE_2D_ARRAY,P,Se,we[0].width,we[0].height,L.depth);for(let j=0,ee=we.length;j<ee;j++)if(te=we[j],c.format!==1023)if(ne!==null)if(Ae){if(We)if(c.layerUpdates.size>0){let ge=er(te.width,te.height,c.format,c.type);for(let Te of c.layerUpdates){let ae=te.data.subarray(Te*ge/te.data.BYTES_PER_ELEMENT,(Te+1)*ge/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,Te,te.width,te.height,1,ne,ae)}}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,te.width,te.height,L.depth,ne,te.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,j,Se,te.width,te.height,L.depth,0,te.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?We&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,te.width,te.height,L.depth,ne,fe,te.data):t.texImage3D(e.TEXTURE_2D_ARRAY,j,Se,te.width,te.height,L.depth,0,ne,fe,te.data);c.layerUpdates.size>0&&c.clearLayerUpdates()}else{Ae&&Pe&&t.texStorage2D(e.TEXTURE_2D,P,Se,we[0].width,we[0].height);for(let j=0,ee=we.length;j<ee;j++)te=we[j],c.format===1023?Ae?We&&t.texSubImage2D(e.TEXTURE_2D,j,0,0,te.width,te.height,ne,fe,te.data):t.texImage2D(e.TEXTURE_2D,j,Se,te.width,te.height,0,ne,fe,te.data):ne===null?je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?We&&t.compressedTexSubImage2D(e.TEXTURE_2D,j,0,0,te.width,te.height,ne,te.data):t.compressedTexImage2D(e.TEXTURE_2D,j,Se,te.width,te.height,0,te.data)}else if(c.isDataArrayTexture)if(Ae){if(Pe&&t.texStorage3D(e.TEXTURE_2D_ARRAY,P,Se,L.width,L.height,L.depth),We)if(c.layerUpdates.size>0){let j=er(L.width,L.height,c.format,c.type);for(let ee of c.layerUpdates){let ge=L.data.subarray(ee*j/L.data.BYTES_PER_ELEMENT,(ee+1)*j/L.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ee,L.width,L.height,1,ne,fe,ge)}c.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,L.width,L.height,L.depth,ne,fe,L.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,Se,L.width,L.height,L.depth,0,ne,fe,L.data);else if(c.isData3DTexture)Ae?(Pe&&t.texStorage3D(e.TEXTURE_3D,P,Se,L.width,L.height,L.depth),We&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,L.width,L.height,L.depth,ne,fe,L.data)):t.texImage3D(e.TEXTURE_3D,0,Se,L.width,L.height,L.depth,0,ne,fe,L.data);else if(c.isFramebufferTexture){if(Pe)if(Ae)t.texStorage2D(e.TEXTURE_2D,P,Se,L.width,L.height);else{let j=L.width,ee=L.height;for(let ge=0;ge<P;ge++)t.texImage2D(e.TEXTURE_2D,ge,Se,j,ee,0,ne,fe,null),j>>=1,ee>>=1}}else if(c.isHTMLTexture){if("texElementImage2D"in e){let j=e.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),L.parentNode!==j){j.appendChild(L),N.add(c),j.onpaint=ee=>{let ge=ee.changedElements;for(let Te of N)ge.includes(Te.image)&&(Te.needsUpdate=!0)},j.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,L);else{let ee=e.RGBA,ge=e.RGBA,Te=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,ee,ge,Te,L)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(we.length>0){if(Ae&&Pe){let j=at(we[0]);t.texStorage2D(e.TEXTURE_2D,P,Se,j.width,j.height)}for(let j=0,ee=we.length;j<ee;j++)te=we[j],Ae?We&&t.texSubImage2D(e.TEXTURE_2D,j,0,0,ne,fe,te):t.texImage2D(e.TEXTURE_2D,j,Se,ne,fe,te);c.generateMipmaps=!1}else if(Ae){if(Pe){let j=at(L);t.texStorage2D(e.TEXTURE_2D,P,Se,j.width,j.height)}We&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,ne,fe,L)}else t.texImage2D(e.TEXTURE_2D,0,Se,ne,fe,L);l(c)&&b(H),pe.__version=se.version,c.onUpdate&&c.onUpdate(c)}f.__version=c.version}function De(f,c,A){if(c.image.length!==6)return;let H=W(f,c),Z=c.source;t.bindTexture(e.TEXTURE_CUBE_MAP,f.__webglTexture,e.TEXTURE0+A);let se=i.get(Z);if(Z.version!==se.__version||H===!0){t.activeTexture(e.TEXTURE0+A);let pe=it.getPrimaries(it.workingColorSpace),L=c.colorSpace===""?null:it.getPrimaries(c.colorSpace),ne=c.colorSpace===""||pe===L?e.NONE:e.BROWSER_DEFAULT_WEBGL;t.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,c.flipY),t.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,c.premultiplyAlpha),t.pixelStorei(e.UNPACK_ALIGNMENT,c.unpackAlignment),t.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let fe=c.isCompressedTexture||c.image[0].isCompressedTexture,Se=c.image[0]&&c.image[0].isDataTexture,te=[];for(let ae=0;ae<6;ae++)!fe&&!Se?te[ae]=g(c.image[ae],!0,n.maxCubemapSize):te[ae]=Se?c.image[ae].image:c.image[ae],te[ae]=ke(c,te[ae]);let we=te[0],Ae=r.convert(c.format,c.colorSpace),Pe=r.convert(c.type),We=p(c.internalFormat,Ae,Pe,c.normalized,c.colorSpace),P=c.isVideoTexture!==!0,j=se.__version===void 0||H===!0,ee=Z.dataReady,ge=v(c,we);Ie(e.TEXTURE_CUBE_MAP,c);let Te;if(fe){P&&j&&t.texStorage2D(e.TEXTURE_CUBE_MAP,ge,We,we.width,we.height);for(let ae=0;ae<6;ae++){Te=te[ae].mipmaps;for(let me=0;me<Te.length;me++){let Ce=Te[me];c.format===1023?P?ee&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me,0,0,Ce.width,Ce.height,Ae,Pe,Ce.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me,We,Ce.width,Ce.height,0,Ae,Pe,Ce.data):Ae===null?je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ee&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me,0,0,Ce.width,Ce.height,Ae,Ce.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me,We,Ce.width,Ce.height,0,Ce.data)}}}else{if(Te=c.mipmaps,P&&j){Te.length>0&&ge++;let ae=at(te[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,ge,We,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Se){P?ee&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,te[ae].width,te[ae].height,Ae,Pe,te[ae].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,We,te[ae].width,te[ae].height,0,Ae,Pe,te[ae].data);for(let me=0;me<Te.length;me++){let Ce=Te[me].image[ae].image;P?ee&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me+1,0,0,Ce.width,Ce.height,Ae,Pe,Ce.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me+1,We,Ce.width,Ce.height,0,Ae,Pe,Ce.data)}}else{P?ee&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ae,Pe,te[ae]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,We,Ae,Pe,te[ae]);for(let me=0;me<Te.length;me++){let Ce=Te[me];P?ee&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me+1,0,0,Ae,Pe,Ce.image[ae]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me+1,We,Ae,Pe,Ce.image[ae])}}}l(c)&&b(e.TEXTURE_CUBE_MAP),se.__version=Z.version,c.onUpdate&&c.onUpdate(c)}f.__version=c.version}function ve(f,c,A,H,Z,se){let pe=r.convert(A.format,A.colorSpace),L=r.convert(A.type),ne=p(A.internalFormat,pe,L,A.normalized,A.colorSpace),fe=i.get(c),Se=i.get(A);if(Se.__renderTarget=c,!fe.__hasExternalTextures){let te=Math.max(1,c.width>>se),we=Math.max(1,c.height>>se);Z===e.TEXTURE_3D||Z===e.TEXTURE_2D_ARRAY?t.texImage3D(Z,se,ne,te,we,c.depth,0,pe,L,null):t.texImage2D(Z,se,ne,te,we,0,pe,L,null)}t.bindFramebuffer(e.FRAMEBUFFER,f),C(c)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,H,Z,Se.__webglTexture,0,lt(c)):(Z===e.TEXTURE_2D||Z>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,H,Z,Se.__webglTexture,se),t.bindFramebuffer(e.FRAMEBUFFER,null)}function Ke(f,c,A){if(e.bindRenderbuffer(e.RENDERBUFFER,f),c.depthBuffer){let H=c.depthTexture,Z=H&&H.isDepthTexture?H.type:null,se=_(c.stencilBuffer,Z),pe=c.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;C(c)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,lt(c),se,c.width,c.height):A?e.renderbufferStorageMultisample(e.RENDERBUFFER,lt(c),se,c.width,c.height):e.renderbufferStorage(e.RENDERBUFFER,se,c.width,c.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,pe,e.RENDERBUFFER,f)}else{let H=c.textures;for(let Z=0;Z<H.length;Z++){let se=H[Z],pe=r.convert(se.format,se.colorSpace),L=r.convert(se.type),ne=p(se.internalFormat,pe,L,se.normalized,se.colorSpace);C(c)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,lt(c),ne,c.width,c.height):A?e.renderbufferStorageMultisample(e.RENDERBUFFER,lt(c),ne,c.width,c.height):e.renderbufferStorage(e.RENDERBUFFER,ne,c.width,c.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ze(f,c,A){let H=c.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(e.FRAMEBUFFER,f),!(c.depthTexture&&c.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=i.get(c.depthTexture);if(Z.__renderTarget=c,(!Z.__webglTexture||c.depthTexture.image.width!==c.width||c.depthTexture.image.height!==c.height)&&(c.depthTexture.image.width=c.width,c.depthTexture.image.height=c.height,c.depthTexture.needsUpdate=!0),H){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,c.depthTexture.addEventListener("dispose",w)),Z.__webglTexture===void 0){Z.__webglTexture=e.createTexture(),t.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),Ie(e.TEXTURE_CUBE_MAP,c.depthTexture);let fe=r.convert(c.depthTexture.format),Se=r.convert(c.depthTexture.type),te;c.depthTexture.format===1026?te=e.DEPTH_COMPONENT24:c.depthTexture.format===1027&&(te=e.DEPTH24_STENCIL8);for(let we=0;we<6;we++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,te,c.width,c.height,0,fe,Se,null)}}else $(c.depthTexture,0);let se=Z.__webglTexture,pe=lt(c),L=H?e.TEXTURE_CUBE_MAP_POSITIVE_X+A:e.TEXTURE_2D,ne=c.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(c.depthTexture.format===1026)C(c)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ne,L,se,0,pe):e.framebufferTexture2D(e.FRAMEBUFFER,ne,L,se,0);else if(c.depthTexture.format===1027)C(c)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ne,L,se,0,pe):e.framebufferTexture2D(e.FRAMEBUFFER,ne,L,se,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Le(f){let c=i.get(f),A=f.isWebGLCubeRenderTarget===!0;if(c.__boundDepthTexture!==f.depthTexture){let H=f.depthTexture;if(c.__depthDisposeCallback&&c.__depthDisposeCallback(),H){let Z=()=>{delete c.__boundDepthTexture,delete c.__depthDisposeCallback,H.removeEventListener("dispose",Z)};H.addEventListener("dispose",Z),c.__depthDisposeCallback=Z}c.__boundDepthTexture=H}if(f.depthTexture&&!c.__autoAllocateDepthBuffer)if(A)for(let H=0;H<6;H++)ze(c.__webglFramebuffer[H],f,H);else{let H=f.texture.mipmaps;H&&H.length>0?ze(c.__webglFramebuffer[0],f,0):ze(c.__webglFramebuffer,f,0)}else if(A){c.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer[H]),c.__webglDepthbuffer[H]===void 0)c.__webglDepthbuffer[H]=e.createRenderbuffer(),Ke(c.__webglDepthbuffer[H],f,!1);else{let Z=f.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,se=c.__webglDepthbuffer[H];e.bindRenderbuffer(e.RENDERBUFFER,se),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,se)}}else{let H=f.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer),c.__webglDepthbuffer===void 0)c.__webglDepthbuffer=e.createRenderbuffer(),Ke(c.__webglDepthbuffer,f,!1);else{let Z=f.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,se=c.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,se),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,se)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function rt(f,c,A){let H=i.get(f);c!==void 0&&ve(H.__webglFramebuffer,f,f.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),A!==void 0&&Le(f)}function ht(f){let c=f.texture,A=i.get(f),H=i.get(c);f.addEventListener("dispose",d);let Z=f.textures,se=f.isWebGLCubeRenderTarget===!0,pe=Z.length>1;if(pe||(H.__webglTexture===void 0&&(H.__webglTexture=e.createTexture()),H.__version=c.version,o.memory.textures++),se){A.__webglFramebuffer=[];for(let L=0;L<6;L++)if(c.mipmaps&&c.mipmaps.length>0){A.__webglFramebuffer[L]=[];for(let ne=0;ne<c.mipmaps.length;ne++)A.__webglFramebuffer[L][ne]=e.createFramebuffer()}else A.__webglFramebuffer[L]=e.createFramebuffer()}else{if(c.mipmaps&&c.mipmaps.length>0){A.__webglFramebuffer=[];for(let L=0;L<c.mipmaps.length;L++)A.__webglFramebuffer[L]=e.createFramebuffer()}else A.__webglFramebuffer=e.createFramebuffer();if(pe)for(let L=0,ne=Z.length;L<ne;L++){let fe=i.get(Z[L]);fe.__webglTexture===void 0&&(fe.__webglTexture=e.createTexture(),o.memory.textures++)}if(f.samples>0&&C(f)===!1){A.__webglMultisampledFramebuffer=e.createFramebuffer(),A.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,A.__webglMultisampledFramebuffer);for(let L=0;L<Z.length;L++){let ne=Z[L];A.__webglColorRenderbuffer[L]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,A.__webglColorRenderbuffer[L]);let fe=r.convert(ne.format,ne.colorSpace),Se=r.convert(ne.type),te=p(ne.internalFormat,fe,Se,ne.normalized,ne.colorSpace,f.isXRRenderTarget===!0),we=lt(f);e.renderbufferStorageMultisample(e.RENDERBUFFER,we,te,f.width,f.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+L,e.RENDERBUFFER,A.__webglColorRenderbuffer[L])}e.bindRenderbuffer(e.RENDERBUFFER,null),f.depthBuffer&&(A.__webglDepthRenderbuffer=e.createRenderbuffer(),Ke(A.__webglDepthRenderbuffer,f,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(se){t.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture),Ie(e.TEXTURE_CUBE_MAP,c);for(let L=0;L<6;L++)if(c.mipmaps&&c.mipmaps.length>0)for(let ne=0;ne<c.mipmaps.length;ne++)ve(A.__webglFramebuffer[L][ne],f,c,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+L,ne);else ve(A.__webglFramebuffer[L],f,c,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+L,0);l(c)&&b(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let L=0,ne=Z.length;L<ne;L++){let fe=Z[L],Se=i.get(fe),te=e.TEXTURE_2D;(f.isWebGL3DRenderTarget||f.isWebGLArrayRenderTarget)&&(te=f.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(te,Se.__webglTexture),Ie(te,fe),ve(A.__webglFramebuffer,f,fe,e.COLOR_ATTACHMENT0+L,te,0),l(fe)&&b(te)}t.unbindTexture()}else{let L=e.TEXTURE_2D;if((f.isWebGL3DRenderTarget||f.isWebGLArrayRenderTarget)&&(L=f.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(L,H.__webglTexture),Ie(L,c),c.mipmaps&&c.mipmaps.length>0)for(let ne=0;ne<c.mipmaps.length;ne++)ve(A.__webglFramebuffer[ne],f,c,e.COLOR_ATTACHMENT0,L,ne);else ve(A.__webglFramebuffer,f,c,e.COLOR_ATTACHMENT0,L,0);l(c)&&b(L),t.unbindTexture()}f.depthBuffer&&Le(f)}function Et(f){let c=f.textures;for(let A=0,H=c.length;A<H;A++){let Z=c[A];if(l(Z)){let se=D(f),pe=i.get(Z).__webglTexture;t.bindTexture(se,pe),b(se),t.unbindTexture()}}}let Qe=[],mt=[];function st(f){if(f.samples>0){if(C(f)===!1){let c=f.textures,A=f.width,H=f.height,Z=e.COLOR_BUFFER_BIT,se=f.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pe=i.get(f),L=c.length>1;if(L)for(let fe=0;fe<c.length;fe++)t.bindFramebuffer(e.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+fe,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,pe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+fe,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);let ne=f.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let fe=0;fe<c.length;fe++){if(f.resolveDepthBuffer&&(f.depthBuffer&&(Z|=e.DEPTH_BUFFER_BIT),f.stencilBuffer&&f.resolveStencilBuffer&&(Z|=e.STENCIL_BUFFER_BIT)),L){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,pe.__webglColorRenderbuffer[fe]);let Se=i.get(c[fe]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Se,0)}e.blitFramebuffer(0,0,A,H,0,0,A,H,Z,e.NEAREST),S===!0&&(Qe.length=0,mt.length=0,Qe.push(e.COLOR_ATTACHMENT0+fe),f.depthBuffer&&f.storeMultisampledDepthBuffer===!1&&(Qe.push(se),mt.push(se),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,mt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),L)for(let fe=0;fe<c.length;fe++){t.bindFramebuffer(e.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+fe,e.RENDERBUFFER,pe.__webglColorRenderbuffer[fe]);let Se=i.get(c[fe]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,pe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+fe,e.TEXTURE_2D,Se,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(f.depthBuffer&&f.storeMultisampledDepthBuffer===!1&&S){let c=f.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[c])}}}function lt(f){return Math.min(n.maxSamples,f.samples)}function C(f){let c=i.get(f);return f.samples>0&&a.has("WEBGL_multisampled_render_to_texture")===!0&&c.__useRenderToTexture!==!1}function gt(f){let c=o.render.frame;M.get(f)!==c&&(M.set(f,c),f.update())}function ke(f,c){let A=f.colorSpace,H=f.format,Z=f.type;return f.isCompressedTexture===!0||f.isVideoTexture===!0||A!=="srgb-linear"&&A!==""&&(it.getTransfer(A)==="srgb"?(H!==1023||Z!==1009)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",A)),c}function at(f){return typeof HTMLImageElement<"u"&&f instanceof HTMLImageElement?(E.width=f.naturalWidth||f.width,E.height=f.naturalHeight||f.height):typeof VideoFrame<"u"&&f instanceof VideoFrame?(E.width=f.displayWidth,E.height=f.displayHeight):(E.width=f.width,E.height=f.height),E}this.allocateTextureUnit=X,this.resetTextureUnits=Q,this.getTextureUnits=U,this.setTextureUnits=G,this.setTexture2D=$,this.setTexture2DArray=Y,this.setTexture3D=K,this.setTextureCube=J,this.rebindTextures=rt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=C,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ec(e,a){function t(i,n=""){let r,o=it.getTransfer(n);if(i===1009)return e.UNSIGNED_BYTE;if(i===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(i===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(i===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===1010)return e.BYTE;if(i===1011)return e.SHORT;if(i===1012)return e.UNSIGNED_SHORT;if(i===1013)return e.INT;if(i===1014)return e.UNSIGNED_INT;if(i===1015)return e.FLOAT;if(i===1016)return e.HALF_FLOAT;if(i===1021)return e.ALPHA;if(i===1022)return e.RGB;if(i===1023)return e.RGBA;if(i===1026)return e.DEPTH_COMPONENT;if(i===1027)return e.DEPTH_STENCIL;if(i===1028)return e.RED;if(i===1029)return e.RED_INTEGER;if(i===1030)return e.RG;if(i===1031)return e.RG_INTEGER;if(i===1033)return e.RGBA_INTEGER;if(i===33776||i===33777||i===33778||i===33779)if(o==="srgb")if(r=a.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=a.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===35840||i===35841||i===35842||i===35843)if(r=a.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===36196||i===37492||i===37496||i===37488||i===37489||i===37490||i===37491)if(r=a.get("WEBGL_compressed_texture_etc"),r!==null){if(i===36196||i===37492)return o==="srgb"?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===37496)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===37488)return r.COMPRESSED_R11_EAC;if(i===37489)return r.COMPRESSED_SIGNED_R11_EAC;if(i===37490)return r.COMPRESSED_RG11_EAC;if(i===37491)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821)if(r=a.get("WEBGL_compressed_texture_astc"),r!==null){if(i===37808)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===36492||i===36494||i===36495)if(r=a.get("EXT_texture_compression_bptc"),r!==null){if(i===36492)return o==="srgb"?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===36283||i===36284||i===36285||i===36286)if(r=a.get("EXT_texture_compression_rgtc"),r!==null){if(i===36283)return r.COMPRESSED_RED_RGTC1_EXT;if(i===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===1020?e.UNSIGNED_INT_24_8:e[i]===void 0?null:e[i]}return{convert:t}}var Mc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tc=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,xc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,a){if(this.texture===null){let t=new Kr(e.texture);(e.depthNear!==a.depthNear||e.depthFar!==a.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=t}}getMesh(e){if(this.texture!==null&&this.mesh===null){let a=e.cameras[0].viewport,t=new bt({vertexShader:Mc,fragmentShader:Tc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new tt(new qt(20,20),t)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bc=class extends Eo{constructor(e,a){super();let t=this,i=null,n=1,r=null,o="local-floor",s=1,S=null,E=null,M=null,N=null,h=null,x=null,T=typeof XRWebGLBinding<"u",k=new xc,g={},l=a.getContextAttributes(),b=null,D=null,p=[],_=[],v=new dt,w=null,d=null,m=new Ta;m.viewport=new St;let z=new Ta;z.viewport=new St;let y=[m,z],I=new Mo,Q=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let re=p[W];return re===void 0&&(re=new Ga,p[W]=re),re.getTargetRaySpace()},this.getControllerGrip=function(W){let re=p[W];return re===void 0&&(re=new Ga,p[W]=re),re.getGripSpace()},this.getHand=function(W){let re=p[W];return re===void 0&&(re=new Ga,p[W]=re),re.getHandSpace()};function G(W){let re=_.indexOf(W.inputSource);if(re===-1)return;let le=p[re];le!==void 0&&(le.update(W.inputSource,W.frame,S||r),le.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",B);for(let W=0;W<p.length;W++){let re=_[W];re!==null&&(_[W]=null,p[W].disconnect(re))}Q=null,U=null,k.reset();for(let W in g)delete g[W];if(e.setRenderTarget(b),h=null,N=null,M=null,i=null,D=null,Ie.stop(),t.isPresenting=!1,e.setPixelRatio(w),e.setSize(v.width,v.height,!1),d!==null){let W=d.camera;W.fov=d.fov,W.zoom=d.zoom,W.updateProjectionMatrix(),d=null}t.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){n=W,t.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,t.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return S||r},this.setReferenceSpace=function(W){S=W},this.getBaseLayer=function(){return N===null?h:N},this.getBinding=function(){return M===null&&T&&(M=new XRWebGLBinding(i,a)),M},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",X),i.addEventListener("inputsourceschange",B),l.xrCompatible!==!0&&await a.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(v),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,le=null,ye=null;l.depth&&(ye=l.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,re=l.stencil?Vr:di,le=l.stencil?zr:wa);let De={colorFormat:a.RGBA8,depthFormat:ye,scaleFactor:n};M=this.getBinding(),N=M.createProjectionLayer(De),i.updateRenderState({layers:[N]}),e.setPixelRatio(1),e.setSize(N.textureWidth,N.textureHeight,!1),D=new Pt(N.textureWidth,N.textureHeight,{format:ui,type:ha,depthTexture:new ba(N.textureWidth,N.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:l.stencil,colorSpace:e.outputColorSpace,samples:l.antialias?4:0,resolveDepthBuffer:N.ignoreDepthValues===!1,resolveStencilBuffer:N.ignoreDepthValues===!1,storeMultisampledDepthBuffer:N.ignoreDepthValues===!1,storeMultisampledStencilBuffer:N.ignoreDepthValues===!1})}else{let re={antialias:l.antialias,alpha:!0,depth:l.depth,stencil:l.stencil,framebufferScaleFactor:n};h=new XRWebGLLayer(i,a,re),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),D=new Pt(h.framebufferWidth,h.framebufferHeight,{format:ui,type:ha,colorSpace:e.outputColorSpace,stencilBuffer:l.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(s),S=null,r=await i.requestReferenceSpace(o),Ie.setContext(i),Ie.start(),t.isPresenting=!0,t.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return k.getDepthTexture()};function B(W){for(let re=0;re<W.removed.length;re++){let le=W.removed[re],ye=_.indexOf(le);ye>=0&&(_[ye]=null,p[ye].disconnect(le))}for(let re=0;re<W.added.length;re++){let le=W.added[re],ye=_.indexOf(le);if(ye===-1){for(let ve=0;ve<p.length;ve++)if(ve>=_.length){_.push(le),ye=ve;break}else if(_[ve]===null){_[ve]=le,ye=ve;break}if(ye===-1)break}let De=p[ye];De&&De.connect(le)}}let $=new q,Y=new q;function K(W,re,le){$.setFromMatrixPosition(re.matrixWorld),Y.setFromMatrixPosition(le.matrixWorld);let ye=$.distanceTo(Y),De=re.projectionMatrix.elements,ve=le.projectionMatrix.elements,Ke=De[14]/(De[10]-1),ze=De[14]/(De[10]+1),Le=(De[9]+1)/De[5],rt=(De[9]-1)/De[5],ht=(De[8]-1)/De[0],Et=(ve[8]+1)/ve[0],Qe=Ke*ht,mt=Ke*Et,st=ye/(-ht+Et),lt=st*-ht;if(re.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(lt),W.translateZ(st),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),De[10]===-1)W.projectionMatrix.copy(re.projectionMatrix),W.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let C=Ke+st,gt=ze+st,ke=Qe-lt,at=mt+(ye-lt),f=Le*ze/gt*C,c=rt*ze/gt*C;W.projectionMatrix.makePerspective(ke,at,f,c,C,gt),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function J(W,re){re===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(re.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let re=W.near,le=W.far;k.texture!==null&&(k.depthNear>0&&(re=k.depthNear),k.depthFar>0&&(le=k.depthFar)),I.near=z.near=m.near=re,I.far=z.far=m.far=le,(Q!==I.near||U!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),Q=I.near,U=I.far),I.layers.mask=W.layers.mask|6,m.layers.mask=I.layers.mask&-5,z.layers.mask=I.layers.mask&-3;let ye=W.parent,De=I.cameras;J(I,ye);for(let ve=0;ve<De.length;ve++)J(De[ve],ye);De.length===2?K(I,m,z):I.projectionMatrix.copy(m.projectionMatrix),d===null&&W.isPerspectiveCamera&&(d={camera:W,fov:W.fov,zoom:W.zoom}),Ne(W,I,ye)};function Ne(W,re,le){le===null?W.matrix.copy(re.matrixWorld):(W.matrix.copy(le.matrixWorld),W.matrix.invert(),W.matrix.multiply(re.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(re.projectionMatrix),W.projectionMatrixInverse.copy(re.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=To*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(N!==null||h!==null)return s},this.setFoveation=function(W){s=W,N!==null&&(N.fixedFoveation=W),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=W)},this.hasDepthSensing=function(){return k.texture!==null},this.getDepthSensingMesh=function(){return k.getMesh(I)},this.getCameraTexture=function(W){return g[W]};let be=null;function Ge(W,re){if(E=re.getViewerPose(S||r),x=re,E!==null){let le=E.views;h!==null&&(e.setRenderTargetFramebuffer(D,h.framebuffer),e.setRenderTarget(D));let ye=!1;le.length!==I.cameras.length&&(I.cameras.length=0,ye=!0);for(let ve=0;ve<le.length;ve++){let Ke=le[ve],ze=null;if(h!==null)ze=h.getViewport(Ke);else{let rt=M.getViewSubImage(N,Ke);ze=rt.viewport,ve===0&&(e.setRenderTargetTextures(D,rt.colorTexture,rt.depthStencilTexture),e.setRenderTarget(D))}let Le=y[ve];Le===void 0&&(Le=new Ta,Le.layers.enable(ve),Le.viewport=new St,y[ve]=Le),Le.matrix.fromArray(Ke.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(Ke.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(ze.x,ze.y,ze.width,ze.height),ve===0&&(I.matrix.copy(Le.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),ye===!0&&I.cameras.push(Le)}let De=i.enabledFeatures;if(De&&De.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&T){M=t.getBinding();let ve=M.getDepthInformation(le[0]);ve&&ve.isValid&&ve.texture&&k.init(ve,i.renderState)}if(De&&De.includes("camera-access")&&T){e.state.unbindTexture(),M=t.getBinding();for(let ve=0;ve<le.length;ve++){let Ke=le[ve].camera;if(Ke){let ze=g[Ke];ze||(ze=new Kr,g[Ke]=ze);let Le=M.getCameraImage(Ke);ze.sourceTexture=Le}}}}for(let le=0;le<p.length;le++){let ye=_[le],De=p[le];ye!==null&&De!==void 0&&De.update(ye,re,S||r)}be&&be(W,re),re.detectedPlanes&&t.dispatchEvent({type:"planesdetected",data:re}),x=null}let Ie=new $r;Ie.setAnimationLoop(Ge),this.setAnimationLoop=function(W){be=W},this.dispose=function(){}}},wc=new Zt,nn=new Be;nn.set(-1,0,0,0,1,0,0,0,1);function Ac(e,a){function t(g,l){g.matrixAutoUpdate===!0&&g.updateMatrix(),l.value.copy(g.matrix)}function i(g,l){l.color.getRGB(g.fogColor.value,Yr(e)),l.isFog?(g.fogNear.value=l.near,g.fogFar.value=l.far):l.isFogExp2&&(g.fogDensity.value=l.density)}function n(g,l,b,D,p){l.isNodeMaterial?l.uniformsNeedUpdate=!1:l.isMeshBasicMaterial?r(g,l):l.isMeshLambertMaterial?(r(g,l),l.envMap&&(g.envMapIntensity.value=l.envMapIntensity)):l.isMeshToonMaterial?(r(g,l),N(g,l)):l.isMeshPhongMaterial?(r(g,l),M(g,l),l.envMap&&(g.envMapIntensity.value=l.envMapIntensity)):l.isMeshStandardMaterial?(r(g,l),h(g,l),l.isMeshPhysicalMaterial&&x(g,l,p)):l.isMeshMatcapMaterial?(r(g,l),T(g,l)):l.isMeshDepthMaterial?r(g,l):l.isMeshDistanceMaterial?(r(g,l),k(g,l)):l.isMeshNormalMaterial?r(g,l):l.isLineBasicMaterial?(o(g,l),l.isLineDashedMaterial&&s(g,l)):l.isPointsMaterial?S(g,l,b,D):l.isSpriteMaterial?E(g,l):l.isShadowMaterial?(g.color.value.copy(l.color),g.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function r(g,l){g.opacity.value=l.opacity,l.color&&g.diffuse.value.copy(l.color),l.emissive&&g.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(g.map.value=l.map,t(l.map,g.mapTransform)),l.alphaMap&&(g.alphaMap.value=l.alphaMap,t(l.alphaMap,g.alphaMapTransform)),l.bumpMap&&(g.bumpMap.value=l.bumpMap,t(l.bumpMap,g.bumpMapTransform),g.bumpScale.value=l.bumpScale,l.side===1&&(g.bumpScale.value*=-1)),l.normalMap&&(g.normalMap.value=l.normalMap,t(l.normalMap,g.normalMapTransform),g.normalScale.value.copy(l.normalScale),l.side===1&&g.normalScale.value.negate()),l.displacementMap&&(g.displacementMap.value=l.displacementMap,t(l.displacementMap,g.displacementMapTransform),g.displacementScale.value=l.displacementScale,g.displacementBias.value=l.displacementBias),l.emissiveMap&&(g.emissiveMap.value=l.emissiveMap,t(l.emissiveMap,g.emissiveMapTransform)),l.specularMap&&(g.specularMap.value=l.specularMap,t(l.specularMap,g.specularMapTransform)),l.alphaTest>0&&(g.alphaTest.value=l.alphaTest);let b=a.get(l),D=b.envMap,p=b.envMapRotation;D&&(g.envMap.value=D,g.envMapRotation.value.setFromMatrix4(wc.makeRotationFromEuler(p)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(nn),g.reflectivity.value=l.reflectivity,g.ior.value=l.ior,g.refractionRatio.value=l.refractionRatio),l.lightMap&&(g.lightMap.value=l.lightMap,g.lightMapIntensity.value=l.lightMapIntensity,t(l.lightMap,g.lightMapTransform)),l.aoMap&&(g.aoMap.value=l.aoMap,g.aoMapIntensity.value=l.aoMapIntensity,t(l.aoMap,g.aoMapTransform))}function o(g,l){g.diffuse.value.copy(l.color),g.opacity.value=l.opacity,l.map&&(g.map.value=l.map,t(l.map,g.mapTransform))}function s(g,l){g.dashSize.value=l.dashSize,g.totalSize.value=l.dashSize+l.gapSize,g.scale.value=l.scale}function S(g,l,b,D){g.diffuse.value.copy(l.color),g.opacity.value=l.opacity,g.size.value=l.size*b,g.scale.value=D*.5,l.map&&(g.map.value=l.map,t(l.map,g.uvTransform)),l.alphaMap&&(g.alphaMap.value=l.alphaMap,t(l.alphaMap,g.alphaMapTransform)),l.alphaTest>0&&(g.alphaTest.value=l.alphaTest)}function E(g,l){g.diffuse.value.copy(l.color),g.opacity.value=l.opacity,g.rotation.value=l.rotation,l.map&&(g.map.value=l.map,t(l.map,g.mapTransform)),l.alphaMap&&(g.alphaMap.value=l.alphaMap,t(l.alphaMap,g.alphaMapTransform)),l.alphaTest>0&&(g.alphaTest.value=l.alphaTest)}function M(g,l){g.specular.value.copy(l.specular),g.shininess.value=Math.max(l.shininess,1e-4)}function N(g,l){l.gradientMap&&(g.gradientMap.value=l.gradientMap)}function h(g,l){g.metalness.value=l.metalness,l.metalnessMap&&(g.metalnessMap.value=l.metalnessMap,t(l.metalnessMap,g.metalnessMapTransform)),g.roughness.value=l.roughness,l.roughnessMap&&(g.roughnessMap.value=l.roughnessMap,t(l.roughnessMap,g.roughnessMapTransform)),l.envMap&&(g.envMapIntensity.value=l.envMapIntensity)}function x(g,l,b){g.ior.value=l.ior,l.sheen>0&&(g.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),g.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(g.sheenColorMap.value=l.sheenColorMap,t(l.sheenColorMap,g.sheenColorMapTransform)),l.sheenRoughnessMap&&(g.sheenRoughnessMap.value=l.sheenRoughnessMap,t(l.sheenRoughnessMap,g.sheenRoughnessMapTransform))),l.clearcoat>0&&(g.clearcoat.value=l.clearcoat,g.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(g.clearcoatMap.value=l.clearcoatMap,t(l.clearcoatMap,g.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,t(l.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(g.clearcoatNormalMap.value=l.clearcoatNormalMap,t(l.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===1&&g.clearcoatNormalScale.value.negate())),l.dispersion>0&&(g.dispersion.value=l.dispersion),l.retroreflectivity>0&&(g.retroreflectivity.value=l.retroreflectivity),l.iridescence>0&&(g.iridescence.value=l.iridescence,g.iridescenceIOR.value=l.iridescenceIOR,g.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(g.iridescenceMap.value=l.iridescenceMap,t(l.iridescenceMap,g.iridescenceMapTransform)),l.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=l.iridescenceThicknessMap,t(l.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),l.transmission>0&&(g.transmission.value=l.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),l.transmissionMap&&(g.transmissionMap.value=l.transmissionMap,t(l.transmissionMap,g.transmissionMapTransform)),g.thickness.value=l.thickness,l.thicknessMap&&(g.thicknessMap.value=l.thicknessMap,t(l.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=l.attenuationDistance,g.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(g.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(g.anisotropyMap.value=l.anisotropyMap,t(l.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=l.specularIntensity,g.specularColor.value.copy(l.specularColor),l.specularColorMap&&(g.specularColorMap.value=l.specularColorMap,t(l.specularColorMap,g.specularColorMapTransform)),l.specularIntensityMap&&(g.specularIntensityMap.value=l.specularIntensityMap,t(l.specularIntensityMap,g.specularIntensityMapTransform))}function T(g,l){l.matcap&&(g.matcap.value=l.matcap)}function k(g,l){let b=a.get(l).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Rc(e,a,t,i){let n={},r={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function S(p,_){let v=_.program;i.uniformBlockBinding(p,v)}function E(p,_){let v=n[p.id];v===void 0&&(g(p),v=M(p),n[p.id]=v,p.addEventListener("dispose",b));let w=_.program;i.updateUBOMapping(p,w);let d=a.render.frame;r[p.id]!==d&&(h(p),r[p.id]=d)}function M(p){let _=N();p.__bindingPointIndex=_;let v=e.createBuffer(),w=p.__size,d=p.usage;return e.bindBuffer(e.UNIFORM_BUFFER,v),e.bufferData(e.UNIFORM_BUFFER,w,d),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,v),v}function N(){for(let p=0;p<s;p++)if(o.indexOf(p)===-1)return o.push(p),p;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(p){let _=n[p.id],v=p.uniforms,w=p.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let d=0,m=v.length;d<m;d++){let z=v[d];if(Array.isArray(z))for(let y=0,I=z.length;y<I;y++)x(z[y],d,y,w);else x(z,d,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function x(p,_,v,w){if(k(p,_,v,w)===!0){let d=p.__offset,m=p.value;if(Array.isArray(m)){let z=0;for(let y=0;y<m.length;y++){let I=m[y],Q=l(I);T(I,p.__data,z),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(z+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(m,p.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,d,p.__data)}}function T(p,_,v){typeof p=="number"||typeof p=="boolean"?_[0]=p:p.isMatrix3?(_[0]=p.elements[0],_[1]=p.elements[1],_[2]=p.elements[2],_[3]=0,_[4]=p.elements[3],_[5]=p.elements[4],_[6]=p.elements[5],_[7]=0,_[8]=p.elements[6],_[9]=p.elements[7],_[10]=p.elements[8],_[11]=0):ArrayBuffer.isView(p)?_.set(new p.constructor(p.buffer,p.byteOffset,_.length)):p.toArray(_,v)}function k(p,_,v,w){let d=p.value,m=_+"_"+v;if(w[m]===void 0)return w[m]=typeof d=="number"||typeof d=="boolean"?d:ArrayBuffer.isView(d)?d.slice():d.clone(),!0;{let z=w[m];if(typeof d=="number"||typeof d=="boolean"){if(z!==d)return w[m]=d,!0}else{if(ArrayBuffer.isView(d))return!0;if(z.equals(d)===!1)return z.copy(d),!0}}return!1}function g(p){let _=p.uniforms,v=0;for(let d=0,m=_.length;d<m;d++){let z=Array.isArray(_[d])?_[d]:[_[d]];for(let y=0,I=z.length;y<I;y++){let Q=z[y],U=Array.isArray(Q.value)?Q.value:[Q.value];for(let G=0,X=U.length;G<X;G++){let B=U[G],$=l(B),Y=v%16,K=Y%$.boundary,J=Y+K;v+=K,J!==0&&16-J<$.storage&&(v+=16-J),Q.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=v,v+=$.storage}}}let w=v%16;return w>0&&(v+=16-w),p.__size=v,p.__cache={},this}function l(p){let _={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(_.boundary=4,_.storage=4):p.isVector2?(_.boundary=8,_.storage=8):p.isVector3||p.isColor?(_.boundary=16,_.storage=12):p.isVector4?(_.boundary=16,_.storage=16):p.isMatrix3?(_.boundary=48,_.storage=48):p.isMatrix4?(_.boundary=64,_.storage=64):p.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(p)?(_.boundary=16,_.storage=p.byteLength):je("WebGLRenderer: Unsupported uniform value type.",p),_}function b(p){let _=p.target;_.removeEventListener("dispose",b);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),e.deleteBuffer(n[_.id]),delete n[_.id],delete r[_.id]}function D(){for(let p in n)e.deleteBuffer(n[p]);o=[],n={},r={}}return{bind:S,update:E,dispose:D}}var Cc=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ut=null;function yc(){return Ut===null&&(Ut=new xo(Cc,16,16,ci,$t),Ut.name="DFG_LUT",Ut.minFilter=It,Ut.magFilter=It,Ut.wrapS=si,Ut.wrapT=si,Ut.generateMipmaps=!1,Ut.needsUpdate=!0),Ut}var Pc=class{constructor(e={}){let{canvas:a=Hn(),context:t=null,depth:i=!0,stencil:n=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:S=!1,powerPreference:E="default",failIfMajorPerformanceCaveat:M=!1,reversedDepthBuffer:N=!1,outputBufferType:h=ha}=e;this.isWebGLRenderer=!0;let x;if(t!==null){if(typeof WebGLRenderingContext<"u"&&t instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=t.getContextAttributes().alpha}else x=r;let T=h,k=new Set([zo,ko,Wo]),g=new Set([ha,wa,Xo,zr,Yo,jo]),l=new Uint32Array(4),b=new Int32Array(4),D=new q,p=null,_=null,v=[],w=[],d=null;this.domElement=a,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let m=this,z=!1,y=null,I=null,Q=null,U=null;this._outputColorSpace=Ti;let G=0,X=0,B=null,$=-1,Y=null,K=new St,J=new St,Ne=null,be=new Ye(0),Ge=0,Ie=a.width,W=a.height,re=1,le=null,ye=null,De=new St(0,0,Ie,W),ve=new St(0,0,Ie,W),Ke=!1,ze=new Br,Le=!1,rt=!1,ht=new Zt,Et=new q,Qe=new St,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},st=!1;function lt(){return B===null?re:1}let C=t;function gt(u,R){return a.getContext(u,R)}let ke,at,f,c,A,H,Z,se,pe,L,ne,fe,Se,te,we,Ae,Pe,We,P,j,ee,ge,Te;try{let u={alpha:!0,depth:i,stencil:n,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:S,powerPreference:E,failIfMajorPerformanceCaveat:M};if("setAttribute"in a&&a.setAttribute("data-engine","three.js r186"),a.addEventListener("webglcontextlost",Ce,!1),a.addEventListener("webglcontextrestored",ct,!1),a.addEventListener("webglcontextcreationerror",Xe,!1),C===null){let R="webgl2";if(C=gt(R,u),C===null)throw gt(R)?Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):Error("THREE.WebGLRenderer: Error creating WebGL context.")}ae()}catch(u){throw a.removeEventListener("webglcontextlost",Ce,!1),a.removeEventListener("webglcontextrestored",ct,!1),a.removeEventListener("webglcontextcreationerror",Xe,!1),et("WebGLRenderer: "+u.message),u}function ae(){ke=new ys(C),ke.init(),ee=new Ec(C,ke),at=new Ss(C,ke,e,ee),f=new vc(C,ke),at.reversedDepthBuffer&&N&&f.buffers.depth.setReversed(!0),I=C.createFramebuffer(),Q=C.createFramebuffer(),U=C.createFramebuffer(),c=new Ls(C),A=new rc,H=new Sc(C,ke,f,A,at,ee,c),Z=new Cs(m),se=new hs(C),ge=new _s(C,se),pe=new Ps(C,se,c,ge),L=new Ns(C,pe,se,ge,c),We=new Us(C,at,H),we=new Es(A),ne=new ic(m,Z,ke,at,ge,we),fe=new Ac(m,A),Se=new oc,te=new fc(ke),Pe=new gs(m,Z,f,L,x,s),Ae=new _c(m,L,at),Te=new Rc(C,c,at,f),P=new vs(C,ke,c),j=new Ds(C,ke,c),c.programs=ne.programs,m.capabilities=at,m.extensions=ke,m.properties=A,m.renderLists=Se,m.shadowMap=Ae,m.state=f,m.info=c}T!==1009&&(d=new Os(T,a.width,a.height,o,i,n));let me=new bc(m,C);this.xr=me,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let u=ke.get("WEBGL_lose_context");u&&u.loseContext()},this.forceContextRestore=function(){let u=ke.get("WEBGL_lose_context");u&&u.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(u){u!==void 0&&(re=u,this.setSize(Ie,W,!1))},this.getSize=function(u){return u.set(Ie,W)},this.setSize=function(u,R,V=!0){me.isPresenting?je("WebGLRenderer: Can't change size while VR device is presenting."):(Ie=u,W=R,a.width=Math.floor(u*re),a.height=Math.floor(R*re),V===!0&&(a.style.width=u+"px",a.style.height=R+"px"),d!==null&&d.setSize(a.width,a.height),this.setViewport(0,0,u,R))},this.getDrawingBufferSize=function(u){return u.set(Ie*re,W*re).floor()},this.setDrawingBufferSize=function(u,R,V){Ie=u,W=R,re=V,a.width=Math.floor(u*V),a.height=Math.floor(R*V),this.setViewport(0,0,u,R)},this.setEffects=function(u){if(T===1009)et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");else{if(u){for(let R=0;R<u.length;R++)if(u[R].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}d.setEffects(u||[])}},this.getCurrentViewport=function(u){return u.copy(K)},this.getViewport=function(u){return u.copy(De)},this.setViewport=function(u,R,V,F){u.isVector4?De.set(u.x,u.y,u.z,u.w):De.set(u,R,V,F),f.viewport(K.copy(De).multiplyScalar(re).round())},this.getScissor=function(u){return u.copy(ve)},this.setScissor=function(u,R,V,F){u.isVector4?ve.set(u.x,u.y,u.z,u.w):ve.set(u,R,V,F),f.scissor(J.copy(ve).multiplyScalar(re).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(u){f.setScissorTest(Ke=u)},this.setOpaqueSort=function(u){le=u},this.setTransparentSort=function(u){ye=u},this.getClearColor=function(u){return u.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(u=!0,R=!0,V=!0){let F=0;if(u){let O=!1;if(B!==null){let oe=B.texture.format;O=k.has(oe)}if(O){let oe=B.texture.type,he=g.has(oe),_e=Pe.getClearColor(),Ee=Pe.getClearAlpha(),Re=_e.r,Oe=_e.g,Fe=_e.b;he?(l[0]=Re,l[1]=Oe,l[2]=Fe,l[3]=Ee,C.clearBufferuiv(C.COLOR,0,l)):(b[0]=Re,b[1]=Oe,b[2]=Fe,b[3]=Ee,C.clearBufferiv(C.COLOR,0,b))}else F|=C.COLOR_BUFFER_BIT}R&&(F|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(F|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&C.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(u){u.setRenderer(this),y=u},this.dispose=function(){a.removeEventListener("webglcontextlost",Ce,!1),a.removeEventListener("webglcontextrestored",ct,!1),a.removeEventListener("webglcontextcreationerror",Xe,!1),Pe.dispose(),Se.dispose(),te.dispose(),A.dispose(),Z.dispose(),L.dispose(),ge.dispose(),Te.dispose(),ne.dispose(),me.dispose(),me.removeEventListener("sessionstart",Pi),me.removeEventListener("sessionend",Di),zt.stop()};function Ce(u){u.preventDefault(),Wi("WebGLRenderer: Context Lost."),z=!0}function ct(){Wi("WebGLRenderer: Context Restored."),z=!1;let u=c.autoReset,R=Ae.enabled,V=Ae.autoUpdate,F=Ae.needsUpdate,O=Ae.type;ae(),c.autoReset=u,Ae.enabled=R,Ae.autoUpdate=V,Ae.needsUpdate=F,Ae.type=O}function Xe(u){et("WebGLRenderer: A WebGL context could not be created. Reason: ",u.statusMessage)}function Dt(u){let R=u.target;R.removeEventListener("dispose",Dt),Ot(R)}function Ot(u){bn(u),A.remove(u)}function bn(u){let R=A.get(u).programs;R!==void 0&&(R.forEach(function(V){ne.releaseProgram(V)}),u.isShaderMaterial&&ne.releaseShaderCache(u))}this.renderBufferDirect=function(u,R,V,F,O,oe){R===null&&(R=mt);let he=O.isMesh&&O.matrixWorld.determinantAffine()<0,_e=Rn(u,R,V,F,O);f.setMaterial(F,he);let Ee=V.index,Re=1;if(F.wireframe===!0){if(Ee=pe.getWireframeAttribute(V),Ee===void 0)return;Re=2}let Oe=V.drawRange,Fe=V.attributes.position,xe=Oe.start*Re,qe=(Oe.start+Oe.count)*Re;oe!==null&&(xe=Math.max(xe,oe.start*Re),qe=Math.min(qe,(oe.start+oe.count)*Re)),Ee===null?Fe!=null&&(xe=Math.max(xe,0),qe=Math.min(qe,Fe.count)):(xe=Math.max(xe,0),qe=Math.min(qe,Ee.count));let nt=qe-xe;if(nt<0||nt===1/0)return;ge.setup(O,F,_e,V,Ee);let Je,He=P;if(Ee!==null&&(Je=se.get(Ee),He=j,He.setIndex(Je)),O.isMesh)F.wireframe===!0?(f.setLineWidth(F.wireframeLinewidth*lt()),He.setMode(C.LINES)):He.setMode(C.TRIANGLES);else if(O.isLine){let pt=F.linewidth;pt===void 0&&(pt=1),f.setLineWidth(pt*lt()),O.isLineSegments?He.setMode(C.LINES):O.isLineLoop?He.setMode(C.LINE_LOOP):He.setMode(C.LINE_STRIP)}else O.isPoints?He.setMode(C.POINTS):O.isSprite&&He.setMode(C.TRIANGLES);if(O.isBatchedMesh)if(ke.get("WEBGL_multi_draw"))He.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let pt=O._multiDrawStarts,Me=O._multiDrawCounts,Mt=O._multiDrawCount,Tt=Ee?se.get(Ee).bytesPerElement:1,At=A.get(F).currentProgram.getUniforms();for(let Lt=0;Lt<Mt;Lt++)At.setValue(C,"_gl_DrawID",Lt),He.render(pt[Lt]/Tt,Me[Lt])}else if(O.isInstancedMesh)He.renderInstances(xe,nt,O.count);else if(V.isInstancedBufferGeometry){let pt=V._maxInstanceCount===void 0?1/0:V._maxInstanceCount,Me=Math.min(V.instanceCount,pt);He.renderInstances(xe,nt,Me)}else He.render(xe,nt)};function yi(u,R,V,F){y!==null&&u.isNodeMaterial&&y.setObject(F,u),Le===!0&&we.setState(u,V,!1),u.transparent===!0&&u.side===2&&u.forceSinglePass===!1?(u.side=1,u.needsUpdate=!0,va(u,R,F),u.side=0,u.needsUpdate=!0,va(u,R,F),u.side=2):va(u,R,F)}this.compile=function(u,R,V=null){V===null&&(V=u),y!==null&&y.renderStart(u,R,V),_=te.get(V),_.init(R),w.push(_),V.traverseVisible(function(O){O.isLight&&O.layers.test(R.layers)&&(_.pushLight(O),O.castShadow&&_.pushShadow(O))}),u!==V&&u.traverseVisible(function(O){O.isLight&&O.layers.test(R.layers)&&(_.pushLight(O),O.castShadow&&_.pushShadow(O))}),_.setupLights(),y!==null&&y.updateLights(_.state.lightsArray),rt=this.localClippingEnabled,Le=we.init(this.clippingPlanes,rt),Le===!0&&we.setGlobalState(this.clippingPlanes,R),y!==null&&Ae.render(_.state.shadowsArray,V,R);let F=new Set;return u.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let oe=O.material;if(oe)if(Array.isArray(oe))for(let he=0;he<oe.length;he++){let _e=oe[he];yi(_e,V,R,O),F.add(_e)}else yi(oe,V,R,O),F.add(oe)}),_=w.pop(),y!==null&&y.renderEnd(),F},this.compileAsync=function(u,R,V=null){let F=this.compile(u,R,V);return new Promise(O=>{function oe(){F.forEach(function(he){let _e=A.get(he).currentProgram;(_e===void 0||_e.isReady())&&F.delete(he)}),F.size===0?O(u):setTimeout(oe,10)}ke.get("KHR_parallel_shader_compile")===null?setTimeout(oe,10):oe()})};let Na=null;function wn(u){Na&&Na(u)}function Pi(){zt.stop()}function Di(){zt.start()}let zt=new $r;zt.setAnimationLoop(wn),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(u){Na=u,me.setAnimationLoop(u),u===null?zt.stop():zt.start()},me.addEventListener("sessionstart",Pi),me.addEventListener("sessionend",Di),this.render=function(u,R){if(R!==void 0&&R.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;y!==null&&y.renderStart(u,R);let V=me.enabled===!0&&me.isPresenting===!0,F=d!==null&&(B===null||V)&&d.begin(m,B);if(u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(d===null||d.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(R),R=me.getCamera()),u.isScene===!0&&u.onBeforeRender(m,u,R,B),_=te.get(u,w.length),_.init(R),_.state.textureUnits=H.getTextureUnits(),w.push(_),ht.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),ze.setFromProjectionMatrix(ht,Xi,R.reversedDepth),rt=this.localClippingEnabled,Le=we.init(this.clippingPlanes,rt),p=Se.get(u,v.length),p.init(),v.push(p),me.enabled===!0&&me.isPresenting===!0){let oe=m.xr.getDepthSensingMesh();oe!==null&&Ia(oe,R,-1/0,m.sortObjects)}Ia(u,R,0,m.sortObjects),p.finish(),y!==null&&y.updateLights(_.state.lightsArray),m.sortObjects===!0&&p.sort(le,ye),st=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,st&&Pe.addToRenderList(p,u),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Le===!0&&we.beginShadows();let O=_.state.shadowsArray;if(Ae.render(O,u,R),Le===!0&&we.endShadows(),(F&&d.hasRenderPass())===!1){let oe=p.opaque,he=p.transmissive;if(_.setupLights(),R.isArrayCamera){let _e=R.cameras;if(he.length>0)for(let Ee=0,Re=_e.length;Ee<Re;Ee++){let Oe=_e[Ee];Ui(oe,he,u,Oe)}st&&Pe.render(u);for(let Ee=0,Re=_e.length;Ee<Re;Ee++){let Oe=_e[Ee];Li(p,u,Oe,Oe.viewport)}}else he.length>0&&Ui(oe,he,u,R),st&&Pe.render(u),Li(p,u,R)}B!==null&&X===0&&(H.updateMultisampleRenderTarget(B),H.updateRenderTargetMipmap(B)),F&&d.end(m),u.isScene===!0&&u.onAfterRender(m,u,R),ge.resetDefaultState(),$=-1,Y=null,w.pop(),w.length>0?(_=w[w.length-1],H.setTextureUnits(_.state.textureUnits),Le===!0&&we.setGlobalState(m.clippingPlanes,_.state.camera)):_=null,v.pop(),p=v.length>0?v[v.length-1]:null,y!==null&&y.renderEnd()};function Ia(u,R,V,F){if(u.visible===!1)return;if(u.layers.test(R.layers)){if(u.isGroup)V=u.renderOrder;else if(u.isLOD)u.autoUpdate===!0&&u.update(R);else if(u.isLightProbeGrid)_.pushLightProbeGrid(u);else if(u.isLight)_.pushLight(u),u.castShadow&&_.pushShadow(u);else if(u.isSprite){if(!u.frustumCulled||u.intersectsFrustum(ze)){F&&Qe.setFromMatrixPosition(u.matrixWorld).applyMatrix4(ht);let oe=L.update(u),he=u.material;he.visible&&p.push(u,oe,he,V,Qe.z,null,R)}}else if((u.isMesh||u.isLine||u.isPoints)&&(!u.frustumCulled||u.intersectsFrustum(ze))){let oe=L.update(u),he=u.material;if(F&&(u.boundingSphere===void 0?(oe.boundingSphere===null&&oe.computeBoundingSphere(),Qe.copy(oe.boundingSphere.center)):(u.boundingSphere===null&&u.computeBoundingSphere(),Qe.copy(u.boundingSphere.center)),Qe.applyMatrix4(u.matrixWorld).applyMatrix4(ht)),Array.isArray(he)){let _e=oe.groups;for(let Ee=0,Re=_e.length;Ee<Re;Ee++){let Oe=_e[Ee],Fe=he[Oe.materialIndex];Fe&&Fe.visible&&p.push(u,oe,Fe,V,Qe.z,Oe,R)}}else he.visible&&p.push(u,oe,he,V,Qe.z,null,R)}}let O=u.children;for(let oe=0,he=O.length;oe<he;oe++)Ia(O[oe],R,V,F)}function Li(u,R,V,F){let{opaque:O,transmissive:oe,transparent:he}=u;_.setupLightsView(V),Le===!0&&we.setGlobalState(m.clippingPlanes,V),F&&f.viewport(K.copy(F)),O.length>0&&_a(O,R,V),oe.length>0&&_a(oe,R,V),he.length>0&&_a(he,R,V),f.buffers.depth.setTest(!0),f.buffers.depth.setMask(!0),f.buffers.color.setMask(!0),f.setPolygonOffset(!1)}function Ui(u,R,V,F){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(_.state.transmissionRenderTarget[F.id]===void 0){let Fe=ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float");_.state.transmissionRenderTarget[F.id]=new Pt(1,1,{generateMipmaps:!0,type:Fe?$t:ha,minFilter:Gr,samples:Math.max(4,at.samples),stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}let O=_.state.transmissionRenderTarget[F.id],oe=F.viewport||K;O.setSize(oe.z*m.transmissionResolutionScale,oe.w*m.transmissionResolutionScale);let he=m.getRenderTarget(),_e=m.getActiveCubeFace(),Ee=m.getActiveMipmapLevel();m.setRenderTarget(O),m.getClearColor(be),Ge=m.getClearAlpha(),Ge<1&&m.setClearColor(16777215,.5),m.clear(),st&&Pe.render(V);let Re=m.toneMapping;m.toneMapping=0;let Oe=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),_.setupLightsView(F),Le===!0&&we.setGlobalState(m.clippingPlanes,F),_a(u,V,F),H.updateMultisampleRenderTarget(O),H.updateRenderTargetMipmap(O),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let xe=0,qe=R.length;xe<qe;xe++){let{object:nt,geometry:Je,material:He,group:pt}=R[xe];if(He.side===2&&nt.layers.test(F.layers)){let Me=He.side;He.side=1,He.needsUpdate=!0,Ni(nt,V,F,Je,He,pt),He.side=Me,He.needsUpdate=!0,Fe=!0}}Fe===!0&&(H.updateMultisampleRenderTarget(O),H.updateRenderTargetMipmap(O))}m.setRenderTarget(he,_e,Ee),m.setClearColor(be,Ge),Oe!==void 0&&(F.viewport=Oe),m.toneMapping=Re}function _a(u,R,V){let F=R.isScene===!0?R.overrideMaterial:null;for(let O=0,oe=u.length;O<oe;O++){let he=u[O],{object:_e,geometry:Ee,group:Re}=he,Oe=he.material;Oe.allowOverride===!0&&F!==null&&(Oe=F),_e.layers.test(V.layers)&&Ni(_e,R,V,Ee,Oe,Re)}}function Ni(u,R,V,F,O,oe){y!==null&&O.isNodeMaterial&&y.setObject(u,O),u.onBeforeRender(m,R,V,F,O,oe),u.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,u.matrixWorld),u.normalMatrix.getNormalMatrix(u.modelViewMatrix),O.onBeforeRender(m,R,V,F,u,oe),O.transparent===!0&&O.side===2&&O.forceSinglePass===!1?(O.side=1,O.needsUpdate=!0,m.renderBufferDirect(V,R,F,O,u,oe),O.side=0,O.needsUpdate=!0,m.renderBufferDirect(V,R,F,O,u,oe),O.side=2):m.renderBufferDirect(V,R,F,O,u,oe),u.onAfterRender(m,R,V,F,O,oe)}function va(u,R,V){R.isScene!==!0&&(R=mt);let F=A.get(u),O=_.state.lights,oe=_.state.shadowsArray,he=O.state.version,_e=ne.getParameters(u,O.state,oe,R,V,_.state.lightProbeGridArray),Ee=ne.getProgramCacheKey(_e),Re=F.programs;F.environment=u.isMeshStandardMaterial||u.isMeshLambertMaterial||u.isMeshPhongMaterial?R.environment:null,F.fog=R.fog;let Oe=u.isMeshStandardMaterial||u.isMeshLambertMaterial&&!u.envMap||u.isMeshPhongMaterial&&!u.envMap;F.envMap=Z.get(u.envMap||F.environment,Oe),F.envMapRotation=F.environment!==null&&u.envMap===null?R.environmentRotation:u.envMapRotation,Re===void 0&&(u.addEventListener("dispose",Dt),Re=new Map,F.programs=Re);let Fe=Re.get(Ee);if(Fe!==void 0){if(F.currentProgram===Fe&&F.lightsStateVersion===he)return Oi(u,_e),Fe}else _e.uniforms=ne.getUniforms(u),y!==null&&u.isNodeMaterial&&y.build(u,V,_e),u.onBeforeCompile(_e,m),Fe=ne.acquireProgram(_e,Ee),Re.set(Ee,Fe),F.uniforms=_e.uniforms;let xe=F.uniforms;return(!u.isShaderMaterial&&!u.isRawShaderMaterial||u.clipping===!0)&&(xe.clippingPlanes=we.uniform),Oi(u,_e),F.needsLights=yn(u),F.lightsStateVersion=he,F.needsLights&&(xe.ambientLightColor.value=O.state.ambient,xe.lightProbe.value=O.state.probe,xe.sunLights.value=O.state.sun,xe.sunLightShadows.value=O.state.sunShadow,xe.directionalLights.value=O.state.directional,xe.directionalLightShadows.value=O.state.directionalShadow,xe.spotLights.value=O.state.spot,xe.spotLightShadows.value=O.state.spotShadow,xe.rectAreaLights.value=O.state.rectArea,xe.ltc_1.value=O.state.rectAreaLTC1,xe.ltc_2.value=O.state.rectAreaLTC2,xe.pointLights.value=O.state.point,xe.pointLightShadows.value=O.state.pointShadow,xe.hemisphereLights.value=O.state.hemi,xe.sunShadowMatrix.value=O.state.sunShadowMatrix,xe.sunShadowCascade.value=O.state.sunShadowCascade,xe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,xe.spotLightMatrix.value=O.state.spotLightMatrix,xe.spotLightMap.value=O.state.spotLightMap,xe.pointShadowMatrix.value=O.state.pointShadowMatrix),F.lightProbeGrid=_.state.lightProbeGridArray.length>0,F.currentProgram=Fe,F.uniformsList=null,Fe}function Ii(u){if(u.uniformsList===null){let R=u.currentProgram.getUniforms();u.uniformsList=xa.seqWithValue(R.seq,u.uniforms)}return u.uniformsList}function Oi(u,R){let V=A.get(u);V.outputColorSpace=R.outputColorSpace,V.batching=R.batching,V.batchingColor=R.batchingColor,V.instancing=R.instancing,V.instancingColor=R.instancingColor,V.instancingMorph=R.instancingMorph,V.skinning=R.skinning,V.morphTargets=R.morphTargets,V.morphNormals=R.morphNormals,V.morphColors=R.morphColors,V.morphTargetsCount=R.morphTargetsCount,V.numClippingPlanes=R.numClippingPlanes,V.numIntersection=R.numClipIntersection,V.vertexAlphas=R.vertexAlphas,V.vertexTangents=R.vertexTangents,V.toneMapping=R.toneMapping}function An(u,R){if(u.length===0)return null;if(u.length===1)return u[0].texture===null?null:u[0];D.setFromMatrixPosition(R.matrixWorld);for(let V=0,F=u.length;V<F;V++){let O=u[V];if(O.texture!==null&&O.boundingBox.containsPoint(D))return O}return null}function Rn(u,R,V,F,O){R.isScene!==!0&&(R=mt),H.resetTextureUnits();let oe=R.fog,he=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?R.environment:null,_e=B===null?m.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:it.workingColorSpace,Ee=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Re=Z.get(F.envMap||he,Ee),Oe=F.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Fe=!!V.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),xe=!!V.morphAttributes.position,qe=!!V.morphAttributes.normal,nt=!!V.morphAttributes.color,Je=0;F.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Je=m.toneMapping);let He=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,pt=He===void 0?0:He.length,Me=A.get(F),Mt=_.state.lights;if(Le===!0&&(rt===!0||u!==Y)){let $e=u===Y&&F.id===$;we.setState(F,u,$e)}let Tt=!1;F.version===Me.__version?Me.needsLights&&Me.lightsStateVersion!==Mt.state.version?Tt=!0:Me.outputColorSpace===_e?O.isBatchedMesh&&Me.batching===!1||!O.isBatchedMesh&&Me.batching===!0||O.isBatchedMesh&&Me.batchingColor===!0&&O._colorsTexture===null||O.isBatchedMesh&&Me.batchingColor===!1&&O._colorsTexture!==null||O.isInstancedMesh&&Me.instancing===!1||!O.isInstancedMesh&&Me.instancing===!0||O.isSkinnedMesh&&Me.skinning===!1||!O.isSkinnedMesh&&Me.skinning===!0||O.isInstancedMesh&&Me.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Me.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Me.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Me.instancingMorph===!1&&O.morphTexture!==null?Tt=!0:Me.envMap===Re?F.fog===!0&&Me.fog!==oe||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==we.numPlanes||Me.numIntersection!==we.numIntersection)?Tt=!0:Me.vertexAlphas===Oe&&Me.vertexTangents===Fe&&Me.morphTargets===xe&&Me.morphNormals===qe&&Me.morphColors===nt&&Me.toneMapping===Je&&Me.morphTargetsCount===pt?!!Me.lightProbeGrid!=_.state.lightProbeGridArray.length>0&&(Tt=!0):Tt=!0:Tt=!0:Tt=!0:(Tt=!0,Me.__version=F.version);let At=Me.currentProgram;Tt===!0&&(At=va(F,R,O),y&&F.isNodeMaterial&&y.onUpdateProgram(F,At,Me));let Lt=!1,Bt=!1,Qt=!1,Ze=At.getUniforms(),ot=Me.uniforms;if(f.useProgram(At.program)&&(Lt=!0,Bt=!0,Qt=!0),F.id!==$&&($=F.id,Bt=!0),Me.needsLights){let $e=An(_.state.lightProbeGridArray,O);Me.lightProbeGrid!==$e&&(Me.lightProbeGrid=$e,Bt=!0)}if(Lt||Y!==u){f.buffers.depth.getReversed()&&u.reversedDepth!==!0&&(u._reversedDepth=!0,u.updateProjectionMatrix()),Ze.setValue(C,"projectionMatrix",u.projectionMatrix),Ze.setValue(C,"viewMatrix",u.matrixWorldInverse);let $e=Ze.map.cameraPosition;$e!==void 0&&$e.setValue(C,Et.setFromMatrixPosition(u.matrixWorld)),at.logarithmicDepthBuffer&&Ze.setValue(C,"logDepthBufFC",2/(Math.log(u.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Ze.setValue(C,"isOrthographic",u.isOrthographicCamera===!0),Y!==u&&(Y=u,Bt=!0,Qt=!0)}if(Me.needsLights&&(Mt.state.sunShadowMap.length>0&&Ze.setValue(C,"sunShadowMap",Mt.state.sunShadowMap,H),Mt.state.directionalShadowMap.length>0&&Ze.setValue(C,"directionalShadowMap",Mt.state.directionalShadowMap,H),Mt.state.spotShadowMap.length>0&&Ze.setValue(C,"spotShadowMap",Mt.state.spotShadowMap,H),Mt.state.pointShadowMap.length>0&&Ze.setValue(C,"pointShadowMap",Mt.state.pointShadowMap,H)),O.isSkinnedMesh){Ze.setOptional(C,O,"bindMatrix"),Ze.setOptional(C,O,"bindMatrixInverse");let $e=O.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),Ze.setValue(C,"boneTexture",$e.boneTexture,H))}O.isBatchedMesh&&(Ze.setOptional(C,O,"batchingTexture"),Ze.setValue(C,"batchingTexture",O._matricesTexture,H),Ze.setOptional(C,O,"batchingIdTexture"),Ze.setValue(C,"batchingIdTexture",O._indirectTexture,H),Ze.setOptional(C,O,"batchingColorTexture"),O._colorsTexture!==null&&Ze.setValue(C,"batchingColorTexture",O._colorsTexture,H));let Gt=V.morphAttributes;if((Gt.position!==void 0||Gt.normal!==void 0||Gt.color!==void 0)&&We.update(O,V,At),(Bt||Me.receiveShadow!==O.receiveShadow)&&(Me.receiveShadow=O.receiveShadow,Ze.setValue(C,"receiveShadow",O.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&R.environment!==null&&(ot.envMapIntensity.value=R.environmentIntensity),ot.dfgLUT!==void 0&&(ot.dfgLUT.value=yc()),Bt){if(Ze.setValue(C,"toneMappingExposure",m.toneMappingExposure),Me.needsLights&&Cn(ot,Qt),oe&&F.fog===!0&&fe.refreshFogUniforms(ot,oe),fe.refreshMaterialUniforms(ot,F,re,W,_.state.transmissionRenderTarget[u.id]),Me.needsLights&&Me.lightProbeGrid){let $e=Me.lightProbeGrid;ot.probesSH.value=$e.texture,ot.probesMin.value.copy($e.boundingBox.min),ot.probesMax.value.copy($e.boundingBox.max),ot.probesResolution.value.copy($e.resolution)}xa.upload(C,Ii(Me),ot,H)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(xa.upload(C,Ii(Me),ot,H),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Ze.setValue(C,"center",O.center),Ze.setValue(C,"modelViewMatrix",O.modelViewMatrix),Ze.setValue(C,"normalMatrix",O.normalMatrix),Ze.setValue(C,"modelMatrix",O.matrixWorld),F.uniformsGroups!==void 0){let $e=F.uniformsGroups;for(let oa=0,Jt=$e.length;oa<Jt;oa++){let Bi=$e[oa];Te.update(Bi,At),Te.bind(Bi,At)}}return At}function Cn(u,R){u.ambientLightColor.needsUpdate=R,u.lightProbe.needsUpdate=R,u.sunLights.needsUpdate=R,u.sunLightShadows.needsUpdate=R,u.directionalLights.needsUpdate=R,u.directionalLightShadows.needsUpdate=R,u.pointLights.needsUpdate=R,u.pointLightShadows.needsUpdate=R,u.spotLights.needsUpdate=R,u.spotLightShadows.needsUpdate=R,u.rectAreaLights.needsUpdate=R,u.hemisphereLights.needsUpdate=R}function yn(u){return u.isMeshLambertMaterial||u.isMeshToonMaterial||u.isMeshPhongMaterial||u.isMeshStandardMaterial||u.isShadowMaterial||u.isShaderMaterial&&u.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(u,R,V){let F=A.get(u);F.__autoAllocateDepthBuffer=u.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),A.get(u.texture).__webglTexture=R,A.get(u.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:V,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(u,R){let V=A.get(u);V.__webglFramebuffer=R,V.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(u,R=0,V=0){B=u,G=R,X=V;let F=null,O=!1,oe=!1;if(u){let he=A.get(u);if(he.__useDefaultFramebuffer!==void 0){f.bindFramebuffer(C.FRAMEBUFFER,he.__webglFramebuffer),K.copy(u.viewport),J.copy(u.scissor),Ne=u.scissorTest,f.viewport(K),f.scissor(J),f.setScissorTest(Ne),$=-1;return}if(he.__webglFramebuffer===void 0)H.setupRenderTarget(u);else if(he.__hasExternalTextures)H.rebindTextures(u,A.get(u.texture).__webglTexture,A.get(u.depthTexture).__webglTexture);else if(u.depthBuffer){let Re=u.depthTexture;if(he.__boundDepthTexture!==Re){if(Re!==null&&A.has(Re)&&(u.width!==Re.image.width||u.height!==Re.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(u)}}let _e=u.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(oe=!0);let Ee=A.get(u).__webglFramebuffer;u.isWebGLCubeRenderTarget?(F=Array.isArray(Ee[R])?Ee[R][V]:Ee[R],O=!0):F=u.samples>0&&H.useMultisampledRTT(u)===!1?A.get(u).__webglMultisampledFramebuffer:Array.isArray(Ee)?Ee[V]:Ee,K.copy(u.viewport),J.copy(u.scissor),Ne=u.scissorTest}else K.copy(De).multiplyScalar(re).floor(),J.copy(ve).multiplyScalar(re).floor(),Ne=Ke;if(V!==0&&(F=I),f.bindFramebuffer(C.FRAMEBUFFER,F)&&f.drawBuffers(u,F),f.viewport(K),f.scissor(J),f.setScissorTest(Ne),O){let he=A.get(u.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+R,he.__webglTexture,V)}else if(oe){let he=R;for(let _e=0;_e<u.textures.length;_e++){let Ee=A.get(u.textures[_e]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+_e,Ee.__webglTexture,V,he)}}else if(u!==null&&V!==0){let he=A.get(u.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,he.__webglTexture,V)}$=-1};function Fi(u){let R=A.get(u);return(R.__readFormat!==u.format||R.__readType!==u.type)&&(R.__readFormat=u.format,R.__readType=u.type,R.__formatReadable=at.textureFormatReadable(u.format),R.__typeReadable=at.textureTypeReadable(u.type)),R}this.readRenderTargetPixels=function(u,R,V,F,O,oe,he,_e=0){if(!(u&&u.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=A.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&he!==void 0&&(Ee=Ee[he]),Ee){f.bindFramebuffer(C.FRAMEBUFFER,Ee);try{let Re=u.textures[_e],Oe=Re.format,Fe=Re.type;u.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+_e);let xe=Fi(Re);if(xe.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(xe.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=u.width-F&&V>=0&&V<=u.height-O&&C.readPixels(R,V,F,O,ee.convert(Oe),ee.convert(Fe),oe)}finally{let Re=B===null?null:A.get(B).__webglFramebuffer;f.bindFramebuffer(C.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(u,R,V,F,O,oe,he,_e=0){if(!(u&&u.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=A.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&he!==void 0&&(Ee=Ee[he]),Ee){if(R>=0&&R<=u.width-F&&V>=0&&V<=u.height-O){f.bindFramebuffer(C.FRAMEBUFFER,Ee);let Re=u.textures[_e],Oe=Re.format,Fe=Re.type;u.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+_e);let xe=Fi(Re);if(xe.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(xe.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let qe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,qe),C.bufferData(C.PIXEL_PACK_BUFFER,oe.byteLength,C.STREAM_READ),C.readPixels(R,V,F,O,ee.convert(Oe),ee.convert(Fe),0),C.bindBuffer(C.PIXEL_PACK_BUFFER,null);let nt=B===null?null:A.get(B).__webglFramebuffer;f.bindFramebuffer(C.FRAMEBUFFER,nt);let Je=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Vn(C,Je,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,qe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,oe),C.bindBuffer(C.PIXEL_PACK_BUFFER,null),C.deleteBuffer(qe),C.deleteSync(Je),oe}throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(u,R=null,V=0){let F=2**-V,O=Math.floor(u.image.width*F),oe=Math.floor(u.image.height*F),he=R===null?0:R.x,_e=R===null?0:R.y;H.setTexture2D(u,0),C.copyTexSubImage2D(C.TEXTURE_2D,V,0,0,he,_e,O,oe),f.unbindTexture()},this.copyTextureToTexture=function(u,R,V=null,F=null,O=0,oe=0){let he,_e,Ee,Re,Oe,Fe,xe,qe,nt,Je=u.isCompressedTexture?u.mipmaps[oe]:u.image;if(V!==null)he=V.max.x-V.min.x,_e=V.max.y-V.min.y,Ee=V.isBox3?V.max.z-V.min.z:1,Re=V.min.x,Oe=V.min.y,Fe=V.isBox3?V.min.z:0;else{let ot=2**-O;he=Math.floor(Je.width*ot),_e=Math.floor(Je.height*ot),Ee=u.isDataArrayTexture?Je.depth:u.isData3DTexture?Math.floor(Je.depth*ot):1,Re=0,Oe=0,Fe=0}F===null?(xe=0,qe=0,nt=0):(xe=F.x,qe=F.y,nt=F.z);let He=ee.convert(R.format),pt=ee.convert(R.type),Me;R.isData3DTexture?(H.setTexture3D(R,0),Me=C.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(H.setTexture2DArray(R,0),Me=C.TEXTURE_2D_ARRAY):(H.setTexture2D(R,0),Me=C.TEXTURE_2D),f.activeTexture(C.TEXTURE0),f.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,R.flipY),f.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),f.pixelStorei(C.UNPACK_ALIGNMENT,R.unpackAlignment);let Mt=f.getParameter(C.UNPACK_ROW_LENGTH),Tt=f.getParameter(C.UNPACK_IMAGE_HEIGHT),At=f.getParameter(C.UNPACK_SKIP_PIXELS),Lt=f.getParameter(C.UNPACK_SKIP_ROWS),Bt=f.getParameter(C.UNPACK_SKIP_IMAGES);f.pixelStorei(C.UNPACK_ROW_LENGTH,Je.width),f.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Je.height),f.pixelStorei(C.UNPACK_SKIP_PIXELS,Re),f.pixelStorei(C.UNPACK_SKIP_ROWS,Oe),f.pixelStorei(C.UNPACK_SKIP_IMAGES,Fe);let Qt=u.isDataArrayTexture||u.isData3DTexture,Ze=R.isDataArrayTexture||R.isData3DTexture;if(u.isDepthTexture){let ot=A.get(u),Gt=A.get(R),$e=A.get(ot.__renderTarget),oa=A.get(Gt.__renderTarget);f.bindFramebuffer(C.READ_FRAMEBUFFER,$e.__webglFramebuffer),f.bindFramebuffer(C.DRAW_FRAMEBUFFER,oa.__webglFramebuffer);for(let Jt=0;Jt<Ee;Jt++)Qt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,A.get(u).__webglTexture,O,Fe+Jt),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,A.get(R).__webglTexture,oe,nt+Jt)),C.blitFramebuffer(Re,Oe,he,_e,xe,qe,he,_e,C.DEPTH_BUFFER_BIT,C.NEAREST);f.bindFramebuffer(C.READ_FRAMEBUFFER,null),f.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(O!==0||u.isRenderTargetTexture||A.has(u)){let ot=A.get(u),Gt=A.get(R);f.bindFramebuffer(C.READ_FRAMEBUFFER,Q),f.bindFramebuffer(C.DRAW_FRAMEBUFFER,U);for(let $e=0;$e<Ee;$e++)Qt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ot.__webglTexture,O,Fe+$e):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ot.__webglTexture,O),Ze?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Gt.__webglTexture,oe,nt+$e):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Gt.__webglTexture,oe),O===0?Ze?C.copyTexSubImage3D(Me,oe,xe,qe,nt+$e,Re,Oe,he,_e):C.copyTexSubImage2D(Me,oe,xe,qe,Re,Oe,he,_e):C.blitFramebuffer(Re,Oe,he,_e,xe,qe,he,_e,C.COLOR_BUFFER_BIT,C.NEAREST);f.bindFramebuffer(C.READ_FRAMEBUFFER,null),f.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Ze?u.isDataTexture||u.isData3DTexture?C.texSubImage3D(Me,oe,xe,qe,nt,he,_e,Ee,He,pt,Je.data):R.isCompressedArrayTexture?C.compressedTexSubImage3D(Me,oe,xe,qe,nt,he,_e,Ee,He,Je.data):C.texSubImage3D(Me,oe,xe,qe,nt,he,_e,Ee,He,pt,Je):u.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,oe,xe,qe,he,_e,He,pt,Je.data):u.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,oe,xe,qe,Je.width,Je.height,He,Je.data):C.texSubImage2D(C.TEXTURE_2D,oe,xe,qe,he,_e,He,pt,Je);f.pixelStorei(C.UNPACK_ROW_LENGTH,Mt),f.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Tt),f.pixelStorei(C.UNPACK_SKIP_PIXELS,At),f.pixelStorei(C.UNPACK_SKIP_ROWS,Lt),f.pixelStorei(C.UNPACK_SKIP_IMAGES,Bt),oe===0&&R.generateMipmaps&&C.generateMipmap(Me),f.unbindTexture()},this.initRenderTarget=function(u){A.get(u).__webglFramebuffer===void 0&&H.setupRenderTarget(u)},this.initTexture=function(u){u.isCubeTexture?H.setTextureCube(u,0):u.isData3DTexture?H.setTexture3D(u,0):u.isDataArrayTexture||u.isCompressedArrayTexture?H.setTexture2DArray(u,0):H.setTexture2D(u,0),f.unbindTexture()},this.resetState=function(){G=0,X=0,B=null,f.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let a=this.getContext();a.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),a.unpackColorSpace=it._getUnpackColorSpace()}},Dc=class extends Or{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Pa;e.deleteAttribute("uv");let a=new Yi({side:1}),t=new Yi,i=new zn(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let n=new tt(e,a);n.position.set(-.757,13.219,.717),n.scale.set(31.713,28.305,28.591),this.add(n);let r=new kn(e,t,6),o=new Fr;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),r.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),r.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),r.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),r.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),r.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),r.setMatrixAt(5,o.matrix),this.add(r);let s=new tt(e,ta(50));s.position.set(-16.116,14.37,8.208),s.scale.set(.1,2.428,2.739),this.add(s);let S=new tt(e,ta(50));S.position.set(-16.109,18.021,-8.207),S.scale.set(.1,2.425,2.751),this.add(S);let E=new tt(e,ta(17));E.position.set(14.904,12.198,-1.832),E.scale.set(.15,4.265,6.331),this.add(E);let M=new tt(e,ta(43));M.position.set(-.462,8.89,14.52),M.scale.set(4.38,5.441,.088),this.add(M);let N=new tt(e,ta(20));N.position.set(3.235,11.486,-12.541),N.scale.set(2.5,2,.1),this.add(N);let h=new tt(e,ta(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){let e=new Set;this.traverse(a=>{a.isMesh&&(e.add(a.geometry),e.add(a.material))});for(let a of e)a.dispose()}};function ta(e){return new wo({color:0,emissive:16777215,emissiveIntensity:e})}var vt={linear:e=>e,inOutCubic:e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2,outCubic:e=>1-(1-e)**3,outQuart:e=>1-(1-e)**4,inCubic:e=>e*e*e,outBack:e=>1+2.70158*(e-1)**3+1.70158*(e-1)**2,inBack:e=>2.70158*e*e*e-1.70158*e*e},Lc=class{constructor(){this.list=new Set,this.speed=1}add({duration:e=600,delay:a=0,easing:t=vt.inOutCubic,onUpdate:i,onComplete:n,onStart:r}){let o={start:performance.now()+a*this.speed,duration:Math.max(1,e*this.speed),easing:t,onUpdate:i,onComplete:n,onStart:r,started:!1,done:!1,cancel:()=>{o.done=!0,this.list.delete(o)}};return this.list.add(o),o}wait(e){return new Promise(a=>this.add({duration:1,delay:e,onComplete:a}))}get active(){return this.list.size>0}update(e=performance.now()){for(let a of[...this.list]){if(e<a.start)continue;a.started||(a.started=!0,a.onStart?.());let t=Math.min(1,(e-a.start)/a.duration);a.onUpdate?.(a.easing(t),t),t>=1&&(this.list.delete(a),a.done=!0,a.onComplete?.())}}},Yt=Math.PI/180,Tr=90*Yt,ja=3.2,Ka=22,Uc=760,Nc=110,Ic=4.5,Oc=340,aa=e=>Math.atan2(Math.sin(e),Math.cos(e)),ca=(e,a,t)=>Math.min(t,Math.max(a,e)),xr={KeyW:[0,-1],ArrowUp:[0,-1],KeyS:[0,1],ArrowDown:[0,1],KeyA:[-1,0],ArrowLeft:[-1,0],KeyD:[1,0],ArrowRight:[1,0]},Fc=class{constructor(e,{tweens:a,toStage:t,getSize:i,onChange:n,onClick:r,onDragState:o,onGrab:s}){this.el=e,this.tweens=a,this.toStage=t,this.getSize=i,this.onChange=n,this.onClick=r,this.onDragState=o,this.onGrab=s,this.glide=new dt,this.grab=null,this.view={target:new q,azimuth:36*Yt,elevation:43*Yt,zoom:8.4},this.zoomGoal=this.view.zoom,this.zoomAnchor=null,this.velocity=new dt,this.keys=new Set,this.pointers=new Map,this.drag=null,this.anim=null,this.fit=1,this.bounds={minX:-90,maxX:150,minZ:-110,maxZ:90},e.addEventListener("pointerdown",S=>this.down(S)),e.addEventListener("pointermove",S=>this.move(S)),e.addEventListener("pointerup",S=>this.up(S)),e.addEventListener("pointercancel",S=>this.up(S)),e.addEventListener("lostpointercapture",S=>this.up(S)),e.addEventListener("wheel",S=>this.wheel(S),{passive:!1}),e.addEventListener("contextmenu",S=>{this.overUi(S)||S.preventDefault()}),e.addEventListener("auxclick",S=>S.button===1&&S.preventDefault()),window.addEventListener("keydown",S=>this.keydown(S)),window.addEventListener("keyup",S=>this.keys.delete(S.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.grab&&(this.grab.handler.up?.(),this.grab=null,this.onDragState?.(null),this.onChange())})}overUi(e){return!!e.target.closest?.(".callout, .viewbar, .tag, .hotspot, .readout, .minimap, .inspector, .schematic")}down(e){if(this.overUi(e))return;if(e.button===1&&e.preventDefault(),this.glide.set(0,0),e.button===0&&this.pointers.size===0&&!this.grab){let i=this.onGrab?.(e);if(i){this.stopAnimation(),this.el.setPointerCapture(e.pointerId),this.grab={id:e.pointerId,handler:i},this.onDragState?.("part");return}}this.stopAnimation(),this.el.setPointerCapture(e.pointerId);let a=this.toStage(e.clientX,e.clientY);this.pointers.set(e.pointerId,a);let t=e.timeStamp;this.drag={mode:this.pointers.size>1?"touch":e.button===1?"rotate":"pan",start:a,last:a,moved:0,panning:!1,ratchet:0,samples:[{t,x:a.x,y:a.y}],touch:this.touchState()},this.onDragState?.(this.drag.mode)}touchState(){let e=[...this.pointers.values()];return e.length<2?null:{dist:Math.hypot(e[0].x-e[1].x,e[0].y-e[1].y),angle:Math.atan2(e[1].y-e[0].y,e[1].x-e[0].x),mid:{x:(e[0].x+e[1].x)/2,y:(e[0].y+e[1].y)/2},twist:this.drag?.touch?.twist??0}}sample(e,a,t){let i=t??performance.now();for(e.samples.push({t:i,x:a.x,y:a.y});e.samples.length>2&&i-e.samples[0].t>100;)e.samples.shift()}move(e){if(this.grab&&e.pointerId===this.grab.id){this.grab.handler.move?.(e),this.onChange();return}if(!this.drag||!this.pointers.has(e.pointerId))return;if(!e.buttons){this.up(e);return}let a=this.toStage(e.clientX,e.clientY);this.pointers.set(e.pointerId,a);let t=this.drag;if(t.mode==="touch"){let r=this.touchState();r&&t.touch&&(this.zoomAt(r.dist/Math.max(1,t.touch.dist),r.mid),this.zoomGoal=this.view.zoom,this.panBy(r.mid.x-t.touch.mid.x,r.mid.y-t.touch.mid.y),this.sample(t,r.mid,e.timeStamp),r.twist=t.touch.twist+aa(r.angle-t.touch.angle),Math.abs(r.twist)>40*Yt&&(this.turn(r.twist>0?1:-1),r.twist=0)),t.touch=r,t.moved+=10,t.panning=!0,this.onChange();return}let i=a.x-t.last.x,n=a.y-t.last.y;if(t.last=a,t.moved+=Math.abs(i)+Math.abs(n),t.mode==="rotate")t.ratchet+=i,Math.abs(t.ratchet)>Nc&&(this.turn(t.ratchet>0?-1:1),t.ratchet=0);else{if(this.sample(t,a,e.timeStamp),t.panning)this.panBy(i,n);else{if(Math.hypot(a.x-t.start.x,a.y-t.start.y)<4)return;t.panning=!0,this.panBy(a.x-t.start.x,a.y-t.start.y)}this.onChange()}}up(e){if(this.grab&&e.pointerId===this.grab.id){this.grab.handler.up?.(e),this.grab=null,this.onDragState?.(null),this.onChange();return}if(!this.pointers.has(e.pointerId))return;this.pointers.delete(e.pointerId);let a=this.drag;a&&(this.pointers.size===0?(a.panning?this.fling(a,e.timeStamp):a.mode==="pan"&&e.button===0&&this.onClick?.(e),this.drag=null,this.onDragState?.(null)):a.touch=this.touchState())}fling(e,a=performance.now()){let t=e.samples,i=t[t.length-1];if(!i||a-i.t>60)return;let n=t.find(M=>i.t-M.t<=90)??t[0],r=i.t-n.t;if(r<8)return;let o=(i.x-n.x)/r,s=(i.y-n.y)/r,S=Math.hypot(o,s);if(S<.08)return;let E=Math.min(1,Ic/S);this.glide.set(o*E,s*E),this.onChange()}wheel(e){if(this.overUi(e))return;e.preventDefault(),this.stopAnimation();let a=e.deltaMode===1?e.deltaY*16:e.deltaY;this.zoomGoal=ca(this.zoomGoal*Math.exp(-a*.0018),ja,Ka),this.zoomAnchor=this.toStage(e.clientX,e.clientY),this.onChange()}keydown(e){if(e.metaKey||e.ctrlKey||e.altKey)return;let a=document.activeElement;if(!a?.matches?.("input, textarea, select")&&!(e.code.startsWith("Arrow")&&a?.matches?.('[role="tab"], [role="radio"]'))){if(xr[e.code])this.keys.add(e.code),this.stopAnimation(),this.glide.set(0,0),e.preventDefault(),this.onChange();else if(!e.repeat){if(e.code==="KeyQ")this.turn(-1);else if(e.code==="KeyE")this.turn(1);else if(e.key==="+"||e.key==="="||e.code==="PageUp")this.zoomBy(1.3);else if(e.key==="-"||e.key==="_"||e.code==="PageDown")this.zoomBy(1/1.3);else return;e.preventDefault()}}}axes(){let e=this.view.azimuth;return{right:new q(Math.cos(e),0,-Math.sin(e)),away:new q(-Math.sin(e),0,-Math.cos(e))}}panBy(e,a){let{right:t,away:i}=this.axes(),n=this.view.zoom*this.fit,r=Math.sin(this.view.elevation);this.view.target.addScaledVector(t,-e/n).addScaledVector(i,a/(n*r)),this.clampTarget()}clampTarget(){let e=this.view.target,a=this.bounds,t=ca(e.x,a.minX,a.maxX),i=ca(e.z,a.minZ,a.maxZ);(t!==e.x||i!==e.z)&&this.glide.set(0,0),e.x=t,e.z=i}groundAt(e,a){let{cx:t,cy:i}=this.getSize(),{right:n,away:r}=this.axes(),o=this.view.zoom*this.fit,s=Math.sin(this.view.elevation);return this.view.target.clone().addScaledVector(n,(e-t)/o).addScaledVector(r,-(a-i)/(o*s))}zoomAt(e,a){let t=this.view,i=t.zoom,n=ca(i*e,ja,Ka);if(a){let{cx:r,cy:o}=this.getSize(),{right:s,away:S}=this.axes(),E=Math.sin(t.elevation),M=(1/i-1/n)/this.fit;t.target.addScaledVector(s,(a.x-r)*M).addScaledVector(S,-((a.y-o)*M)/E),this.clampTarget()}t.zoom=n}zoomBy(e){this.stopAnimation();let{cx:a,cy:t}=this.getSize();this.zoomGoal=ca(this.zoomGoal*e,ja,Ka),this.zoomAnchor={x:a,y:t},this.onChange()}stopAnimation(){this.anim&&(this.anim.cancel(),this.anim=null,this.zoomGoal=this.view.zoom)}jumpTo(e){this.stopAnimation(),this.velocity.set(0,0),this.glide.set(0,0);let a=this.view;e.target&&a.target.set(...e.target),e.azimuth!==void 0&&(a.azimuth=e.azimuth),e.elevation!==void 0&&(a.elevation=e.elevation),e.zoom!==void 0&&(a.zoom=e.zoom),this.zoomGoal=a.zoom,this.onChange()}animateTo(e,{duration:a=1200,easing:t=vt.inOutCubic}={}){this.stopAnimation(),this.velocity.set(0,0),this.glide.set(0,0);let i=this.view,n={target:i.target.clone(),azimuth:i.azimuth,elevation:i.elevation,zoom:i.zoom},r=e.target?new q().fromArray(e.target.toArray?e.target.toArray():e.target):n.target,o=e.azimuth===void 0?0:aa(e.azimuth-n.azimuth),s=e.elevation??n.elevation,S=e.zoom??n.zoom;return new Promise(E=>{let M=this.tweens.add({duration:a,easing:t,onUpdate:N=>{i.target.lerpVectors(n.target,r,N),i.azimuth=aa(n.azimuth+o*N),i.elevation=n.elevation+(s-n.elevation)*N,i.zoom=Math.exp(Math.log(n.zoom)+(Math.log(S)-Math.log(n.zoom))*N),this.zoomGoal=i.zoom,this.onChange()},onComplete:()=>{this.anim===M&&(this.anim=null),E()}});M.goal=n.azimuth+o,M.to={target:r.toArray(),elevation:s,zoom:S},M.end=performance.now()+a,this.anim=M})}turn(e,a=36*Yt){let t=this.anim?.goal??this.view.azimuth,i=Math.round(aa(t-a)/Tr)+e,n=this.anim?.to??{},r=this.anim?this.anim.end-performance.now():0;return this.animateTo({...n,azimuth:aa(a+i*Tr)},{duration:Math.max(620,r)})}update(e){let a=!1,t=new dt,i=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")?2:1;for(let r of this.keys){let o=xr[r];o&&(t.x+=o[0],t.y+=o[1])}t.lengthSq()&&t.normalize().multiplyScalar(Uc*i);let n=1-Math.exp(-e/70);if(this.velocity.x+=(t.x-this.velocity.x)*n,this.velocity.y+=(t.y-this.velocity.y)*n,this.velocity.lengthSq()>1?(t.lengthSq()&&this.stopAnimation(),this.panBy(-this.velocity.x*e/1e3,-this.velocity.y*e/1e3),a=!0):this.velocity.set(0,0),this.glide.lengthSq()>4e-4&&!this.drag?(this.panBy(this.glide.x*e,this.glide.y*e),this.glide.multiplyScalar(Math.exp(-e/Oc)),a=!0):this.drag||this.glide.set(0,0),!this.anim&&Math.abs(Math.log(this.zoomGoal/this.view.zoom))>1e-4){let r=(this.zoomGoal/this.view.zoom)**(1-Math.exp(-e/75));this.zoomAt(r,this.zoomAnchor),a=!0}return a&&this.onChange(),a}get destination(){let e=this.anim;return e?{target:new q(...e.to.target),azimuth:e.goal,elevation:e.to.elevation,zoom:e.to.zoom}:this.view}isNear(e,a=this.view){let t=new q(...e.target);return Math.abs(aa(a.azimuth-e.azimuth))<3*Yt&&Math.abs(a.elevation-e.elevation)<3*Yt&&Math.abs(Math.log(a.zoom/e.zoom))<.06&&a.target.distanceTo(t)<3}},Ht=Math.PI/180,Vt=new q(64,-4,-50),wt=-4,ie=(e,a)=>wi(e,a).add(Vt),_i=e=>new q(...Xn(e)),br=e=>{let a=ie(e,"e");return a.z=Vt.z,a},de={red:"#d64a3a",navy:"#2f3547",orange:"#f0a53a",yellow:"#f0b53a",green:"#3fae6a",blue:"#3d6fc4",coral:"#ee7f62",purple:"#8a63c9",brown:"#7a5034"},xt={id:"breadboard",build:()=>Wr(),at:Vt};function ce(e,a,t,i,{signal:n,...r}={}){let o=typeof a=="string"?_i(a):a,s=typeof t=="string"?_i(t):t,S=[e,...o.toArray(),...s.toArray(),i].join("|"),E={a:typeof a=="string"?a:null,b:typeof t=="string"?t:null},M=r.flat?()=>Qo(o,s,i,r):()=>Jo(o,s,i,r);return{id:e,key:S,wire:!0,color:i,signal:{...E,...n},build:M}}function wr(e){let a=ie(e+1.5,"b");return a.y+=15.6,{id:"sensor",build:Zo,at:a,rot:[90*Ht,0,0]}}var Aa=.8,on=Vt.z+11.43+12.8,Bc=e=>on+e*Aa,Gc=e=>(e-on)/Aa;function Ar(e){return{id:"obstacle",key:a=>`obstacle|${a.obstacle}`,build:a=>$o(a.obstacle),at:a=>new q(e,wt,Bc(a.gap)),interact:{type:"slide",param:"gap",toParam:a=>Gc(a.z)}}}var ra=ie(20.5,"c"),Hc=ra.clone().setY(ra.y+7),ga=new q(Math.cos(36*Ht),0,-Math.sin(36*Ht)),sn=20,ln=.5,Vc=Math.atan2(ga.x,ga.z),zc=e=>ra.clone().setY(wt).addScaledVector(ga,sn+e*ln),kc=e=>(e.clone().sub(ra).setY(0).dot(ga)-sn)/ln;function vi(e){return e.lamp?Math.round(70+930/(1+(e.dist/14)**2)):70}var Ua=ie(20,"c"),cn=ga,Wc=36*Ht,dn=8,un=.9,fn=e=>dn+e*un,Xc=e=>Ua.clone().setY(wt).addScaledVector(cn,fn(e)-Xr.x),Yc=e=>(e.clone().sub(Ua).setY(0).dot(cn)+Xr.x-dn)/un,pn=new q(Ua.x,wt,Vt.z-29.5),Rr=e=>pn.clone().add(is[e]);function Si(e){return e.dryer?34/(1+((e.dist-3)/12)**2):0}function jc(e,a){let t=Si(a)/34;Ho(e,{on:a.dryer,level:t}),e.userData.dryer.stream.scale.x=Math.max(.6,(fn(a.dist)+6)/30)}var hn=new q(62,wt,-12),Cr=new q(120,wt,-10),Xt=e=>hn.clone().add(e),Ai=new q(95,wt,-5),mn=Ai.clone().add(new q(-8,Bo.soil,8)),qa=e=>mn.clone().add(as[e]),Ei=36*Ht,Kc=Ai.clone().addScaledVector(new q(Math.cos(Ei),0,-Math.sin(Ei)),13-Go),gn=new q(68,wt,-55),_n=-90*Ht,vn=new q(0,1,0),Ri=e=>e.applyAxisAngle(vn,_n).add(gn),da=(e,a)=>Ri(wi(e,a,30)),Za=e=>Ri(ss(1,"minus",e)),Ra=["#e8392e","#f08a2e","#f2c23a","#3fae6a","#1aa3a1","#3d6fc4","#8a63c9","#e36fa5"],qc=["Do (C)","Re (D)","Mi (E)","Fa (F)","Sol (G)","La (A)","Si (B)",Ve("Do (high C)")],yr=e=>29-3*e;function Zc(){let e=[0,_n,0],a=[{id:"breadboard",key:"breadboard|full",build:()=>Wr({cols:30,rails:!0}),at:gn,rot:e}];return a.push({id:"buzzer",build:ni,at:da(3.5,"d"),rot:e}),Ra.forEach((t,i)=>{a.push({id:`key${i}`,build:()=>ts(t,Ve("Key {n}: {note}",{n:i+1,note:qc[i]})),at:Ri(wi(yr(i),"e",30).setZ(0)),rot:e,interact:{type:"press",input:`key${i}`,select:!1}})}),a.push(ce("w-gnd","GND",Za(0),de.navy,{arch:22})),a.push(ce("w-d10","D10",da(2,"a"),de.brown,{arch:20})),a.push(ce("w-bz-gnd",da(5,"a"),Za(4),de.navy,{flat:!0,signal:{net:"GND",dir:-1,follow:"D10",quiet:!0}})),Ra.forEach((t,i)=>{let n=yr(i);a.push(ce(`w-d${2+i}`,`D${2+i}`,da(n+1,"a"),t,{arch:8+i*1.6})),a.push(ce(`w-k${i}-gnd`,da(n-1,"a"),Za(n-2),de.navy,{flat:!0,signal:{net:"GND",dir:-1,follow:`D${2+i}`,quiet:!0}}))}),a}var Sn=34,Ci=ie(13.5,"a").setY(wt).add(new q(0,0,Sn)),En=new q(-16,wt,-60),Mn=36*Ht,$c=e=>e.clone().applyAxisAngle(vn,Mn).add(En),$a=e=>$c(es.leads[e]),Tn=new q(Vt.x+Fo.width/2+16,wt,Ci.z-24),Qc=Ci.clone().sub(Tn).setY(.5);function Qa(e,a="color"){return{id:"led",build:t=>kr(fa[t[a]]??fa.red),apply:(t,i)=>rs(t,fa[i[a]]??fa.red),at:e}}var Pr={board:{parts:[]},blink:{parts:[xt,{id:"resistor",key:e=>`resistor|${e.ohms}`,build:e=>yt(e.ohms),at:ie(12,"b")},Qa(ie(14.5,"c")),ce("w-d13","D13",ie(10,"a"),de.orange,{arch:12}),ce("w-gnd","GND",ie(15,"a"),de.navy,{arch:16})]},button:{parts:[xt,{id:"button",build:()=>Qi(),at:br(9),interact:{type:"press",input:"button"}},{id:"pulldown",build:()=>yt(1e4),at:ie(12,"b")},{id:"resistor",build:()=>yt(220),at:ie(17,"b")},Qa(ie(19.5,"c")),ce("w-5v","5V",ie(8,"a"),de.red,{arch:20}),ce("w-d2","D2",ie(10,"a"),de.blue,{arch:12}),ce("w-gnd","GND",ie(14,"a"),de.navy,{arch:19}),ce("w-d13","D13",ie(15,"a"),de.orange,{arch:17}),ce("w-bridge",ie(14,"e"),ie(20,"e"),de.navy,{arch:4,lean:.3,signal:{net:"GND",dir:-1,follow:"D13"}})]},knob:{parts:[xt,{id:"pot",build:no,at:ie(10,"e"),apply:(e,a)=>{e.userData.knob.rotation.y=-(a.pot/1023*270-135)*Ht},interact:{type:"knob",param:"pot",min:0,max:1023,sweep:270}},{id:"resistor",build:()=>yt(220),at:ie(17,"b")},Qa(ie(19.5,"c")),ce("w-5v","5V",ie(9,"a"),de.red,{arch:20}),ce("w-a0","A0",ie(10,"a"),de.green,{arch:27}),ce("w-gnd-p","GND1",ie(11,"a"),de.navy,{arch:12}),ce("w-d9","D9",ie(15,"a"),de.orange,{arch:12}),ce("w-bridge",ie(11,"b"),ie(20,"e"),de.navy,{arch:4,lean:.3,signal:{net:"GND",dir:-1,follow:"D9"}})]},rgb:{parts:[xt,{id:"rgb",build:()=>Oo(),at:ie(16.5,"d"),apply:(e,a)=>Io(e,a.r,a.g,a.b)},{id:"r-red",build:()=>yt(220),at:ie(13,"b")},{id:"r-green",build:()=>yt(220),at:ie(19,"b")},{id:"r-blue",build:()=>yt(220,4*Ha,{lift:6.4}),at:ie(20,"c")},ce("w-d9","D9",ie(11,"a"),de.coral,{arch:7}),ce("w-d10","D10",ie(21,"a"),de.green,{arch:15}),ce("w-d11","D11",ie(22,"a"),de.blue,{arch:18}),ce("w-gnd","GND",ie(16,"a"),de.navy,{arch:22})]},light:{parts:[xt,{id:"resistor",build:()=>yt(220),at:ie(10,"b")},{id:"led",build:()=>kr(fa.yellow),at:ie(12.5,"c")},{id:"ldr",build:io,at:ra},{id:"pulldown",build:()=>yt(1e4),at:ie(19,"b")},{id:"lamp",build:ro,at:e=>zc(e.dist),rot:[0,Vc,0],apply:(e,a)=>No(e,Hc,{on:a.lamp,level:(vi(a)-70)/930,floorY:ra.y}),interact:{type:"slide",param:"dist",toParam:kc}},ce("w-d9","D9",ie(8,"a"),de.orange,{arch:12}),ce("w-gnd","GND",ie(13,"a"),de.navy,{arch:16}),ce("w-5v","5V",ie(20,"a"),de.red,{arch:20}),ce("w-a0","A0",ie(21,"a"),de.green,{arch:24}),ce("w-gnd-p","GND1",ie(17,"a"),de.navy,{arch:17})]},sensor:{parts:[xt,wr(10),Ar(Vt.x-1.27),ce("w-5v","5V",ie(10,"e"),de.red,{arch:36,leanB:0}),ce("w-gnd-p","GND1",ie(13,"e"),de.navy,{arch:33,leanB:0}),ce("w-d9","D9",ie(11,"e"),de.yellow,{arch:30,leanB:0}),ce("w-d10","D10",ie(12,"e"),de.green,{arch:33,leanB:0})]},sound:{parts:[xt,{id:"buzzer",build:ni,at:ie(12.5,"e")},ce("w-d8","D8",ie(11,"a"),de.orange,{arch:12}),ce("w-gnd","GND",ie(14,"a"),de.navy,{arch:16})]},motor:{parts:[xt,{id:"r1k",build:()=>Ji(["brown","black","red","gold"],4*Ha,{name:Ve("1 kΩ resistor")}),at:ie(11,"b")},{id:"transistor",build:ji,at:ie(14,"c")},{id:"motor",build:ao,at:new q(58,wt,-1)},ce("w-d6","D6",ie(9,"a"),de.orange,{arch:12}),ce("w-gnd","GND",ie(15,"a"),de.navy,{arch:16,leanB:0}),ce("w-m-plus",new q(62.5,18.4,-26.5),"5V",de.red,{arch:12,endA:!1,signal:{follow:"D6"}}),ce("w-m-minus",new q(53.5,18.4,-26.5),ie(14,"a"),de.navy,{arch:6,endA:!1,signal:{follow:"D6",label:Ve("MOTOR −"),dir:1}})]},servo:{parts:[{id:"servo",build:to,at:new q(62,wt,-40)},ce("w-s-gnd",new q(50.6,-.6000000000000001,-41.3),"GND2",de.brown,{arch:10,endA:!1}),ce("w-s-5v",new q(50.6,-.6000000000000001,-40),"5V",de.red,{arch:13,endA:!1}),ce("w-s-sig",new q(50.6,-.6000000000000001,-38.7),"D9",de.orange,{arch:8,endA:!1})]},heat:{parts:[xt,{id:"r1k",build:()=>Ji(["brown","black","red","gold"],4*Ha,{name:Ve("1 kΩ resistor")}),at:ie(11,"b")},{id:"transistor",build:ji,at:ie(14,"c")},{id:"tmp36",build:Qn,at:Ua},{id:"fan",build:Jn,at:pn},{id:"dryer",build:eo,at:e=>Xc(e.dist),rot:[0,Wc,0],apply:jc,interact:{type:"slide",param:"dist",toParam:Yc}},ce("w-d6","D6",ie(9,"a"),de.orange,{arch:12}),ce("w-gnd","GND",ie(15,"a"),de.navy,{arch:16}),ce("w-5v","5V",ie(19,"a"),de.red,{arch:20}),ce("w-a0","A0",ie(20,"a"),de.green,{arch:24}),ce("w-gnd-p","GND1",ie(21,"a"),de.navy,{arch:17}),ce("w-fan-plus",Rr(0),ie(19,"e"),de.red,{arch:5,endA:!1,signal:{follow:"D6",label:Ve("FAN +"),dir:-1}}),ce("w-fan-minus",Rr(1),ie(14,"e"),de.navy,{arch:8,endA:!1,signal:{follow:"D6",label:Ve("FAN −"),dir:1}})]},stepper:{parts:[xt,{id:"button",build:()=>Qi(),at:br(9),interact:{type:"press",input:"button"}},{id:"pulldown",build:()=>yt(1e4),at:ie(12,"b")},{id:"driver",build:$n,at:hn},{id:"stepper",build:()=>Do({facing:36}),at:Cr},{id:"cable",build:()=>Lo(Cr.clone().add(Uo),Xt(kt.socket))},ce("w-5v","5V",ie(8,"a"),de.red,{arch:20}),ce("w-d2","D2",ie(10,"a"),de.blue,{arch:12,leanB:0}),ce("w-gnd","GND",ie(14,"a"),de.navy,{arch:19}),ce("w-in1","D8",Xt(kt.in[0]),de.orange,{arch:8}),ce("w-in2","D9",Xt(kt.in[1]),de.yellow,{arch:10}),ce("w-in3","D10",Xt(kt.in[2]),de.green,{arch:12}),ce("w-in4","D11",Xt(kt.in[3]),de.purple,{arch:14}),ce("w-drv-gnd","GND2",Xt(kt.minus),de.navy,{arch:10}),ce("w-drv-5v",ie(8,"b"),Xt(kt.plus),de.red,{arch:18,leanB:0,signal:{a:"5V"}})]},plant:{parts:[xt,{id:"oled",build:Kn,at:ie(5.5,"g")},{id:"plant",build:qn,at:Ai},{id:"soil",build:Zn,at:mn},{id:"can",build:()=>Po(),at:Kc,rot:[0,Ei,0],interact:{type:"press",input:"water"}},ce("w-s-gnd",qa(0),"GND1",de.navy,{arch:8,endA:!1}),ce("w-s-5v",qa(1),"5V",de.red,{arch:11,endA:!1}),ce("w-s-a0",qa(2),"A0",de.yellow,{arch:6,endA:!1}),ce("w-o-gnd","GND",ie(4,"j"),de.navy,{arch:35,leanB:0}),ce("w-o-vcc","3V3",ie(5,"j"),de.coral,{arch:50,leanB:0}),ce("w-o-scl","SCL",ie(6,"j"),de.blue,{arch:38,leanB:0}),ce("w-o-sda","SDA",ie(7,"j"),de.purple,{arch:41,leanB:0})]},piano:{parts:Zc()},force:{parts:[xt,{id:"fsr",build:()=>Co({reach:Sn}),at:Ci,apply:(e,a)=>e.userData.stack(a.weight?Ro(a.weight):0),interact:{type:"press",input:"press",squeeze:"force",select:"stopped"}},{id:"weights",build:()=>yo({pad:Qc}),at:Tn,apply:(e,a)=>e.userData.place(a.weight),interact:{type:"tap",param:"weight",select:"stopped"}},{id:"pulldown",key:e=>`pulldown|${e.ohms}`,build:e=>yt(e.ohms),at:ie(12,"c")},{id:"buzzer",build:ni,at:ie(2.5,"e")},{id:"meter",build:jn,at:En,rot:[0,Mn,0],apply:(e,a)=>oi(e,{mark:a.bell/1023*180})},ce("w-5v","5V",ie(13,"d"),de.red,{arch:22}),ce("w-a0","A0",ie(14,"d"),de.green,{arch:26}),ce("w-gnd-p","GND1",ie(10,"d"),de.navy,{arch:18}),ce("w-d8","D8",ie(1,"a"),de.purple,{arch:12}),ce("w-gnd","GND",ie(4,"a"),de.navy,{arch:16}),ce("w-s-sig",$a(2),"D9",de.orange,{arch:12,endA:!1}),ce("w-s-5v",$a(1),ie(13,"e"),de.red,{arch:14,endA:!1,signal:{a:"5V"}}),ce("w-s-gnd",$a(0),ie(10,"e"),de.brown,{arch:14,endA:!1,signal:{net:"GND",dir:-1}})]},project:{parts:[xt,wr(8),{id:"lights",build:Yn,at:ie(21.5,"b")},Ar(Vt.x-6.35),ce("w-5v","5V",ie(8,"e"),de.red,{arch:37,leanB:0}),ce("w-gnd-p","GND1",ie(11,"e"),de.navy,{arch:33,leanB:0}),ce("w-d9","D9",ie(9,"e"),de.blue,{arch:30,leanB:0}),ce("w-d10","D10",ie(10,"e"),de.purple,{arch:33,leanB:0}),ce("w-bridge",ie(11,"d"),ie(20,"d"),de.navy,{arch:4,lean:.3,signal:{net:"GND",dir:-1}}),ce("w-d4","D4",ie(21,"e"),de.coral,{arch:26,leanB:0}),ce("w-d3","D3",ie(22,"e"),de.yellow,{arch:30,leanB:0}),ce("w-d2","D2",ie(23,"e"),de.green,{arch:34,leanB:0})]}},Ja={board:{target:[0,0,0],zoom:8.4,frame:[0,-1.7,86.8,62.7],mark:{at:[43.5,-18],along:[0,-1],up:[-1,0],width:32}},blink:{target:[30,0,-24],zoom:6,frame:[-1.8,-6.5,159.9,74.7]},button:{target:[30,0,-24],zoom:6,frame:[-1.8,-6.3,159.9,74.2]},knob:{target:[30,0,-24],zoom:6,frame:[-1.8,-5.2,159.9,72.2]},rgb:{target:[30,0,-24],zoom:6,frame:[-1.8,-7.6,159.9,76.9]},light:{target:[50,0,-32],zoom:5,frame:[-7.9,-5.1,189.6,84.6]},sensor:{target:[30,0,-16],zoom:5.6,frame:[2.9,-4.2,159.9,94.3]},sound:{target:[30,0,-24],zoom:6,frame:[-1.8,-6.5,159.9,74.7]},motor:{target:[30,0,-18],zoom:5.7,frame:[1.7,-4.5,159.9,85.2]},servo:{target:[26,0,-20],zoom:6.4,frame:[-8.5,-2,135.5,75]},project:{target:[30,0,-16],zoom:5.5,frame:[2.9,-5.2,159.9,92.3]},heat:{target:[44,0,-36],zoom:5.4,frame:[0,-5,180,90]},stepper:{target:[52,0,-14],zoom:4.9,frame:[0,-2,200,100]},plant:{target:[40,0,-32],zoom:4.9,frame:[-6,2,180,100]},piano:{target:[32,0,-43],zoom:5.3,frame:[-6,2,180,92]},force:{target:[39,0,-39],zoom:4.7,frame:[6.7,-12,208.5,113.8]}};function Dr(e,a={}){return(Pr[e]??Pr.board).parts.map(t=>({...t,key:typeof t.key=="function"?t.key(a):t.key??t.id,at:typeof t.at=="function"?t.at(a):t.at,build:()=>t.build(a)}))}var Jc=new Ye("#ffb340");function Ft(e,a){e&&(e.emissive.copy(e.userData.baseEmissive??=e.emissive.clone()),a&&e.emissive.copy(Jc),e.emissiveIntensity=a?1.6:.35)}function Rt(e,a){e&&(e.lens.emissiveIntensity=.05+a*(e.gain??1.4),e.glow.material.opacity=a*.85,e.hue&&e.lens.color.copy(e.base).lerp(e.hue,Math.min(1,a*1.3)*.85))}function xn(e,a=.6){let t=new qt(160,160);t.rotateX(-Math.PI/2);let i=new tt(t,new bt({transparent:!0,depthWrite:!1,side:2,uniforms:{color:{value:new Ye(e)},radius:{value:2},opacity:{value:0},spread:{value:a}},vertexShader:`
        varying vec2 vP;
        void main() {
          vP = (uv - 0.5) * ${160 .toFixed(1)};
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 color;
        uniform float radius;
        uniform float opacity;
        uniform float spread;
        varying vec2 vP;
        void main() {
          float d = length(vP);
          float a = abs(atan(vP.x, -vP.y));
          float ring = 1.0 - smoothstep(0.45, 1.0, abs(d - radius));
          float cone = 1.0 - smoothstep(spread - 0.1, spread + 0.08, a);
          float alpha = ring * cone * opacity;
          if (alpha < 0.01) discard;
          gl_FragColor = vec4(color, alpha);
          #include <colorspace_fragment>
        }
      `}));return i.layers.set(1),i}var ed=class{constructor(e,a){this.scene=e,this.sensor=a,this.arcs=[],this.last=0;let t=new qt(1.1,1);t.rotateX(-Math.PI/2),this.tape=new tt(t,new bt({transparent:!0,depthWrite:!1,uniforms:{length:{value:10},color:{value:new Ye("#1aa3a1")}},vertexShader:`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform float length;
          uniform vec3 color;
          varying vec2 vUv;
          void main() {
            float d = fract(vUv.y * length / 3.0);
            if (d > 0.55) discard;
            gl_FragColor = vec4(color, 0.95);
            #include <colorspace_fragment>
          }
        `})),this.tape.layers.set(1),e.add(this.tape)}update(e,a){let t=this.sensor,i=new q(-13,13,0).applyMatrix4(t.matrixWorld),n=new q(13,13,0).applyMatrix4(t.matrixWorld);e-this.last>220&&(this.last=e,this.spawn(i,"#1aa3a1",1,a,e));for(let o of[...this.arcs]){let s=(e-o.born)/o.life;s>=1?(this.scene.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),this.arcs.splice(this.arcs.indexOf(o),1),o.dir>0&&this.spawn(n.clone().setZ(n.z+a),"#f0a53a",-1,a,e)):(o.mesh.material.uniforms.radius.value=2+s*a,o.mesh.position.copy(o.origin),o.mesh.material.uniforms.opacity.value=Math.sin(s*Math.PI)*.9)}let r=a+12;this.tape.scale.set(1,1,r),this.tape.position.set((i.x+n.x)/2,-3.9,i.z-12+r/2),this.tape.material.uniforms.length.value=r}spawn(e,a,t,i,n){let r=xn(a);t<0&&(r.rotation.y=Math.PI),r.position.copy(e),this.scene.add(r),this.arcs.push({mesh:r,origin:e.clone(),dir:t,born:n,life:260+i*12})}dispose(){for(let e of this.arcs)this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose();this.scene.remove(this.tape),this.tape.geometry.dispose(),this.tape.material.dispose()}},ei=class{constructor(e){this.scene=e,this.rings=[]}emit(e,a,t="#1aa3a1"){let i=xn(t,Math.PI+.2);i.position.copy(e),this.scene.add(i),this.rings.push({mesh:i,born:a,life:700})}update(e){for(let a of[...this.rings]){let t=(e-a.born)/a.life;t>=1?(this.scene.remove(a.mesh),a.mesh.geometry.dispose(),a.mesh.material.dispose(),this.rings.splice(this.rings.indexOf(a),1)):(a.mesh.material.uniforms.radius.value=6+t*26,a.mesh.material.uniforms.opacity.value=(1-t)*.9)}return this.rings.length>0}dispose(){for(let e of this.rings)this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose()}};function td(e=220,a="red"){return(5-(ns[a]??2))/e*1e3}var Ma=(e,a)=>Math.min(1,(td(e,a)/13.6)**.55),ad=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];function Lr(e){if(!e)return"rest";let a=Math.round(12*Math.log2(e/440))+57;return`${ad[(a%12+12)%12]}${Math.floor(a/12)}`}var Kt=170,id=class{constructor(e){this.fn=e,this.key=null,this.walk=null}at(e,a=0){let t=e?`${e}#${a}`:null;t!==this.key&&(this.key=t,this.fn?.(e?{text:e,nth:a}:null))}play(e,a,{loop:t=!1,intro:i=[]}={}){this.walk={intro:i,steps:e,loop:t,t0:a},this.update(a)}update(e){let a=this.walk;if(!a)return;let t=S=>S.reduce((E,M)=>E+(M[2]??Kt),0),i=e-a.t0,n=a.intro;i>=t(a.intro)&&(i-=t(a.intro),n=a.steps,a.loop&&(i%=t(a.steps)||1));let r=0;for(;r<n.length-1&&i>=(n[r][2]??Kt);)i-=n[r][2]??Kt,r++;let[o,s=0]=n[r]??[];this.at(typeof o=="function"?o():o,s)}clear(){this.walk=null,this.at(null)}};function rd(e,a){let{scene:t,parts:i,leds:n,out:r,readout:o,params:s,inputs:S,setParam:E}=a,M=performance.now(),N=a.pins??{},h=(l,b,D="out",p)=>{N[l]={v:b,mode:D,text:p}},x=l=>i.get(l)?.group,T=new id(a.trace),k=0,g=(l,b,D=280)=>{l-k<D||(k=l,r(b))};if(e==="builtin"){r("pinMode(13, OUTPUT)");let l=!1;return T.play([["digitalWrite(LED_BUILTIN, HIGH)",0,260],["delay(1000)",0,740]],M,{loop:!0,intro:[["pinMode(LED_BUILTIN",0,600]]}),{update(b){return T.update(b),!l&&(l=!0,h("D13",1),Ft(n.L,!0),r("D13 → HIGH"),!0)},stop(){T.clear(),Ft(n.L,!1)}}}if(e==="blink"){let l=null,b=0,D=M;return{update(p){b+=p-D,D=p;let _=s.on+s.off;b%=_;let v=b<s.on;h("D13",+!!v);let w=x("led")?.userData.light;if(Rt(w,v?Ma(s.ohms,s.color):0),T.update(p),v===l)return!1;l=v;let d=Math.min(Kt,(v?s.on:s.off)*.4);return T.play([[`digitalWrite(LED_PIN, ${v?"HIGH":"LOW"})`,0,d],["delay(",+!v]],p),Ft(n.L,v),r(`D13 → ${v?"HIGH":"LOW"}`),!0},stop(){T.clear(),Rt(x("led")?.userData.light,0),Ft(n.L,!1)}}}if(e==="button"){let l=null,b=!1,D=!1,p=-1,_=null,v=()=>s.mode==="toggle"?[["int now = digitalRead(BUTTON)"],["if (now == HIGH"],["last = now"]]:[["digitalRead(BUTTON)",0,220],["digitalWrite(LED, pressed)",0,220]];return{update(w){let d=!!S.button;h("D2",+!!d,"in"),d!==l&&(l=d,r(`D2 → ${d?Ve("HIGH (pressed)"):"LOW"}`)),s.mode!==_&&(_=s.mode,T.play(v(),w,{loop:!0})),s.mode==="toggle"?d&&!D&&(b=!b,T.play(v(),w,{loop:!0,intro:[["lit = !lit",0,220],["digitalWrite(LED, lit)",0,220],["delay(30)",0,220]]})):b=d,T.update(w),D=d;let m=+!!b;return h("D13",m),Rt(x("led")?.userData.light,m*Ma(220,s.color)),m!==p&&(p=m,Ft(n.L,!!m),!0)},stop(){T.clear(),Rt(x("led")?.userData.light,0),Ft(n.L,!1)}}}if(e==="knob"){let l=-1;return T.play([["analogRead(POT)"],["analogWrite(LED"],["Serial.println(value)"],["delay(50)"]],M,{loop:!0}),{update(b){T.update(b);let D=Math.round(s.pot),p=Math.floor(D/4);h("A0",D/1023,"analog",`${(D/1023*5).toFixed(2)} V`),h("D9",p/255,"pwm"),Rt(x("led")?.userData.light,p/255*Ma(220,s.color));let _=x("pot");return _&&o({text:`${D} → ${p}`,position:_.position.clone().add(new q(0,30,-1.5))}),g(b,`${D}`,300),D!==l&&(l=D,!0)},stop(){T.clear(),Rt(x("led")?.userData.light,0),o(null)}}}if(e==="rgb"){let l="";return T.play([["analogWrite(RED"],["analogWrite(GREEN"],["analogWrite(BLUE"],["delay(100)"]],M,{loop:!0}),{update(b){T.update(b);let D=Math.round(s.r),p=Math.round(s.g),_=Math.round(s.b);h("D9",D/255,"pwm"),h("D10",p/255,"pwm"),h("D11",_/255,"pwm");let v=x("rgb");Rt(v?.userData.light,Math.max(D,p,_)/255),v&&o({text:`R ${D} · G ${p} · B ${_}`,position:v.position.clone().add(new q(0,26,0))});let w=`${D},${p},${_}`;return w!==l&&(l=w,r(`analogWrite(9, ${D})  analogWrite(10, ${p})  analogWrite(11, ${_})`),!0)},stop(){T.clear(),Rt(x("rgb")?.userData.light,0),o(null)}}}if(e==="light"){let l=null,b=0,D=vi(s),p=!1;return T.play([["analogRead(SENSOR)"],["Serial.println(light)"],["if (light <"],[()=>p?"digitalWrite(LED, HIGH)":"digitalWrite(LED, LOW)",0,260],["delay(100)"]],M,{loop:!0}),{update(_){_-b>100&&(b=_,D=Math.max(0,Math.min(1023,vi(s)+Math.round((Math.random()*2-1)*6))),g(_,`${D}`,320));let v=D<s.threshold;p=v,h("A0",D/1023,"analog",`${(D/1023*5).toFixed(2)} V`),h("D9",+!!v),T.update(_);let w=x("ldr");return w&&o({text:`${Ve("light {v}",{v:D})}${v?` · ${Ve("dark")}`:""}`,position:w.position.clone().add(new q(0,22,0))}),v!==l&&(l=v,Rt(x("led")?.userData.light,v?Ma(220,"yellow"):0),r(Ve(v?"{v} < {limit} · dark, night light ON":"{v} ≥ {limit} · bright, night light off",{v:D,limit:s.threshold}))),!0},stop(){T.clear(),Rt(x("led")?.userData.light,0),o(null)}}}if(e==="sensor"||e==="project"){let l=x("sensor");if(!l)return null;let b=new ed(t,l),D=null,p=null,_=0,v=s.gap,w="LOW",d=[["digitalWrite(TRIG, HIGH)"],["delayMicroseconds(10)"],["digitalWrite(TRIG, LOW)"],["pulseIn(ECHO",0,260]],m=()=>["digitalWrite(RED","digitalWrite(YLW","digitalWrite(GRN"][D??2];return T.play(e==="sensor"?[...d,["Serial.println(cm)"],["delay(",0,300]]:[...d,[m,0,340],["delay(60)"]],M,{loop:!0}),{shadows:!0,pinger:b,update(z){if(T.update(z),s.sweep){let G=26+20*Math.sin((z-M)*55e-5-.4);E("gap",Math.round(G*10)/10)}let y=x("obstacle");if(y){if(p!==null)for(let G of y.userData.wheels??[])G.rotation.z+=(y.position.z-p)/3.168;p=y.position.z}if(l.updateMatrixWorld(!0),b.update(z,s.gap*Aa),z-_>(s.interval??60)){_=z;let G=y?.userData.echo??{jitter:0,miss:0};v=Math.random()<G.miss?0:Math.max(2,Math.round(s.gap+(Math.random()*2-1)*G.jitter)),w=v?Ve("ECHO {ms} ms",{ms:(v*58/1e3).toFixed(1)}):Ve("NO ECHO"),e==="sensor"&&r(v?`${v} cm`:Ve("0  (no echo)"))}let I=z-_;h("D9",+(I<70),"pulse",I<70?Ve("PULSE"):"LOW"),h("D10",v&&I>70&&I<70+Math.min(260,s.gap*6)?1:0,"in",w);let Q=new q(l.position.x,-2,l.position.z+13+s.gap*Aa/2);o({text:v?`${v} cm`:Ve("no echo"),position:Q});let U=x("lights")?.userData.lights;if(U){let G=v>s.far?2:+(v>s.near);G!==D&&(D=G,h("D4",+(G===0)),h("D3",+(G===1)),h("D2",+(G===2)),U.forEach((X,B)=>Rt(X,+(B===G))),r(`${v} cm · ${[Ve("RED · stop!"),Ve("YELLOW · slow down"),Ve("GREEN · all clear")][G]}`))}return!0},stop(){T.clear(),b.dispose(),o(null),x("lights")?.userData.lights?.forEach(z=>Rt(z,0))}}}if(e==="sound"){let l=new ei(t),b=-1,D=M,p={hz:0,end:0};return{update(_){let v=Gi[s.melody]??Gi.scale,w=x("buzzer"),d=s.note;if(_>=D&&v.length)if(b=(b+1)%(v.length+1),b===v.length)D=_+1e3,T.play([["delay(1000)"]],_);else{T.play([["tone(BUZZER",0,Math.min(Kt,d*.5)],["delay("]],_);let z=v[b];p={hz:z,end:_+d},a.sound()&&Hi(z,d,s.volume/100),w&&l.emit(w.userData.top.clone().applyMatrix4(w.matrixWorld),_),r(`tone(8, ${z}, ${d})  ${Lr(z)}`),w&&o({text:`♪ ${Lr(z)}`,position:w.position.clone().add(new q(0,22,0))}),D=_+d+50}let m=_<p.end;return h("D8",m?.6:0,"tone",m?`${p.hz} Hz`:"LOW"),l.update(_),T.update(_),!0},stop(){T.clear(),l.dispose(),o(null)}}}if(e==="piano"){let l={low:[262,294,330,349,392,440,494,523],high:[523,587,659,698,784,880,988,1047]},b={solfege:["Do","Re","Mi","Fa","Sol","La","Si","Do"],letters:["C","D","E","F","G","A","B","C"]},D=new ei(t),p=-1,_=0,v={name:null,i:-1,key:-1,release:0,next:0},w=[["int pressed = -1",0,120],["if (digitalRead(KEYS[i]) == LOW)",0,420],["if (pressed != playing)",0,160]];return T.play(w,M,{loop:!0,intro:[["pinMode(KEYS[i], INPUT_PULLUP)",0,500]]}),s.tune==="off"&&r(Ve("Press and hold a key to play it.")),{update(d,m){let z=Pn[s.tune];if(s.tune!==v.name&&Object.assign(v,{name:s.tune,i:-1,key:-1,next:d+400}),z){if(v.key>=0&&d>=v.release&&(v.key=-1),d>=v.next)if(v.i=(v.i+1)%(z.length+1),v.i===z.length)v.key=-1,v.next=d+1400;else{let[X,B]=z[v.i];v.key=X,v.release=d+B*330*.8,v.next=d+B*330}}else v.key=-1;let y=-1;for(let X=0;X<8;X++){let B=!!S[`key${X}`],$=B||v.key===X;h(`D${2+X}`,+!$,"pullup"),$&&(y=X);let Y=x(`key${X}`),K=Y?.userData.cap;if(K&&!B){let J=Y.userData.capY-($?1.1:0);K.position.y+=(J-K.position.y)*Math.min(1,m/40)}}let I=b[s.names]??b.solfege,Q=l[s.octave]??l.low;if(y!==p)if(p=y,p>=0){r(I[p]);let X=x(`key${p}`);X&&a.float?.({text:`♪ ${I[p]}`,color:Ra[p],position:X.position.clone().add(new q(0,12,0))}),T.play(w,d,{loop:!0,intro:[["playing = pressed",0,140],["tone(BUZZER, NOTES[playing])",0,320],["Serial.println(NAMES[playing])",0,200]]})}else T.play(w,d,{loop:!0,intro:[["playing = pressed",0,140],["noTone(BUZZER)",0,300]]});let U=p>=0?Q[p]:0;U&&a.sound()?Dn(U,.5):Vi(),h("D10",U?.6:0,"tone",U?`${U} Hz`:"LOW");let G=x("buzzer");return G&&U&&d-_>240&&(_=d,D.emit(G.userData.top.clone().applyMatrix4(G.matrixWorld),d,Ra[p])),D.update(d),o(G&&U?{text:`♪ ${I[p]} · ${U} Hz`,position:G.position.clone().add(new q(0,24,0))}:null),T.update(d),!0},stop(){Vi(),T.clear(),D.dispose(),o(null);for(let d=0;d<8;d++){let m=x(`key${d}`);m?.userData.cap&&!S[`key${d}`]&&(m.userData.cap.position.y=m.userData.capY)}}}}if(e==="motor"){let l=x("motor")?.userData.prop,b=0,D=-1;return{shadows:!0,update(p,_){let v=Math.max(1,s.step),w=Math.floor(s.top/v),d=w*v,m=(w+1)*40,z=(p-M)%(m+3e3),y=0;z<m?y=Math.min(w,Math.floor(z/40))*v:z<m+1500&&(y=d),z<m?T.at(Math.floor(z/Kt)%2?"delay(40)":"analogWrite(MOTOR, s)"):z<m+1500?T.at("delay(1500)",0):z<m+1500+340?T.at("analogWrite(MOTOR, 0)"):T.at("delay(1500)",1),h("D6",y/255,"pwm");let I=y/255*26;return b+=(I-b)*Math.min(1,_/(y?380:900)),l&&(l.rotation.z+=b*_/1e3),y!==D&&(y===d||y===0||Math.floor(y/50)!==Math.floor(D/50))&&r(`analogWrite(6, ${y})`),D=y,o({text:`${Math.round(b/26*100)}%`,position:x("motor").position.clone().add(new q(0,38,9))}),!0},stop(){T.clear(),o(null)}}}if(e==="heat"){let l=x("fan"),b=22+Si(s)*.5,D=b,p=0,_=0,v=-1/0;return T.play([["int raw = analogRead"],["float volts"],["float tempC"],["Serial.println(tempC)"],[()=>s.fan==="ramp"?"analogWrite(FAN, constrain":p?"analogWrite(FAN, 255)":"analogWrite(FAN, 0)",0,260],["delay(200)",0,300]],M,{loop:!0}),{shadows:!1,update(w,d){T.update(w);let m=x("dryer");m&&s.dryer&&oo(m,w);let z=22+Si(s)-_/26*9;if(b+=(z-b)*(1-Math.exp(-d/2200)),w-v>=200){v=w,D=b+(Math.random()*2-1)*.15;let U=D-s.threshold;p=s.fan==="ramp"?Math.max(0,Math.min(255,Math.trunc(U*32))):U>0?255:0,r(`${D.toFixed(1)} °C${p?`  ·  ${Ve("fan {p}%",{p:Math.round(p/2.55)})}`:""}`)}let y=.5+D/100;h("A0",y/5,"analog",`${y.toFixed(2)} V`),h("D6",p/255,"pwm"),_+=(p/255*26-_)*Math.min(1,d/(p?420:1100));let I=l?.userData.prop;I&&(I.rotation.z+=_*d/1e3);let Q=x("tmp36");return Q&&o({text:`${D.toFixed(1)} °C`,position:Q.position.clone().add(new q(0,21,0))}),!0},stop(){T.clear(),o(null)}}}if(e==="stepper"){let l=2048,b=Math.PI*2/l,D=Math.PI*2/8,p=[[1,1,0,0],[0,1,1,0],[0,0,1,1],[1,0,0,1]],_=["D8","D9","D10","D11"],v=x("stepper"),w=v?.userData.wheel,d=v?.userData.flapper,m=x("driver"),z=d?.rotation.y??0,y=w?(Math.round(-w.rotation.y/D)%8+8)%8:0;w&&(w.rotation.y=-y*D);let I=null,Q=0,U=null,G=!1,X=()=>T.play([["if (digitalRead(BUTTON) == HIGH)",0,400]],performance.now(),{loop:!0});X(),r(Ve("Press the button to spin the wheel!"));let B=()=>{m&&Ki(m,[0,0,0,0]),_.forEach($=>h($,0,"pulse","LOW"))};return B(),{shadows:!1,update($,Y){let K=!!S.button;if(h("D2",+!!K,"in"),K&&!I&&w){let J=Math.floor(Math.random()*8),Ne=s.dir==="ccw"?-1:1,be=Ne>0?(J-y+8)%8:(y-J+8)%8,Ge=(s.turns*8+be)*(l/8);I={done:0,speed:0,total:Ge,prize:J,sign:Ne,from:w.rotation.y},r(Ve("Spinning to {prize}: {n} steps",{prize:Ba[J],n:Ge})),T.play([["int prize = random",0,200],["int ahead",0,200],["long steps",0,200],["wheel.move(",0,200],["wheel.runToPosition()",0,1e9]],$)}if(I){let J=s.speed*l/60,Ne=Math.max(1,s.accel),be=I.total-I.done,Ge=Y/1e3;I.speed=Math.min(J,I.speed+Ne*Ge,Math.max(Math.sqrt(2*Ne*be),Ne*Ge)),I.done=Math.min(I.total,I.done+I.speed*Ge);let Ie=Math.floor(I.done);w.rotation.y=I.from-I.sign*Ie*b;let W=p[(Ie*I.sign%4+4)%4];m&&Ki(m,W),_.forEach(le=>h(le,.5,"pulse",Ve("STEPS")));let re=Math.floor(-w.rotation.y/D+.5);U!==null&&re!==U&&(Q=1),U=re,v&&o({text:Ve("step {n} / {total}",{n:Ie,total:I.total}),position:v.position.clone().add(new q(0,52,0))}),I.done>=I.total&&(y=I.prize,I=null,B(),r(`Landed on ${Ba[y].replace("×","x")}`),v&&o({text:`${Ba[y]}!`,position:v.position.clone().add(new q(0,52,0))}),T.play([["Serial.println(PRIZES[at])",0,700]],$),setTimeout(()=>!I&&!G&&X(),700))}return d&&(Q*=Math.exp(-Y/90),d.rotation.y=z+Q*.45),T.update($),!0},stop(){G=!0,T.clear(),o(null),B(),d&&(d.rotation.y=z)}}}if(e==="plant"){let l=x("plant"),b=x("oled"),D=l?.userData.plant,p=D?.wet??.42,_=D?.wilt??0,v={shade:.0045,window:.009,sun:.018},w=0,d=0,m="",z=-1/0,y=!1,I=(U,G,X,B,$)=>Math.trunc((U-G)*($-B)/(X-G))+B,Q={thirsty:"Water me!",soggy:"Too wet!",happy:"Happy :)"};return T.play([["int raw = analogRead"],["int moisture = map"],["Serial.println(moisture)"],["screen.print(moisture)"],["screen.fillRect"],[()=>`screen.print("${m}")`,0,220],["screen.display()"],["delay(500)",0,260]],M,{loop:!0,intro:[["screen.begin",0,300]]}),{get shadows(){return y},update(U,G){T.update(U);let X=x("can"),B=(X?.userData.hold?.t??0)>.96;B&&so(X,U),p+=((B?.12:0)-(v[s.sun]??v.window)*+(p>.02))*(G/1e3),p=Math.min(1,Math.max(0,p)),U-z>=500&&(z=U,w=Math.round(515-245*p+(Math.random()*2-1)*2),d=Math.min(100,Math.max(0,I(w,s.dry,s.wet,0,100))),m=d<s.thirsty?Q.thirsty:d>s.soggy?Q.soggy:Q.happy,r(String(d)),b&&qi(b,{pct:d,message:m})),h("A0",w/1023,"analog",`${(w*5/1023).toFixed(2)} V`),h("SDA",.5,"pulse",Ve("I²C DATA")),h("SCL",.5,"pulse",Ve("I²C CLOCK"));let $=Math.min(1,Math.max(0,(.3-p)/.22)),Y=_;_+=($-_)*(1-Math.exp(-G/900)),y=Math.abs(_-Y)>2e-4,l&&lo(l,{wet:p,wilt:_});let K=x("soil");return K&&o({text:`A0 = ${w}`,position:K.position.clone().add(new q(0,36,0))}),!0},stop(){T.clear(),o(null),b&&qi(b,null)}}}if(e==="force"){let l=x("fsr"),b=x("weights"),D=x("meter"),p=x("buzzer"),_=new ei(t),v=[[20,3e4],[100,6e3],[1e3,1e3],[1e4,250]],w=$=>{if($<=0)return 1e7;if($<20)return Math.min(1e7,3e4*(20/$)**3);let Y=v.findIndex(([Ge])=>Ge>=$);if(Y<0)return 250;if(Y===0)return v[0][1];let[[K,J],[Ne,be]]=[v[Y-1],v[Y]];return J*(be/J)**(Math.log($/K)/Math.log(Ne/K))},d=$=>$>0?20*500**$:0,m=0,z=0,y=M,I=!1,Q=0,U=0,G=-1/0,X=0,B=[["int force = analogRead(FSR)",0,140],["if (force >= best",0,140],["needle.write(map(best",0,160],["if (best >",0,120],["delay(20)",0,120]];return T.play(B,M,{loop:!0,intro:[["needle.attach(9)",0,400]]}),{update($,Y){if($-G>=20){G=$;let be=(b?.userData.load?.()??0)+d(l?.userData.force?.()??0),Ge=s.ohms;m=be>0?Math.round(1023*Ge/(Ge+w(be))+(Math.random()*2-1)*2):0,m=Math.max(0,Math.min(1023,m)),(m>=z||$-y>s.hold)&&(z=m,y=$),z>s.bell&&!I?(I=!0,Q=$+400,a.sound()&&Hi(1568,400),D&&(co(D,$),a.float?.({text:Ve("Ding!"),color:"#d9a32e",position:D.userData.bell.top.clone().applyMatrix4(D.matrixWorld)})),T.play(B,$,{loop:!0,intro:[["tone(BELL, 1568, 400)",0,420]]})):z<s.bell-100&&(I=!1),m>10&&g($,`${m}  ${Math.trunc(Ge*(1023-m)/m)} ohms`,250)}let K=Math.trunc(z*180/1023),J=.6*Y;X+=Math.max(-J,Math.min(J,K-X)),D&&(oi(D,{angle:X}),Zi(D,$));let Ne=$<Q;return Ne&&p&&$-U>180&&(U=$,_.emit(p.userData.top.clone().applyMatrix4(p.matrixWorld),$,"#e0ad3a")),_.update($),h("A0",m/1023,"analog",`${(m*5/1023).toFixed(2)} V`),h("D9",.5,"servo",`${(.5+Math.round(X)/180*1.9).toFixed(1)} ms`),h("D8",Ne?.6:0,"tone",Ne?"1568 Hz":"LOW"),l&&o({text:`A0 = ${m}`,position:l.position.clone().add(new q(-14,20,-4))}),T.update($),!0},stop(){T.clear(),_.dispose(),o(null),D&&(oi(D,{angle:0}),Zi(D,-1e9))}}}if(e==="servo"){let l=x("servo")?.userData.horn,b=s.from,D=1,p=0,_=null;return{update(v,w){let d=Math.min(s.from,s.to),m=Math.max(s.from,s.to);p+=w;let z=Math.max(1,s.wait);for(;p>=z;)p-=z,b+=D,b>=m?(b=m,D=-1):b<=d&&(b=d,D=1);l&&(l.rotation.y=(90-b)*(Math.PI/180)),T.at(Math.floor(v/Kt)%2?"delay(":"arm.write(a)",D>0?0:1);let y=Math.round(b);h("D9",.5,"servo",`${(.5+y/180*1.9).toFixed(1)} ms`);let I=Math.floor(y/15);I!==_&&r(`arm.write(${y})`),_=I;let Q=x("servo");return Q&&o({text:`${y}°`,position:Q.position.clone().add(new q(5.6,40,0))}),!0},stop(){T.clear(),o(null)}}}return null}function nd(e){for(let a of Object.values(e))a.userData.baseEmissive&&Ft(a,!1)}function od(e,a=1100){let t=performance.now();return{update(i){let n=i-t;if(this.finished)return!1;let r=n>a;return Ft(e.TX,!r&&Math.sin(n*.09)>.2),Ft(e.RX,!r&&Math.sin(n*.13+1)>.4),r&&(this.finished=!0),!0}}}var Mi=7,ti=1;function sd(e,a){let t=[],i=0,n=!1;for(let r of e){let o=r.spec.signal??{},s=o.a??o.b??null,S=o.a?1:-1,E;if(o.net==="GND"||/^GND/.test(s??""))E={kind:"gnd",text:"GND",flow:0,dir:o.dir??-S,level:!1};else if(o.follow){let M=Oa(o.follow,a)?.flow??0,N=Fa.has(s)?"power":"motor";E={kind:N,text:o.label??(Fa.has(s)?"5 V":o.follow),flow:M,dir:o.dir??S,level:M>.02},N==="power"&&(n=!0),i=Math.max(i,M)}else if(s&&(Fa.has(s)||a[s])){let M=Oa(s,a);E={kind:M.kind,text:M.text,flow:M.flow,dir:M.into?-S:S,level:M.kind==="power"||M.flow>.02},M.kind==="power"?n=!0:M.into||(i=Math.max(i,M.flow))}else E={kind:"low",text:s??"",flow:0,dir:S,level:!1};o.quiet&&(E.text=""),t.push({id:r.id,pin:s,color:r.spec.color,...E})}for(let r of t){if(r.kind!=="gnd")continue;let o=e.find(s=>s.id===r.id).spec.signal?.follow;r.flow=o?Oa(o,a)?.flow??0:Math.max(i,n?.3:0),r.level=r.flow>.02}return t}function ld(){return new bt({transparent:!0,depthWrite:!1,uniforms:{offset:{value:0},length:{value:100},opacity:{value:0},core:{value:new Ye("#fff6d6")},rim:{value:new Ye("#18213d")}},vertexShader:`
      varying float vU;
      void main() {
        vU = uv.x;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float offset;
      uniform float length;
      uniform float opacity;
      uniform vec3 core;
      uniform vec3 rim;
      varying float vU;
      void main() {
        float mm = vU * length;
        // no beads inside the first and last few mm (into the plugs)
        if (mm < 2.0 || mm > length - 2.0) discard;
        float d = abs(fract(mm / ${Mi.toFixed(1)} - offset) - 0.5) * ${Mi.toFixed(1)};
        if (d > ${ti.toFixed(2)}) discard;
        // a light bead with a dark rim, so it shows on every wire colour
        vec3 col = mix(core, rim, smoothstep(${(ti*.55).toFixed(2)}, ${(ti*.8).toFixed(2)}, d));
        gl_FragColor = vec4(col, opacity);
        #include <colorspace_fragment>
      }
    `})}var cd=class{constructor(e){this.scene=e,this.beads=new Map}update(e,a,t){let i=new Set,n=!1;for(let r of e){let o=a.find(x=>x.id===r.id);if(!o)continue;i.add(r.id);let s=this.beads.get(r.id);if(!s||s.group!==o.group){if(s&&this.drop(r.id),s=this.make(o.group),!s)continue;this.beads.set(r.id,s)}let S=s.mesh.material.uniforms,{tube:E,count:M}=o.group.userData.wire,N=+(E.geometry.drawRange.count>=M&&r.flow>.02);S.opacity.value+=(N-S.opacity.value)*Math.min(1,t/160);let h=6+34*r.flow;S.offset.value=(S.offset.value+r.dir*h*t/1e3/Mi)%1,s.mesh.visible=S.opacity.value>.01,s.mesh.visible&&(n=!0)}for(let r of[...this.beads.keys()])i.has(r)||this.drop(r);return n}make(e){let a=e.userData.wire?.tube,t=a?.geometry.parameters.path;if(!t)return null;let i=new tt(new Wn(t,96,.98,10,!1),ld());return i.material.uniforms.length.value=t.getLength(),i.layers.set(1),i.renderOrder=2,i.visible=!1,a.add(i),{group:e,mesh:i}}drop(e){let a=this.beads.get(e);a&&(a.mesh.removeFromParent(),a.mesh.geometry.dispose(),a.mesh.material.dispose(),this.beads.delete(e))}clear(){for(let e of[...this.beads.keys()])this.drop(e)}},dd="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.59-6.64 7.59H.47l8.6-9.83L0 1.15h7.6l5.24 6.93zm-1.29 19.5h2.04L6.49 3.24H4.3z",ud="#bba78a",Ur="x.com/DilumSanjaya",fd=900,pd=.8;function hd(){let e=document.createElement("canvas"),a=e.getContext("2d"),t='700 84px "Barlow Semi Condensed", sans-serif';a.font=t,a.letterSpacing="3px";let i=a.measureText(Ur).width;e.width=Math.ceil(159+i+20),e.height=140,a.fillStyle=ud,a.save(),a.translate(20,28),a.scale(84/24,84/24),a.fill(new Path2D(dd)),a.restore(),a.fillRect(130,24,3,92),a.font=t,a.letterSpacing="3px",a.textBaseline="middle",a.fillText(Ur,159,74);let n=new Ao(e);return n.colorSpace=Ti,n.anisotropy=8,{tex:n,aspect:140/e.width}}var md=class{constructor(){let{tex:e,aspect:a}=hd();this.aspect=a,this.mesh=new tt(new qt(1,1),new bi({map:e,transparent:!0,opacity:0,depthWrite:!1,side:2})),this.mesh.layers.set(1),this.mesh.renderOrder=-1.5,this.mesh.visible=!1,this.shown=0}get active(){return this.mesh.visible}place(e,a,t,i){let n=this.mesh;n.position.copy(e),n.quaternion.setFromRotationMatrix(new Zt().makeBasis(a,t,new q().crossVectors(a,t))),n.scale.set(i,i*this.aspect,1)}show(e){this.shown=e,this.mesh.visible=!0}hide(){this.mesh.visible=!1,this.mesh.material.opacity=0}update(e){if(!this.mesh.visible)return!1;let a=Math.max(0,Math.min(1,(e-this.shown)/fd)),t=pd*a*a*(3-2*a);return t!==this.mesh.material.opacity&&(this.mesh.material.opacity=t,!0)}},ai=1,ii=-4,Ca=Math.PI/180,Nr=500,Ct={azimuth:36*Ca,elevation:43*Ca},gd=1100,_d=new ma;function jt(e,a=new ma,{loose:t=!1}={}){a.makeEmpty(),e.updateWorldMatrix(!0,!0);let i=n=>{if(n===e||!n.userData.loose||t){n.isMesh&&n.layers.isEnabled(0)&&(n.geometry.boundingBox||n.geometry.computeBoundingBox(),a.union(_d.copy(n.geometry.boundingBox).applyMatrix4(n.matrixWorld)));for(let r of n.children)i(r)}};return i(e),a}var vd=6,Sd=new q;function Ed(e,a=new ma){let t=e.scale.clone();return e.scale.set(1,1,1),jt(e,a),e.scale.copy(t),e.updateWorldMatrix(!0,!0),a}function Md(){return new bt({transparent:!0,depthWrite:!1,uniforms:{color:{value:new Ye("#d9c7ae")},cell:{value:9},center:{value:new dt},inner:{value:38},outer:{value:84},strength:{value:.9}},vertexShader:`
      varying vec2 vPos;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vPos = wp.xz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      uniform vec3 color;
      uniform float cell;
      uniform vec2 center;
      uniform float inner;
      uniform float outer;
      uniform float strength;
      varying vec2 vPos;
      void main() {
        vec2 g = abs(fract(vPos / cell - 0.5) - 0.5) / fwidth(vPos / cell);
        float line = 1.0 - min(min(g.x, g.y), 1.0);
        vec2 q = (vPos - center) / vec2(1.25, 1.0);
        float fade = 1.0 - smoothstep(inner, outer, length(q));
        float a = line * fade * strength;
        gl_FragColor = vec4(color, a);
        #include <colorspace_fragment>
      }
    `})}function Td(e){let a=[...e].sort((r,o)=>r[0]-o[0]||r[1]-o[1]),t=(r,o,s)=>(o[0]-r[0])*(s[1]-r[1])-(o[1]-r[1])*(s[0]-r[0]),i=[];for(let r of a){for(;i.length>=2&&t(i[i.length-2],i[i.length-1],r)<=0;)i.pop();i.push(r)}let n=[];for(let r=a.length-1;r>=0;r--){let o=a[r];for(;n.length>=2&&t(n[n.length-2],n[n.length-1],o)<=0;)n.pop();n.push(o)}return i.slice(0,-1).concat(n.slice(0,-1))}function Ir(e,a,t=0){for(let i of[e,a])for(let n=0;n<i.length;n++){let[r,o]=i[n],[s,S]=i[(n+1)%i.length],E=S-o,M=r-s,N=Math.hypot(E,M)||1,h=1/0,x=-1/0,T=1/0,k=-1/0;for(let[g,l]of e){let b=(g*E+l*M)/N;h=Math.min(h,b),x=Math.max(x,b)}for(let[g,l]of a){let b=(g*E+l*M)/N;T=Math.min(T,b),k=Math.max(k,b)}if(x+t<T||k+t<h)return!1}return!0}var Ad=class{constructor(e,a,t={}){this.canvas=e,this.el=a,this.hooks=t,this.renderer=new Pc({canvas:e,antialias:!1,alpha:!0,premultipliedAlpha:!0,powerPreference:"high-performance"}),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=Ti,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=3,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0,this.scene=new Or,this.camera=new xi(-1,1,1,-1,1,900),this.composer=new Ln(this.renderer,{lineColor:"#141a2c",thickness:1.3});let i=new hi(this.renderer);this.scene.environment=i.fromScene(new Dc,.04).texture,this.scene.environmentIntensity=.4,i.dispose(),this.setupLights(),this.setupGround(),this.mark=new md,this.scene.add(this.mark.mesh),this.markAz=null,this.markToken=0,this.markCheck=0;let{root:n,anchors:r,leds:o}=Un(this.renderer);this.board=n,this.boardAnchors=r,this.leds=o,this.scene.add(n),this.tweens=new Lc,this.size={w:1,h:1,cx:0,cy:0},this.floats=[],this.parts=new Map,this.pins=new Map,this.tmp=new q,this.raycaster=new Nn,this.raycaster.layers.set(0),this.ndc=new dt,this.hovered=null,this.pointer=null,this.dirty=!0,this.shadowDirty=!0,this.autoRotate=!1,this.lastInput=performance.now(),this.sim=null,this.flicker=null,this.readoutState=null,this.flow=new cd(this.scene),this.flowOn=!0,this.signals=null,this.lessonId="board",this.values={},this.inputs={},this.selection=null,this.controls=new Fc(a,{tweens:this.tweens,toStage:t.toStage,getSize:()=>this.size,onChange:()=>this.touch(),onClick:s=>this.click(s),onDragState:s=>{this.dragging=s,a.dataset.drag=s??"",s&&this.setHovered(null)},onGrab:s=>this.grab(s)}),this.setupSelectionRing(),this.controls.view.azimuth=Ct.azimuth,this.controls.view.elevation=Ct.elevation,a.addEventListener("pointermove",s=>{this.pointer={x:s.clientX,y:s.clientY,target:s.target}}),a.addEventListener("pointerleave",()=>{this.pointer=null,this.setHovered(null)}),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}setupLights(){this.scene.add(new In("#fffaf3","#c2ae90",.5));let e=new zi("#fff6ea",1.2);e.position.set(-55,100,62),this.scene.add(e);let a=new zi("#ffffff",.001);a.position.set(70,104,-34),a.target.position.set(30,0,0),a.castShadow=!0,a.shadow.mapSize.set(2048,2048);let t=a.shadow.camera;t.left=-120,t.right=120,t.top=120,t.bottom=-120,t.near=20,t.far=300,a.shadow.radius=11,a.shadow.blurSamples=20,a.shadow.bias=-4e-4,this.scene.add(a),this.scene.add(a.target)}setupGround(){let e=new tt(new qt(900,900),new On({color:"#7a5532",opacity:.32,depthWrite:!1}));e.rotation.x=-Math.PI/2,e.position.y=ii,e.receiveShadow=!0,e.layers.set(ai),e.renderOrder=-1,this.scene.add(e),this.grid=new tt(new qt(900,900),Md()),this.grid.rotation.x=-Math.PI/2,this.grid.position.y=-4.01,this.grid.layers.set(ai),this.grid.renderOrder=-2,this.scene.add(this.grid)}get view(){return this.controls.view}homeView(e=this.lessonId){let a=Ja[e]??Ja.board,t={target:a.target,zoom:a.zoom,azimuth:Ct.azimuth,elevation:Ct.elevation};if(!this.frame||!a.frame)return t;let[i,n,r,o]=a.frame,s=this.controls.fit,S=Math.min(22,Math.max(3.2,Math.min(this.frame.w/r,this.frame.h/o)/s)),E=new q(Math.cos(Ct.azimuth),0,-Math.sin(Ct.azimuth)),M=new q(-Math.sin(Ct.azimuth),0,-Math.cos(Ct.azimuth)),N=new q(...a.target).addScaledVector(E,i).addScaledVector(M,-n/Math.sin(Ct.elevation));return{...t,target:N.toArray(),zoom:S}}isHome(){return this.controls.isNear(this.homeView())}headingHome(){return this.controls.isNear(this.homeView(),this.controls.destination)}resetView(e=1100){return this.controls.animateTo(this.homeView(),{duration:e})}touch(){this.dirty=!0,this.lastInput=performance.now()}resize(e,a,t,i,n,r=1,o=null,{hold:s=!1}={}){s&&this.size&&(t!==this.size.cx||i!==this.size.cy)&&(this.view.target.copy(this.controls.groundAt(t,i)),this.controls.clampTarget());let S=this.size.w===e&&this.size.h===a&&this.renderer.getPixelRatio()===n;this.size={w:e,h:a,cx:t,cy:i},this.controls.fit=r,this.frame=o,this.markCheck=performance.now()+300,this.markForce=!0,S||(this.renderer.setPixelRatio(n),this.renderer.setSize(e,a,!1),this.composer.setSize(e,a,n)),this.dirty=!0,this.render()}placeCamera(){let{target:e,azimuth:a,elevation:t}=this.view,i=this.view.zoom*this.controls.fit,{w:n,h:r,cx:o,cy:s}=this.size,S=this.camera;S.left=-o/i,S.right=(n-o)/i,S.top=s/i,S.bottom=-(r-s)/i,S.updateProjectionMatrix(),S.position.set(e.x+Math.sin(a)*Math.cos(t)*320,e.y+Math.sin(t)*320,e.z+Math.cos(a)*Math.cos(t)*320),S.lookAt(e),S.updateMatrixWorld();let E=this.grid.material.uniforms;E.center.value.set(e.x,e.z);let M=8.4/i;E.inner.value=38*M,E.outer.value=84*M}anchor(e){if(e.startsWith("part:"))return this.parts.get(e.slice(5))?.group.userData.anchor??null;if(e.startsWith("pin:")){let a=e.slice(4);if(!this.pins.has(a)){let t=new Fr;t.position.copy(_i(a)),this.scene.add(t),this.pins.set(a,t)}return this.pins.get(a)}return this.boardAnchors[e]??null}project(e){return e.getWorldPosition(this.tmp),this.projectPoint(this.tmp)}projectPoint(e){let a=this.tmp.copy(e).project(this.camera);return[(a.x*.5+.5)*this.size.w,(-a.y*.5+.5)*this.size.h]}partKey(e){return e.key??e.id}setLesson(e,{instant:a=!1,values:t={}}={}){this.stopSim(),this.select(null),this.mark.hide(),this.markAz=null,this.setHovered(null),this.hooks.onHover?.(null,null),this.lessonId=e,this.values=t,this.inputs={};let i=Dr(e,t),n=new Map(i.map(M=>[M.id,M])),r=+!a;for(let[M,N]of[...this.parts]){let h=n.get(M);(!h||this.partKey(h)!==this.partKey(N.spec))&&(this.parts.delete(M),this.exitPart(N,r))}let o=0,s=0,S=0;for(let M of i){let N=this.parts.get(M.id);if(N){this.movePart(N,M,r);continue}let h=this.buildPart(M),x=M.wire?650+s++*140:220+o++*130;S=Math.max(S,x+(M.wire?700:750)),this.enterPart(h,x*r,r)}this.shadowDirty=!0,this.dirty=!0;let E=++this.markToken;return a?(this.controls.jumpTo(this.homeView()),this.tweens.update(performance.now()+1e6),this.markCheck=performance.now()+Nr,this.markForce=!0,Promise.resolve()):(this.controls.animateTo(this.homeView(),{duration:1300}),this.tweens.wait(Math.max(S,1300)).then(()=>{E===this.markToken&&this.placeMark()}))}buildPart(e){let a=e.build();e.at&&a.position.copy(e.at),e.rot&&a.rotation.set(...e.rot),a.userData.baseY=a.position.y,a.traverse(i=>{i.isMesh&&(i.castShadow=!0)}),e.apply?.(a,this.values);let t={group:a,spec:e};return this.parts.set(e.id,t),this.scene.add(a),t}updateParams(e){this.values=e;for(let a of Dr(this.lessonId,e)){let t=this.parts.get(a.id);if(!t)continue;if(a.key!==t.spec.key){this.exitPart(t,.55);let n=this.buildPart(a);this.enterPart(n,120,.7,{drop:14}),this.selection?.id===a.id&&(this.selection.group=n.group);continue}t.spec=a;let i=t.group;a.at&&!t.moving&&(i.position.x=a.at.x,i.position.z=a.at.z),a.apply?.(i,e)}this.shadowDirty=!0,this.dirty=!0,this.markCheck=performance.now()+Nr}applyY(e){let a=e.userData;e.position.y=(a.baseY??0)+(a.dropY??0)+(a.hoverY??0)}enterPart({group:e,spec:a},t,i,{drop:n}={}){let r=e.userData.wire;if(r){let{tube:s,count:S,ends:E}=r;s.geometry.setDrawRange(0,0),E.forEach(M=>M.scale.setScalar(.001)),this.tweens.add({delay:t,duration:260*i+1,easing:vt.outBack,onUpdate:M=>E[0].scale.setScalar(Math.max(.001,M))}),this.tweens.add({delay:t+120*i,duration:620*i+1,easing:vt.inOutCubic,onUpdate:M=>{s.geometry.setDrawRange(0,Math.ceil(M*S/48)*48),this.shadowDirty=!0}}),this.tweens.add({delay:t+700*i,duration:260*i+1,easing:vt.outBack,onUpdate:M=>E[1].scale.setScalar(Math.max(.001,M))});return}let o=n??(a.id==="breadboard"?24:46);e.userData.dropY=o,e.scale.setScalar(.001),this.applyY(e),this.tweens.add({delay:t,duration:720*i+1,easing:vt.linear,onUpdate:s=>{e.userData.dropY=o*(1-vt.outCubic(s)),e.scale.setScalar(Math.max(.001,vt.outBack(Math.min(1,s*1.15)))),this.applyY(e),this.shadowDirty=!0}})}exitPart({group:e},a){this.hovered===e&&this.setHovered(null),this.selection?.group===e&&!this.parts.has(this.selection.id)&&this.select(null);let t=e.userData.wire,i=()=>{this.scene.remove(e),Gn(e),this.shadowDirty=!0};if(t){let{tube:r,count:o,ends:s}=t;this.tweens.add({duration:380*a+1,easing:vt.inCubic,onUpdate:S=>{r.geometry.setDrawRange(0,Math.floor((1-S)*o/48)*48),s.forEach(E=>E.scale.setScalar(Math.max(.001,1-S))),this.shadowDirty=!0},onComplete:i});return}let n=e.scale.x;this.tweens.add({delay:60*a,duration:420*a+1,easing:vt.linear,onUpdate:r=>{e.scale.setScalar(Math.max(.001,n*(1-vt.inBack(r)))),e.userData.dropY=30*r*r,this.applyY(e),this.shadowDirty=!0},onComplete:i})}movePart(e,a,t){e.spec=a;let i=e.group,n=i.position.clone();n.y=i.userData.baseY;let r=a.at?a.at.clone():n.clone(),o=i.rotation.clone(),s=a.rot?new Fn(...a.rot):o;n.distanceTo(r)<.01&&o.equals(s)||(e.moving=!0,this.tweens.add({delay:120*t,duration:800*t+1,easing:vt.inOutCubic,onUpdate:(S,E)=>{i.position.lerpVectors(n,r,S),i.userData.baseY=i.position.y,i.userData.dropY=Math.sin(E*Math.PI)*16,i.rotation.set(o.x+(s.x-o.x)*S,o.y+(s.y-o.y)*S,o.z+(s.z-o.z)*S),this.applyY(i),this.shadowDirty=!0},onComplete:()=>{e.moving=!1}}))}pick(e,a){let t=this.canvas.getBoundingClientRect();this.ndc.set((e-t.left)/t.width*2-1,-((a-t.top)/t.height)*2+1),this.raycaster.setFromCamera(this.ndc,this.camera);let i=[this.board,...[...this.parts.values()].map(r=>r.group)],n=this.raycaster.intersectObjects(i,!0);for(let r of n){let o=r.object,s=null,S=null;for(;o;){o.userData.part&&(s??=o);let E=[...this.parts].find(([,M])=>M.group===o);if(E){S=E[0],o.userData.part&&(s=o);break}o=o.parent}if(s)return{group:s,info:s.userData.part,point:r.point,id:S,object:r.object}}return null}setupSelectionRing(){let e=new Bn,a=new bi({color:"#1aa3a1",transparent:!0,opacity:.85,depthWrite:!1}),t=new tt(new ki(.93,1,72),a),i=new tt(new ki(.8,.84,72),a.clone());i.material.opacity=.45;for(let n of[t,i])n.rotation.x=-Math.PI/2,n.layers.set(ai),e.add(n);e.visible=!1,e.renderOrder=-1,this.scene.add(e),this.ring=e}select(e){if(!e){this.selection&&(this.selection=null,this.ring.visible=!1,this.dirty=!0,this.hooks.onSelect?.(null));return}let a=typeof e=="string",t=a?e:[...this.parts].find(([,n])=>n.group===e)?.[0]??null,i=a?this.parts.get(t)?.group:e;i&&(this.selection={id:t,group:i},this.ring.visible=!0,this.placeRing(),this.dirty=!0,this.hooks.onSelect?.({id:t,info:i.userData.part,group:i}))}placeRing(){let e=this.selection;if(!e)return;let a=e.group;if(e.sizedFor!==a){let n=Ed(a);if(n.isEmpty())return;let r=a.getWorldPosition(new q);e.offset=n.getCenter(new q).sub(r);let o=n.getSize(new q);e.radius=Math.max(8,Math.hypot(o.x,o.z)/2+3),e.rise=n.max.y-r.y,e.sizedFor=a,e.seatAt=null}let t=a.getWorldPosition(Sd).add(e.offset),i=`${t.x.toFixed(1)}|${t.z.toFixed(1)}`;e.seatAt!==i&&(e.seat=this.seatBelow(a,t,t.y-e.offset.y+e.rise),e.seatAt=i),this.ring.position.set(t.x,e.seat+.25,t.z),this.ring.scale.setScalar(e.radius)}seatBelow(e,a,t){this.raycaster.set(new q(a.x,t+40,a.z),new q(0,-1,0));let i=[this.board,...[...this.parts.values()].map(o=>o.group)].filter(o=>o!==e),n=o=>{for(let s=o;s;s=s.parent)if(s===e)return!0;return!1},r=this.raycaster.intersectObjects(i,!0).find(o=>!n(o.object));return r?Math.max(ii,r.point.y):ii}revealSelection(e){let a=this.selectionScreen();if(!a||!e)return;let{w:t,h:i}=this.size,n=i-e;if(a[1]>24&&a[1]<n-24&&a[0]>0&&a[0]<t)return;let r=[t/2,Math.max(40,n*.55)],o=this.controls,s=o.groundAt(a[0],a[1]),S=o.groundAt(r[0],r[1]),E=o.view.target.clone().add(s.sub(S));o.animateTo({target:E.toArray()},{duration:600})}pressRects(){let e=[],a=new ma,t=new q;for(let[,i]of this.parts){let n=i.spec.interact?.type;if(n!=="press"&&n!=="tap"||(jt(i.group,a,{loose:n==="press"}),a.isEmpty()))continue;let r={x0:1/0,y0:1/0,x1:-1/0,y1:-1/0};for(let o=0;o<8;o++){t.set(o&1?a.max.x:a.min.x,o&2?a.max.y:a.min.y,o&4?a.max.z:a.min.z);let[s,S]=this.projectPoint(t);r.x0=Math.min(r.x0,s),r.y0=Math.min(r.y0,S),r.x1=Math.max(r.x1,s),r.y1=Math.max(r.y1,S)}e.push(r)}return e}selectionScreen(){let e=this.selection;if(!e)return null;let a=e.group.userData.anchor,t=a?a.getWorldPosition(new q):jt(e.group).getCenter(new q);return this.projectPoint(t)}grab(e){if(e.target!==this.canvas)return null;let a=this.pick(e.clientX,e.clientY);if(!a?.id)return null;let t=this.parts.get(a.id),i=t?.spec.interact;if(!i)return null;let n=t.group;if((i.select==="stopped"?!this.sim:i.select!==!1)&&this.select(a.id),this.setHovered(null),i.type==="slide"){let r=new ri(new q(0,1,0),-a.point.y),o=a.point.clone().sub(n.position).setY(0),s=new q,S=!1;return{move:E=>{S||(S=!0,this.hooks.onParam?.("sweep",!1));let M=this.canvas.getBoundingClientRect();this.ndc.set((E.clientX-M.left)/M.width*2-1,-((E.clientY-M.top)/M.height)*2+1),this.raycaster.setFromCamera(this.ndc,this.camera),this.raycaster.ray.intersectPlane(r,s)&&this.hooks.onParam?.(i.param,i.toParam(s.sub(o)))}}}if(i.type==="knob"){let r=n.userData.knob??n,o=this.project(r),s=this.hooks.toStage,S=h=>{let x=s(h.clientX,h.clientY);return Math.atan2(x.y-o[1],x.x-o[0])},E=S(e),M=this.values[i.param]??i.min,N=(i.max-i.min)/(i.sweep*Math.PI/180);return{move:h=>{let x=S(h),T=Math.atan2(Math.sin(x-E),Math.cos(x-E));E=x,M=Math.min(i.max,Math.max(i.min,M+T*N)),this.hooks.onParam?.(i.param,Math.round(M))}}}if(i.type==="tap"){let r=n.userData.tapped?.(a.object),o=!1;return{move:s=>{Math.hypot(s.clientX-e.clientX,s.clientY-e.clientY)>6&&(o=!0)},up:()=>{!o&&r!==void 0&&this.hooks.onParam?.(i.param,r)}}}if(i.type==="press"){let r=n.userData.cap,o=n.userData.hold,s=S=>{if(this.inputs[i.input]=S,o){o.anim?.cancel();let E=o.t,M=+!!S;o.anim=this.tweens.add({duration:Math.max(1,Math.abs(M-E)*(S?o.down??620:o.up??480)),easing:N=>N,onUpdate:N=>{o.set(E+(M-E)*N),this.shadowDirty=!0}})}if(r){let E=r.position.y,M=n.userData.capY-(S?1.3:0);this.tweens.add({duration:90,easing:vt.outCubic,onUpdate:N=>{r.position.y=E+(M-E)*N}})}this.hooks.onInput?.(i.input,S),this.dirty=!0};if(s(!0),i.squeeze){let S=this.hooks.toStage,E=S(e.clientX,e.clientY).y,M=i.start??.4,N=h=>{this.inputs[i.squeeze]=h,n.userData.squeeze?.(h),this.dirty=!0};return N(M),{move:h=>N(Math.min(1,Math.max(.05,M+(S(h.clientX,h.clientY).y-E)/(i.travel??140)))),up:()=>{N(0),s(!1)}}}return{up:()=>s(!1)}}return null}setHovered(e){if(this.hovered===e)return;let a=this.hovered;this.hovered=e;let t=(n,r)=>{if(!n||n.userData.part?.lift===!1||n.userData.noLift||n.userData.wire)return;n.userData.baseY??=n.position.y;let o=n.userData.hoverY??0;n.userData.hoverAnim?.cancel(),n.userData.hoverAnim=this.tweens.add({duration:220,easing:vt.outCubic,onUpdate:s=>{n.userData.hoverY=o+(r-o)*s,this.applyY(n),this.shadowDirty=!0}})};t(a,0),t(e,e?.userData.part?.big?2.5:1.6),this.el.classList.toggle("is-pointing",!!e);let i=e?[...this.parts.values()].find(n=>n.group===e)?.spec.interact?.type:null;this.el.dataset.hand=i??"",this.hooks.onHover?.(e?e.userData.part:null,this.pointer)}hoverPart(e){let a=e?this.parts.get(e)?.group??null:null;this.pointedFrom=a,this.setHovered(a),this.dirty=!0}get hoveredId(){let e=this.hovered;if(!e)return null;for(let[a,t]of this.parts)if(t.group===e)return a;return null}updateHover(){if(this.pointedFrom||!this.pointer||this.dragging)return;let e=this.pointer;if(e.target!==this.canvas){this.setHovered(null);return}if(e.done)return;e.done=!0;let a=this.pick(e.x,e.y);this.setHovered(a?.group??null),a&&this.hooks.onHover?.(a.info,e)}click(e){if(document.elementFromPoint(e.clientX,e.clientY)!==this.canvas)return;let a=this.pick(e.clientX,e.clientY);a&&a.info.lift!==!1?this.select(a.id??a.group):this.select(null),this.hooks.onPick?.(a)}focusPoint(e,a=1.9){let t=this.view;return this.controls.animateTo({target:[e.x,Math.max(0,Math.min(e.y,12)),e.z],zoom:Math.min(22,Math.max(t.zoom,this.homeView().zoom)*a)},{duration:1e3})}focusAnchor(e){let a=this.anchor(e);return a?this.focusPoint(a.getWorldPosition(new q)):null}focusGroup(e){let a=jt(e),t=a.getCenter(new q),i=a.getSize(new q).length();return this.focusPoint(t,Math.min(2.6,Math.max(1.4,70/i)))}screenHull(e){let a=jt(e,void 0,{loose:!0});if(a.isEmpty())return null;let t=[],i=new q;for(let n of[a.min.x,a.max.x])for(let r of[a.min.y,a.max.y])for(let o of[a.min.z,a.max.z])t.push(this.projectPoint(i.set(n,r,o)));return Td(t)}markAxes(){let e=this.controls.view.azimuth,a=new q(Math.cos(e),0,-Math.sin(e)),t=new q(-Math.sin(e),0,-Math.cos(e)),i=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1)],n=(o,s)=>o.reduce((S,E)=>E.dot(s)>S.dot(s)?E:S),r=n(i,a);return{along:r,up:n(i.filter(o=>Math.abs(o.dot(r))<.5),t)}}markQuad(e,a,t,i,n){let r=new q;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([o,s])=>(r.copy(e).addScaledVector(a,o*i/2).addScaledVector(t,s*n/2),this.projectPoint(r)))}partHulls(){return[this.board,...[...this.parts.values()].map(e=>e.group)].map(e=>this.screenHull(e)).filter(Boolean)}placeMark(){this.mark.hide(),this.markAz=null;let{w:e,h:a}=this.size;if(e<200||a<160)return;this.placeCamera(),this.camera.updateMatrixWorld();let t=this.controls,i=t.view.zoom*t.fit,n=Math.min(270,Math.max(180,e*.25))/i,r=n*this.mark.aspect,{along:o,up:s}=this.markAxes(),S=this.partHulls();if(!S.length)return;let E=(this.hooks.blockers?.()??[]).map(_=>_.poly??[[_.x0,_.y0],[_.x1,_.y0],[_.x1,_.y1],[_.x0,_.y1]]),M=[...S,...E],N=_=>!_.some(([v,w])=>v<10||w<10||v>e-10||w>a-10)&&!M.some(v=>Ir(_,v,8)),h=Ja[this.lessonId]?.mark,x=Math.abs(Math.atan2(Math.sin(t.view.azimuth-Ct.azimuth),Math.cos(t.view.azimuth-Ct.azimuth)));if(h&&x<10*Ca){let _=new q(h.at[0],-3.95,h.at[1]),v=new q(h.along[0],0,h.along[1]),w=new q(h.up[0],0,h.up[1]),d=h.width*this.mark.aspect;if(N(this.markQuad(_,v,w,h.width,d))){this.layMark(_,v,w,h.width,d);return}}let T=1/0,k=-1/0,g=-1/0;for(let _ of S)for(let[v,w]of _)T=Math.min(T,v),k=Math.max(k,v),g=Math.max(g,w);let l=[(T+k)/2,g+20],b=new ri(new q(0,1,0),4),D=new q,p=null;for(let _=16;_<a-16;_+=14)for(let v=16;v<e-16;v+=14){if(this.ndc.set(v/e*2-1,-(_/a)*2+1),this.raycaster.setFromCamera(this.ndc,this.camera),!this.raycaster.ray.intersectPlane(b,D))continue;let w=Math.hypot(v-l[0],(_-l[1])*1.6);p&&w>=p.score||N(this.markQuad(D,o,s,n,r))&&(p={score:w,at:D.clone()})}p&&this.layMark(p.at.setY(-3.95),o,s,n,r)}layMark(e,a,t,i,n){this.mark.place(e,a,t,i),this.markSpot={along:a,up:t,width:i,height:n},this.markAz=this.controls.view.azimuth,this.mark.show(performance.now()),this.dirty=!0}markCovered(){if(!this.mark.active||!this.markSpot)return!1;let{along:e,up:a,width:t,height:i}=this.markSpot,n=this.markQuad(this.mark.mesh.position,e,a,t,i);return this.partHulls().some(r=>Ir(n,r,4))}footprints(){let e=new ma;this.boardFootprint||=(jt(this.board,e),{kind:"board",x0:e.min.x,z0:e.min.z,x1:e.max.x,z1:e.max.z});let a=[this.boardFootprint];for(let[t,i]of this.parts){let n=i.group;if(n.userData.wire)continue;let r=`${n.position.x.toFixed(1)}|${n.position.z.toFixed(1)}|${n.scale.x.toFixed(2)}|${n.rotation.y.toFixed(3)}`;i.printKey!==r&&(jt(n,e),i.printKey=r,i.print=e.isEmpty()?null:{kind:t,x0:e.min.x,z0:e.min.z,x1:e.max.x,z1:e.max.z}),i.print&&a.push(i.print)}return a}setGrid(e){this.grid.visible=e,this.dirty=!0}setReducedMotion(e){this.tweens.speed=e?.05:1}async runSketch(e,{out:a,trace:t}){this.stopSim();let i=++this.runToken;{if(this.flicker=od(this.leds,1150*this.tweens.speed),a(Ve("Compiling sketch…")),await this.tweens.wait(600),i!==this.runToken||(a(Ve("Uploading to Arduino Uno…")),await this.tweens.wait(600),i!==this.runToken))return!1;a(Ve("Done uploading."))}return this.levels={},this.sim=rd(e,{trace:t,pins:this.levels,scene:this.scene,parts:this.parts,leds:this.leds,params:new Proxy({},{get:(n,r)=>this.values[r]}),inputs:this.inputs,sound:()=>this.hooks.sound?.()??!0,setParam:(n,r)=>this.hooks.onParam?.(n,r,{fromSim:!0}),out:a,readout:n=>{this.readoutState=n},float:n=>{this.floats.push({...n,born:performance.now(),life:gd}),this.dirty=!0}}),this.dirty=!0,!0}setFlow(e){this.flowOn=e,e||this.flow.clear(),this.dirty=!0}wireParts(){let e=[];for(let[a,t]of this.parts)t.group.userData.wire&&e.push({id:a,spec:t.spec,group:t.group});return e}wirePoint(e,a,t=new q){let i=this.parts.get(e)?.group.userData.wire?.tube;return i?(i.updateWorldMatrix(!0,!1),i.geometry.parameters.path.getPoint(a,t).applyMatrix4(i.matrixWorld)):null}stopSim(){this.runToken=(this.runToken??0)+1,this.sim&&=(this.sim.stop(),null),this.flicker=null,this.levels=null,this.signals=null,this.flow.clear(),nd(this.leds),this.readoutState=null,this.floats=[],this.shadowDirty=!0,this.dirty=!0}loop(e){requestAnimationFrame(this.loop);let a=Math.min(64,e-(this.lastFrame??e));this.lastFrame=e;let t=this.dirty;this.tweens.active&&(this.tweens.update(e),t=!0);for(let{group:n}of this.parts.values())n.userData.tick?.(e)&&(t=!0,this.shadowDirty=!0);this.controls.update(a)&&(t=!0),this.autoRotate&&!this.dragging&&!this.controls.anim&&e-this.lastInput>4500&&this.controls.turn(1,Ct.azimuth),this.flicker?.update(e)&&(t=!0);let i=!this.dragging&&!this.controls.anim&&!this.tweens.active;if(i&&this.markAz!==null&&Math.abs(Math.atan2(Math.sin(this.view.azimuth-this.markAz),Math.cos(this.view.azimuth-this.markAz)))>45*Ca&&this.placeMark(),i&&this.markCheck&&e>this.markCheck){let n=this.markForce||this.markCovered();this.markCheck=0,this.markForce=!1,n&&this.placeMark()}if(this.mark.update(e)&&(t=!0),this.floats.length&&(this.floats=this.floats.filter(n=>e-n.born<n.life),t=!0),this.sim&&this.sim.update(e,a)&&(t=!0,this.sim?.shadows&&(this.shadowDirty=!0)),this.sim&&this.levels){let n=this.wireParts();this.signals=sd(n,this.levels),this.flowOn&&this.flow.update(this.signals,n,a)&&(t=!0)}this.updateHover(),t&&this.render()}render(){this.dirty=!1,this.shadowDirty&&=(this.renderer.shadowMap.needsUpdate=!0,!1),this.placeCamera(),this.selection&&this.placeRing();let e=this.view.zoom*this.controls.fit;this.composer.setLineScale(Math.min(1,Math.max(.6,Math.sqrt(e/vd)))),this.composer.render(this.scene,this.camera),this.hooks.onFrame?.(this)}};export{Ad as BoardStage};
