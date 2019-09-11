const crateFactoryFactory = () => {
    return (x: number, y: number, id: IdFactory) => {
        const crate: Crate = {
            id: id(), 
            entityType: ENTITY_TYPE_CRATE, 
            collisionGroup: COLLISION_GROUP_PUSHABLES, 
            collisionMask: COLLISION_MASK_PUSHABLES, 
            bounds: rectangleCenterBounds(x, y, .95, .95),
            boundsWithVelocity: [0, 0, 0, 0], 
            gravityMultiplier: 1, 
            lastCollisions: [0, 0, 0, 0, 0],
            mass: 2, 
            velocity: [0, 0], 
            graphic: crateGraphic, 
            palette: cratePalette, 
            airTurn: 1, 
        };    
        return [crate];
    };
};